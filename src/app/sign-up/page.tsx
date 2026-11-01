"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, User as UserIcon, Loader2, Eye, EyeOff } from "lucide-react";
import { GoogleIcon } from "@/components/ui/google-icon";
import { LegalModal } from "@/components/auth/legal-modal";

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms of Service & Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const router = useRouter();
  const { signUp, signInWithGoogle, isLoading } = useAuth();
  const [authError, setAuthError] = useState("");
  const [legalDoc, setLegalDoc] = useState<"terms" | "privacy" | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (values: SignUpValues) => {
    setAuthError("");
    if (!values.terms) {
      setAuthError("Please agree to the Terms of Service & Privacy Policy before creating your account.");
      return;
    }
    const success = await signUp(values.name, values.email, values.password);
    if (success) {
      router.push("/destinations");
    } else {
      setAuthError("Failed to register account.");
    }
  };

  const handleGoogle = async () => {
    setValue("terms", true, { shouldValidate: true });
    const success = await signInWithGoogle();
    if (success) {
      router.push("/destinations");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
      <div className="w-full max-w-[500px]">
        {/* Header matching Penpot Screen 09 */}
        <div className="text-center mb-4 sm:mb-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C0B0B] tracking-tight font-sans">
            Create Account
          </h1>
          <p className="text-xs sm:text-sm text-[#6C696D] mt-1">
            Start your adventure with Wanderlust
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/80 glass-panel p-6 sm:p-7 shadow-xl">
          {authError && (
            <div className="mb-3 rounded-xl bg-red-50 dark:bg-red-950/40 p-2.5 text-xs text-red-600 dark:text-red-400">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <Label htmlFor="page-signup-name" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Full Name
              </Label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="page-signup-name"
                  placeholder="Enter your name"
                  className="pl-11 h-12 rounded-xl bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="page-signup-email" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="page-signup-email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-11 h-12 rounded-xl bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="page-signup-password" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="page-signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="pl-11 pr-11 h-12 rounded-xl bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#6C696D] hover:text-[#15A1BF] transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="page-signup-confirm-password" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="page-signup-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="pl-11 pr-11 h-12 rounded-xl bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm"
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#6C696D] hover:text-[#15A1BF] transition-colors cursor-pointer"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="flex items-start gap-2.5 pt-1 text-xs text-[#6C696D] dark:text-[#B6B6B6]">
              <Checkbox
                id="page-signup-terms"
                checked={watch("terms")}
                onCheckedChange={(checked) =>
                  setValue("terms", checked === true, { shouldValidate: true })
                }
                className="mt-0.5"
              />
              <label
                htmlFor="page-signup-terms"
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
            {errors.terms && (
              <p className="text-xs text-red-500">{errors.terms.message}</p>
            )}

            <button
              type="submit"
              className="w-full h-11 sm:h-12 text-sm font-bold rounded-xl mt-1 bg-[#15A1BF] text-white hover:bg-[#11849d] transition-colors cursor-pointer shadow-sm flex items-center justify-center disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span>Creating Account...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider matching Penpot */}
          <div className="flex items-center gap-3 my-3.5">
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6C696D] dark:text-[#B6B6B6]">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          {/* Google Auth Button */}
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full h-11 sm:h-12 flex items-center justify-center gap-3 font-semibold text-xs rounded-xl border border-[#EEEEEE] dark:border-[#26262A] bg-white dark:bg-[#18181b] hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            disabled={isLoading}
          >
            <GoogleIcon className="h-5 w-5 shrink-0" />
            <span>Sign Up With Google</span>
          </button>

          <p className="mt-4 text-center text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6]">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-bold text-[#15A1BF] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <LegalModal
        type={legalDoc}
        isOpen={!!legalDoc}
        onClose={() => setLegalDoc(null)}
      />
    </div>
  );
}
