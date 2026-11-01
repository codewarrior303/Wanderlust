import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

/**
 * Better Auth API Catch-all Route Handler
 * Handles authentication endpoints:
 * - /api/auth/sign-in/email
 * - /api/auth/sign-up/email
 * - /api/auth/sign-out
 * - /api/auth/get-session
 * - /api/auth/sign-in/social (Google OAuth)
 * - /api/auth/callback/google
 */
export const { GET, POST } = toNextJsHandler(auth);
