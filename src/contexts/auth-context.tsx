"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { UserProfile } from "@/lib/types";
import { initialUserProfile } from "@/lib/store";
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(initialUserProfile);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<
    "signin" | "signup" | "forgot-password"
  >("signin");

  useEffect(() => {
    // Check localStorage for saved session
    try {
      const stored = localStorage.getItem("wanderlust_auth_user");
      if (stored) {
        setUser(JSON.parse(stored));
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

  const signIn = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate Better Auth call
      await new Promise((resolve) => setTimeout(resolve, 600));
      const loggedUser: UserProfile = {
        ...initialUserProfile,
        email: email || initialUserProfile.email,
        name: email ? email.split("@")[0] : initialUserProfile.name,
      };
      setUser(loggedUser);
      localStorage.setItem("wanderlust_auth_user", JSON.stringify(loggedUser));
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
    email: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const newUser: UserProfile = {
        id: "user-" + Date.now().toString(36),
        name: name || "Traveler",
        email: email || "traveler@wanderlust.com",
        avatar: "/images/avatar-sarah.webp",
        role: "user",
        location: "United States",
        nationality: "United States",
        memberSince: "May 2026",
        stats: {
          totalBookings: 0,
          countriesVisited: 0,
          totalSpent: 0,
          upcomingTrips: 0,
        },
      };
      setUser(newUser);
      localStorage.setItem("wanderlust_auth_user", JSON.stringify(newUser));
      toast.success("Account created successfully!", {
        description: "Welcome to Wanderlust. Let's explore the world together.",
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
      await new Promise((resolve) => setTimeout(resolve, 800));
      const googleUser: UserProfile = {
        ...initialUserProfile,
        name: "Google Explorer",
        email: "explorer@gmail.com",
      };
      setUser(googleUser);
      localStorage.setItem("wanderlust_auth_user", JSON.stringify(googleUser));
      toast.success("Google authentication successful!");
      setIsAuthModalOpen(false);
      return true;
    } catch {
      toast.error("Google authentication failed.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setUser(null);
      localStorage.removeItem("wanderlust_auth_user");
      toast.info("You have been signed out.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>): Promise<boolean> => {
    if (!user) return false;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem("wanderlust_auth_user", JSON.stringify(updated));
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
