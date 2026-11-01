import { createAuthClient } from "better-auth/react";

/**
 * Better Auth Client configuration
 * Handles client-side authentication, sessions, and credentials.
 */
export const authClient = createAuthClient({
  baseURL:
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
