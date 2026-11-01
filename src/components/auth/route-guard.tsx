"use client";

import React from "react";
import Link from "next/link";
import { useAuth, checkIsAdmin } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Lock, ShieldAlert } from "lucide-react";

interface RouteGuardProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export function RouteGuard({ children, requireAdmin = false }: RouteGuardProps) {
  const { user, isAuthenticated, isLoading, openAuthModal } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#15A1BF] border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EDFCFF] dark:bg-[#12282e] text-[#15A1BF] mb-4 shadow-sm">
          <Lock className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Authentication Required
        </h2>
        <p className="max-w-md text-sm text-[#6C696D] dark:text-[#B6B6B6] mb-6">
          This page is private and requires you to sign in with your Wanderlust account to view and manage your travel details.
        </p>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => openAuthModal("signin")}
            className="h-11 px-6 font-semibold"
          >
            Sign In Now
          </Button>
          <Button
            variant="outline"
            onClick={() => openAuthModal("signup")}
            className="h-11 px-6 font-semibold"
          >
            Create Account
          </Button>
        </div>
      </div>
    );
  }

  if (requireAdmin && !checkIsAdmin(user)) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#FE9A00] mb-4 shadow-sm">
          <ShieldAlert className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Admin Access Required
        </h2>
        <p className="max-w-md text-sm text-[#6C696D] dark:text-[#B6B6B6] mb-6">
          Access to travel package management is restricted to the verified administrator account.
        </p>
        <Link href="/destinations">
          <Button className="h-11 px-6 font-semibold bg-[#15A1BF] hover:bg-[#11849d]">
            Return to Destinations
          </Button>
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
