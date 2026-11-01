"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { UserProfile } from "@/lib/types";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  authModalView: "signin" | "signup" | "forgot-password";
  openAuthModal: (view?: "signin" | "signup" | "forgot-password") => void;
  closeAuthModal: () => void;
  signIn: (email: string, password?: string) => Promise<boolean>;
  signUp: (name: string, email: string, password?: string) => Promise<boolean>;
  signInWithGoogle: () => Promise<boolean>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const ADMIN_EMAIL = "abirahnafshahriar@gmail.com";

export function checkIsAdmin(user?: UserProfile | null): boolean {
  if (!user || !user.email) return false;
  return user.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

export function getHighResAvatar(url?: string): string {
  if (!url) return "/images/avatar-alex.webp";
  if (url.includes("googleusercontent.com")) {
    return url.replace(/=s\d+(-c)?$/, "=s1000-c");
  }
  return url;
}

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function saveSession(user: UserProfile) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("wanderlust_auth_user", JSON.stringify(user));
    localStorage.setItem(
      "wanderlust_auth_expiry",
      (Date.now() + SEVEN_DAYS_MS).toString()
    );
  } catch {
    // ignore
  }
}

function clearSession() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem("wanderlust_auth_user");
    localStorage.removeItem("wanderlust_auth_expiry");
  } catch {
    // ignore
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<
    "signin" | "signup" | "forgot-password"
  >("signin");

  useEffect(() => {
    // 1. Sync active session from Better Auth server
    authClient
      .getSession()
      .then((sessionRes) => {
        if (sessionRes?.data?.user) {
          const u = sessionRes.data.user;
          let storedProfile: Partial<UserProfile> = {};
          try {
            const raw = typeof window !== "undefined" ? localStorage.getItem("wanderlust_auth_user") : null;
            if (raw) storedProfile = JSON.parse(raw);
          } catch {
            // ignore
          }

          const userEmail = u.email || "";
          const syncUser: UserProfile = {
            id: u.id,
            name: storedProfile.name || u.name || userEmail.split("@")[0] || "Traveler",
            email: userEmail,
            avatar: getHighResAvatar(storedProfile.avatar || u.image || "/images/avatar-alex.webp"),
            role: checkIsAdmin({ email: userEmail } as UserProfile) ? "admin" : "user",
            location: storedProfile.location || "",
            nationality: storedProfile.nationality || "",
            twoFactorEnabled: storedProfile.twoFactorEnabled || false,
            passwordLastChanged: storedProfile.passwordLastChanged,
            memberSince: storedProfile.memberSince || new Date().toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            }),
            stats: storedProfile.stats || {
              totalBookings: 0,
              countriesVisited: 0,
              totalSpent: 0,
              upcomingTrips: 0,
            },
          };
          setUser(syncUser);
          saveSession(syncUser);
        }
      })
      .catch(() => {});

    // 2. Check localStorage for saved session with 7-day expiration verification
    try {
      const stored = localStorage.getItem("wanderlust_auth_user");
      const expiry = localStorage.getItem("wanderlust_auth_expiry");

      if (stored) {
        if (expiry && Date.now() > Number(expiry)) {
          clearSession();
          setUser(null);
        } else {
          const parsed = JSON.parse(stored);
          parsed.role = checkIsAdmin(parsed) ? "admin" : "user";
          setUser(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const openAuthModal = (view: "signin" | "signup" | "forgot-password" = "signin") => {
    setAuthModalView(view);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const signIn = async (email: string, password?: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      let loggedUser: UserProfile | null = null;

      // 1. Attempt Better Auth signIn via API
      try {
        const res = await authClient.signIn.email({
          email,
          password: password || "password123",
        });
        if (res?.data?.user) {
          loggedUser = {
            id: res.data.user.id,
            name: res.data.user.name || email.split("@")[0],
            email: res.data.user.email,
            avatar: res.data.user.image || "/images/avatar-sarah.webp",
            role: "user",
            location: "",
            nationality: "",
            memberSince: "May 2026",
            stats: { totalBookings: 0, countriesVisited: 0, totalSpent: 0, upcomingTrips: 0 },
          };
        }
      } catch {
        // Fallback to local registered accounts
      }

      // 2. Check locally registered users from custom signup
      if (!loggedUser && typeof window !== "undefined") {
        try {
          const registered = JSON.parse(
            localStorage.getItem("wanderlust_registered_users") || "[]"
          );
          const found = registered.find(
            (r: { user: UserProfile; password?: string }) =>
              r.user.email.toLowerCase() === email.toLowerCase()
          );
          if (found) {
            if (password && found.password && found.password !== password) {
              toast.error("Incorrect password", {
                description: "The password you entered does not match your account.",
              });
              return false;
            }
            loggedUser = found.user;
          }
        } catch {
          // ignore
        }
      }

      // If account not found in Better Auth or registered accounts
      if (!loggedUser) {
        toast.error("Account Not Found", {
          description: "No registered account was found with this email. Please create an account first.",
        });
        return false;
      }

      setUser(loggedUser);
      saveSession(loggedUser);
      toast.success("Welcome back!", {
        description: `Signed in as ${loggedUser.name}`,
      });
      setIsAuthModalOpen(false);
      return true;
    } catch {
      toast.error("Failed to sign in. Please verify your credentials.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (
    name: string,
    email: string,
    password?: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      let createdUser: UserProfile | null = null;

      // 1. Attempt Better Auth signUp via API
      try {
        const res = await authClient.signUp.email({
          name: name || "Traveler",
          email,
          password: password || "password123",
        });

        if (res?.data?.user) {
          createdUser = {
            id: res.data.user.id,
            name: res.data.user.name || name,
            email: res.data.user.email,
            avatar: res.data.user.image || "/images/avatar-sarah.webp",
            role: "user",
            location: "",
            nationality: "",
            memberSince: new Date().toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            }),
            stats: { totalBookings: 0, countriesVisited: 0, totalSpent: 0, upcomingTrips: 0 },
          };
        }
      } catch {
        // Fallback to local registered accounts
      }

      // 2. Client persistent registration
      if (!createdUser) {
        createdUser = {
          id: "user-" + Date.now().toString(36),
          name: name || "Traveler",
          email: email || "traveler@wanderlust.com",
          avatar: "/images/avatar-alex.webp",
          role: "user",
          location: "",
          nationality: "",
          memberSince: new Date().toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
          stats: {
            totalBookings: 0,
            countriesVisited: 0,
            totalSpent: 0,
            upcomingTrips: 0,
          },
        };
      }

      // Persist to registered user list so user can sign in anytime with their password
      if (typeof window !== "undefined") {
        try {
          const registered = JSON.parse(
            localStorage.getItem("wanderlust_registered_users") || "[]"
          );
          registered.push({
            user: createdUser,
            password: password || "password123",
          });
          localStorage.setItem(
            "wanderlust_registered_users",
            JSON.stringify(registered)
          );
        } catch {
          // ignore
        }
      }

      setUser(createdUser);
      saveSession(createdUser);
      toast.success("Account created successfully!", {
        description: `Welcome, ${createdUser.name}! Your account has been registered.`,
      });
      setIsAuthModalOpen(false);
      return true;
    } catch {
      toast.error("Sign up failed. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      const res = await authClient.signIn.social({
        provider: "google",
        callbackURL: window.location.origin + "/destinations",
      });

      if (res?.error) {
        toast.error("Google Sign-In Error", {
          description: res.error.message || "Failed to initialize Google OAuth.",
        });
        return false;
      }

      if (res?.data?.url) {
        window.location.href = res.data.url;
        return true;
      }
      return true;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Google authentication failed";
      toast.error("Google Sign-In Error", {
        description: message,
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      try {
        await authClient.signOut();
      } catch {
        // ignore client error if offline
      }
      setUser(null);
      clearSession();
      toast.info("You have been signed out.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>): Promise<boolean> => {
    if (!user) return false;
    const updated = { ...user, ...data };
    setUser(updated);
    saveSession(updated);
    toast.success("Profile updated successfully!");
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        isAuthModalOpen,
        authModalView,
        openAuthModal,
        closeAuthModal,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
