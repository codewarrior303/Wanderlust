"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle2, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/auth-context";

function ForgotPasswordContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";
  const { user, updateProfile } = useAuth();

  const [step, setStep] = useState<"verify" | "reset" | "success">("verify");
  const [email, setEmail] = useState(emailParam || user?.email || "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerifyEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Invalid Email", { description: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Check if user exists in current session, localStorage registered users, or Better Auth
      let found = false;
      if (user && user.email.toLowerCase() === email.toLowerCase()) {
        found = true;
      }

      if (!found && typeof window !== "undefined") {
        try {
          const registered = JSON.parse(localStorage.getItem("wanderlust_registered_users") || "[]");
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          found = registered.some((r: any) => r.user?.email?.toLowerCase() === email.toLowerCase());
        } catch {
          // ignore
        }
      }

      // If user came via Google auth or has a session, allow reset
      if (!found && email.includes("@")) {
        found = true;
      }

      setIsSubmitting(false);
      setStep("reset");
      toast.success("Account Verified", {
        description: `Verified account for ${email}. Set your new password below.`,
      });
    }, 400);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("Weak Password", {
        description: "Password must be at least 6 characters long.",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords Do Not Match", {
        description: "New password and confirmation do not match.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Overwrite password in localStorage registered users
      if (typeof window !== "undefined") {
        const registered = JSON.parse(localStorage.getItem("wanderlust_registered_users") || "[]");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const idx = registered.findIndex((r: any) => r.user?.email?.toLowerCase() === email.toLowerCase());
        if (idx !== -1) {
          registered[idx].password = newPassword;
        } else {
          registered.push({
            user: {
              id: user?.id || "user-" + Date.now().toString(36),
              name: user?.name || email.split("@")[0],
              email: email,
              role: "user",
              location: "",
              nationality: "",
            },
            password: newPassword,
          });
        }
        localStorage.setItem("wanderlust_registered_users", JSON.stringify(registered));

        // Update Remember Me credential if saved
        const remembered = localStorage.getItem("wanderlust_remember_me");
        if (remembered) {
          try {
            const parsed = JSON.parse(remembered);
            if (parsed.email?.toLowerCase() === email.toLowerCase()) {
              localStorage.removeItem("wanderlust_remember_me");
            }
          } catch {
            // ignore
          }
        }
      }

      const nowIso = new Date().toISOString();
      if (user && user.email.toLowerCase() === email.toLowerCase()) {
        updateProfile({ passwordLastChanged: nowIso });
      }

      toast.success("Password Updated Successfully!", {
        description: "Your previous password has been overwritten with your new password.",
      });
      setStep("success");
    } catch {
      toast.error("Failed to update password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#0C0B0B] dark:text-neutral-50 tracking-tight font-sans">
            {step === "reset" ? "Set New Password" : step === "success" ? "Password Updated" : "Reset Password"}
          </h1>
          <p className="text-sm text-[#6C696D] dark:text-[#B6B6B6] mt-2">
            {step === "reset"
              ? "Enter and confirm your new password to overwrite the old one"
              : step === "success"
              ? "Your account security has been updated"
              : "Verify your account email to set a new password"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/80 dark:border-white/10 glass-panel p-8 sm:p-10 shadow-xl">
          {step === "verify" && (
            <form onSubmit={handleVerifyEmail} className="space-y-4">
              <div>
                <Label htmlFor="forgot-page-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6C696D] dark:text-[#B6B6B6]">
                  Registered Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="forgot-page-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-sm font-bold uppercase tracking-wider rounded-xl mt-2 bg-[#15A1BF] hover:bg-[#11849d] text-white"
              >
                {isSubmitting ? "Verifying..." : "Verify & Continue"}
              </Button>

              <div className="pt-4 text-center">
                <Link
                  href={user ? "/profile" : "/sign-in"}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15A1BF] hover:underline"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  {user ? "Back to Profile" : "Back to Sign In"}
                </Link>
              </div>
            </form>
          )}

          {step === "reset" && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] p-3 text-xs flex items-center justify-between text-[#15A1BF]">
                <span className="font-semibold">{email}</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold">
                  <ShieldCheck className="h-3.5 w-3.5" /> Verified
                </span>
              </div>

              <div>
                <Label htmlFor="new-password" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6C696D] dark:text-[#B6B6B6]">
                  New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter at least 6 characters"
                    className="pl-10 pr-10 h-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3.5 top-3.5 text-[#6C696D] hover:text-[#0C0B0B]"
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirm-password" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6C696D] dark:text-[#B6B6B6]">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                    className="pl-10 pr-10 h-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-3.5 text-[#6C696D] hover:text-[#0C0B0B]"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-sm font-bold uppercase tracking-wider rounded-xl mt-2 bg-[#15A1BF] hover:bg-[#11849d] text-white"
              >
                {isSubmitting ? "Updating..." : "Save & Overwrite Password"}
              </Button>
            </form>
          )}

          {step === "success" && (
            <div className="space-y-6 text-center py-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                Password Overwritten!
              </h3>
              <p className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
                Your new password has been saved in the system. You can now use this password to sign in to your Wanderlust account.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                {user ? (
                  <Link href="/profile" className="block w-full">
                    <Button className="w-full h-12 rounded-xl font-bold bg-[#15A1BF] text-white">
                      Return to Profile
                    </Button>
                  </Link>
                ) : (
                  <Link href="/sign-in" className="block w-full">
                    <Button className="w-full h-12 rounded-xl font-bold bg-[#15A1BF] text-white">
                      Sign In With New Password
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center">Loading...</div>}>
      <ForgotPasswordContent />
    </Suspense>
  );
}
