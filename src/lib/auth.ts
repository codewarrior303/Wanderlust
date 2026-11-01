import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { memoryAdapter } from "better-auth/adapters/memory";
import { MongoClient } from "mongodb";

const memoryDb = {
  user: [],
  session: [],
  account: [],
  verification: [],
};

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "wanderlust";

function createResilientDatabase(mongoUri?: string, databaseName?: string) {
  const memAdapterFactory = memoryAdapter(memoryDb);
  let mongoAdapterFactory: ReturnType<typeof mongodbAdapter> | null = null;
  let mongoFailed = false;

  if (mongoUri && (mongoUri.startsWith("mongodb://") || mongoUri.startsWith("mongodb+srv://"))) {
    try {
      const client = new MongoClient(mongoUri, {
        serverSelectionTimeoutMS: 2000,
      });
      mongoAdapterFactory = mongodbAdapter(client.db(databaseName || "wanderlust"), { client });
    } catch {
      mongoFailed = true;
    }
  } else {
    mongoFailed = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (options: any) => {
    const mem = memAdapterFactory(options);
    if (mongoFailed || !mongoAdapterFactory) return mem;

    try {
      const mongo = mongoAdapterFactory(options);
      const resilient: Record<string, unknown> = { ...mem };

      for (const key of Object.keys(mongo)) {
        const val = (mongo as Record<string, unknown>)[key];
        if (typeof val === "function") {
          resilient[key] = async (...args: unknown[]) => {
            if (mongoFailed) {
              return (mem as unknown as Record<string, (...a: unknown[]) => unknown>)[key](...args);
            }
            try {
              return await (val as (...a: unknown[]) => Promise<unknown>)(...args);
            } catch {
              mongoFailed = true;
              return (mem as unknown as Record<string, (...a: unknown[]) => unknown>)[key](...args);
            }
          };
        }
      }
      return resilient;
    } catch {
      return mem;
    }
  };
}

const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

/**
 * Better Auth Server Configuration
 * Configured with MongoDB adapter (plus resilient dev fallback),
 * email/password credentials, and Google OAuth social provider.
 */
export const auth = betterAuth({
  database: createResilientDatabase(uri, dbName),
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "wanderlust_better_auth_secret_token_at_least_32_characters_long",
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days session
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days cached
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: googleClientId || "google-client-id-placeholder",
      clientSecret: googleClientSecret || "google-client-secret-placeholder",
    },
  },
});

export type Auth = typeof auth;
