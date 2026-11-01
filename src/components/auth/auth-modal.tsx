"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/auth-context";
import { Mail, Lock, User as UserIcon, Loader2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { GoogleIcon } from "@/components/ui/google-icon";
import { LegalModal } from "./legal-modal";
import {
  encryptCredential,
  decryptCredential,
  REMEMBER_ME_STORAGE_KEY,
} from "@/lib/security";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms of service",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SignInFormValues = z.infer<typeof signInSchema>;
type SignUpFormValues = z.infer<typeof signUpSchema>;
type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function AuthModal() {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalView,
    openAuthModal,
    signIn,
    signUp,
    signInWithGoogle,
    isLoading,
  } = useAuth();

  const [resetSent, setResetSent] = useState(false);
  const [legalDoc, setLegalDoc] = useState<"terms" | "privacy" | null>(null);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);

  const {
    register: registerSignIn,
    handleSubmit: handleSignInSubmit,
    watch: watchSignIn,
    setValue: setValueSignIn,
    formState: { errors: signInErrors },
    reset: resetSignIn,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Load remembered credentials if stored within 7 days
  useEffect(() => {
    try {
      const stored = localStorage.getItem(REMEMBER_ME_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.expiresAt && Date.now() < Number(parsed.expiresAt)) {
          if (parsed.email) setValueSignIn("email", parsed.email);
          if (parsed.password) {
            decryptCredential(parsed.password).then((plain) => {
              if (plain) setValueSignIn("password", plain);
            });
          }
          setValueSignIn("rememberMe", true);
        }
      }
    } catch {
      // ignore
    }
  }, [setValueSignIn]);

  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    watch: watchSignUp,
    setValue: setValueSignUp,
    formState: { errors: signUpErrors },
    reset: resetSignUp,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const {
    register: registerForgot,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors },
    reset: resetForgot,
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSignIn = async (values: SignInFormValues) => {
    const success = await signIn(values.email, values.password);
    if (success) {
      if (values.rememberMe) {
        try {
          const encrypted = await encryptCredential(values.password);
          localStorage.setItem(
            REMEMBER_ME_STORAGE_KEY,
            JSON.stringify({
              email: values.email,
              password: encrypted,
              expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
            })
          );
        } catch {
          // ignore
        }
      } else {
        localStorage.removeItem(REMEMBER_ME_STORAGE_KEY);
      }
      resetSignIn();
    }
  };

  const onSignUp = async (values: SignUpFormValues) => {
    const success = await signUp(values.name, values.email, values.password);
    if (success) {
      resetSignUp();
    }
  };

  const onForgot = async (values: ForgotPasswordFormValues) => {
    setResetSent(true);
    toast.success("Password reset link sent", {
      description: `Instructions sent to ${values.email}`,
    });
    resetForgot();
  };

  return (
    <>
    <Dialog open={isAuthModalOpen} onOpenChange={closeAuthModal}>
      <DialogContent className="sm:max-w-[460px] p-6 sm:p-7 max-h-[95vh] overflow-hidden">
        {authModalView === "signin" && (
          <div>
            <DialogHeader className="mb-6 text-center sm:text-center">
              <DialogTitle className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                Welcome Back
              </DialogTitle>
              <DialogDescription className="text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                Resume your adventure with Wanderlust
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSignInSubmit(onSignIn)} className="space-y-4">
              <div>
                <Label htmlFor="signin-email" className="mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    {...registerSignIn("email")}
                  />
                </div>
                {signInErrors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {signInErrors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="signin-password" className="mb-2 block">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="signin-password"
                    type={showSignInPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    {...registerSignIn("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignInPassword((p) => !p)}
                    className="absolute right-3 top-3 p-0.5 text-[#6C696D] hover:text-[#15A1BF] transition-colors cursor-pointer"
                    aria-label={showSignInPassword ? "Hide password" : "Show password"}
                  >
                    {showSignInPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {signInErrors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {signInErrors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember-me"
                    checked={watchSignIn("rememberMe")}
                    onCheckedChange={(checked) =>
                      setValueSignIn("rememberMe", checked === true)
                    }
                  />
                  <label
                    htmlFor="remember-me"
                    className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => openAuthModal("forgot-password")}
                  className="text-xs sm:text-sm font-semibold text-[#15A1BF] hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6C696D] dark:text-[#B6B6B6]">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setValueSignUp("terms", true, { shouldValidate: true });
                signInWithGoogle();
              }}
              className="w-full h-11 gap-2.5 font-semibold text-xs"
              disabled={isLoading}
            >
              <GoogleIcon className="h-5 w-5 shrink-0" />
              <span>Sign In With Google</span>
            </Button>

            <p className="mt-6 text-center text-sm text-[#6C696D] dark:text-[#B6B6B6]">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => openAuthModal("signup")}
                className="font-semibold text-[#15A1BF] hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        )}

        {authModalView === "signup" && (
          <div>
            <DialogHeader className="mb-4 text-center sm:text-center">
              <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                Create Account
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                Start your adventure with Wanderlust
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSignUpSubmit(onSignUp)} className="space-y-2.5">
              <div>
                <Label htmlFor="signup-name" className="mb-1 block text-xs font-semibold">
                  Full Name
                </Label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-3 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="signup-name"
                    placeholder="Enter your name"
                    className="pl-10 h-10 text-xs"
                    {...registerSignUp("name")}
                  />
                </div>
                {signUpErrors.name && (
                  <p className="mt-0.5 text-xs text-red-500">
                    {signUpErrors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="signup-email" className="mb-1 block text-xs font-semibold">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-10 text-xs"
                    {...registerSignUp("email")}
                  />
                </div>
                {signUpErrors.email && (
                  <p className="mt-0.5 text-xs text-red-500">
                    {signUpErrors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="signup-password" className="mb-1 block text-xs font-semibold">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="signup-password"
                    type={showSignUpPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="pl-10 pr-10 h-10 text-xs"
                    {...registerSignUp("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignUpPassword((p) => !p)}
                    className="absolute right-3 top-2.5 p-0.5 text-[#6C696D] hover:text-[#15A1BF] transition-colors cursor-pointer"
                    aria-label={showSignUpPassword ? "Hide password" : "Show password"}
                  >
                    {showSignUpPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {signUpErrors.password && (
                  <p className="mt-0.5 text-xs text-red-500">
                    {signUpErrors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="signup-confirm-password" className="mb-1 block text-xs font-semibold">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="signup-confirm-password"
                    type={showSignUpConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="pl-10 pr-10 h-10 text-xs"
                    {...registerSignUp("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignUpConfirmPassword((p) => !p)}
                    className="absolute right-3 top-2.5 p-0.5 text-[#6C696D] hover:text-[#15A1BF] transition-colors cursor-pointer"
                    aria-label={showSignUpConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showSignUpConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {signUpErrors.confirmPassword && (
                  <p className="mt-0.5 text-xs text-red-500">
                    {signUpErrors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-2.5 pt-0.5 text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                <Checkbox
                  id="signup-terms"
                  checked={watchSignUp("terms")}
                  onCheckedChange={(checked) =>
                    setValueSignUp("terms", checked === true, { shouldValidate: true })
                  }
                  className="mt-0.5"
                />
                <label
                  htmlFor="signup-terms"
                  className="leading-snug select-none cursor-pointer"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLegalDoc("terms");
                    }}
                    className="font-bold text-[#15A1BF] hover:underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </button>{" "}
                  &amp;{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLegalDoc("privacy");
                    }}
                    className="font-bold text-[#15A1BF] hover:underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>
              {signUpErrors.terms && (
                <p className="text-xs text-red-500">
                  {signUpErrors.terms.message}
                </p>
              )}

              <Button
                type="submit"
                className="w-full h-11 text-sm font-semibold mt-1"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6C696D] dark:text-[#B6B6B6]">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setValueSignUp("terms", true, { shouldValidate: true });
                signInWithGoogle();
              }}
              className="w-full h-11 gap-2.5 font-semibold text-xs"
              disabled={isLoading}
            >
              <GoogleIcon className="h-5 w-5 shrink-0" />
              <span>Sign Up With Google</span>
            </Button>

            <p className="mt-6 text-center text-sm text-[#6C696D] dark:text-[#B6B6B6]">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => openAuthModal("signin")}
                className="font-semibold text-[#15A1BF] hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        )}

        {authModalView === "forgot-password" && (
          <div>
            <DialogHeader className="mb-6 text-center sm:text-center">
              <DialogTitle className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                Reset Password
              </DialogTitle>
              <DialogDescription className="text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                Enter your registered email to receive recovery instructions
              </DialogDescription>
            </DialogHeader>

            {resetSent ? (
              <div className="space-y-4 text-center py-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600">
                  <Mail className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Check your inbox
                </h4>
                <p className="text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                  We have dispatched a password reset link to your email address.
                </p>
                <Button
                  className="w-full mt-4"
                  onClick={() => openAuthModal("signin")}
                >
                  Return to Sign In
                </Button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit(onForgot)} className="space-y-4">
                <div>
                  <Label htmlFor="forgot-email" className="mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                    <Input
                      id="forgot-email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      {...registerForgot("email")}
                    />
                  </div>
                  {forgotErrors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {forgotErrors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold"
                >
                  Send Reset Link
                </Button>

                <p className="mt-4 text-center text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                  Remembered your password?{" "}
                  <button
                    type="button"
                    onClick={() => openAuthModal("signin")}
                    className="font-semibold text-[#15A1BF] hover:underline"
                  >
                    Back to Sign In
                  </button>
                </p>
              </form>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
    <LegalModal
      type={legalDoc}
      isOpen={!!legalDoc}
      onClose={() => setLegalDoc(null)}
    />
    </>
  );
}
