/**
 * MongoDB Client & Database Placeholder
 * Configured for Next.js App Router with MongoDB driver support.
 * Falls back safely to memory store if no external MONGODB_URI is provided.
 */
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const options = {};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

if (process.env.NODE_ENV === "development" && uri) {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else if (uri) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getMongoDb(): Promise<Db | null> {
  if (!clientPromise) {
    return null;
  }
  try {
    const connectedClient = await clientPromise;
    return connectedClient.db(process.env.MONGODB_DB_NAME || "wanderlust");
  } catch (error) {
    console.warn("MongoDB connection fallback to memory store:", error);
    return null;
  }
}

export default clientPromise;
