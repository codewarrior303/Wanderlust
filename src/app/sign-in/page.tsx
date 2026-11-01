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
import { Mail, Lock, Loader2 } from "lucide-react";
import { GoogleIcon } from "@/components/ui/google-icon";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type SignInValues = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const router = useRouter();
  const { signIn, signInWithGoogle, isLoading } = useAuth();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "sarah.mitchell@example.com",
      password: "password123",
      rememberMe: true,
    },
  });

  const onSubmit = async (values: SignInValues) => {
    setAuthError("");
    const success = await signIn(values.email, values.password);
    if (success) {
      router.push("/destinations");
    } else {
      setAuthError("Invalid email or password");
    }
  };

  const handleGoogle = async () => {
    const success = await signInWithGoogle();
    if (success) {
      router.push("/destinations");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
      <div className="w-full max-w-[500px]">
        {/* Header matching Penpot Screen 10 */}
        <div className="text-center mb-4 sm:mb-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight font-sans">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] mt-1">
            Resume your adventure with Wanderlust
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-[#EEEEEE] dark:border-[#26262A] bg-white dark:bg-[#141416] p-6 sm:p-7 shadow-sm">
          {authError && (
            <div className="mb-3 rounded-xl bg-red-50 dark:bg-red-950/40 p-2.5 text-xs text-red-600 dark:text-red-400">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label htmlFor="page-signin-email" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="page-signin-email"
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
              <Label htmlFor="page-signin-pass" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="page-signin-pass"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-11 h-12 rounded-xl bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2">
                <Checkbox id="page-remember" {...register("rememberMe")} />
                <label
                  htmlFor="page-remember"
                  className="text-xs text-[#6C696D] dark:text-[#B6B6B6] cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-[#15A1BF] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-11 sm:h-12 text-sm font-bold rounded-xl mt-1 bg-[#15A1BF] text-white hover:bg-[#11849d] transition-colors cursor-pointer shadow-sm flex items-center justify-center disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span>Signing In...</span>
                </>
              ) : (
                "Sign In"
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
            <span>Sign In With Google</span>
          </button>

          <p className="mt-4 text-center text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6]">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-bold text-[#15A1BF] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
