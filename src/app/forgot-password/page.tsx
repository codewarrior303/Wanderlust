"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const forgotSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotValues = z.infer<typeof forgotSchema>;

export default function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotValues>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = (values: ForgotValues) => {
    setSubmittedEmail(values.email);
    setIsSent(true);
    toast.success("Recovery email sent", {
      description: `Instructions sent to ${values.email}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#0C0B0B] tracking-tight font-sans">
            Reset Password
          </h1>
          <p className="text-sm text-[#6C696D] mt-2">
            Enter your email to receive recovery instructions
          </p>
        </div>

        <div className="rounded-3xl border border-white/80 glass-panel p-8 sm:p-10 shadow-xl">
          {isSent ? (
            <div className="space-y-6 text-center py-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                Check Your Inbox
              </h3>
              <p className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
                We have emailed password reset instructions to{" "}
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {submittedEmail}
                </span>
                . Please follow the link provided to set a new password.
              </p>
              <Link href="/sign-in" className="block pt-2">
                <Button className="w-full h-12 rounded-xl font-bold bg-[#15A1BF]">
                  Return to Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="forgot-page-email" className="mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                  <Input
                    id="forgot-page-email"
                    type="email"
                    placeholder="Enter your registered email"
                    className="pl-10"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-sm font-bold uppercase tracking-wider rounded-xl mt-2 bg-[#15A1BF] hover:bg-[#11849d]"
              >
                Send Reset Link
              </Button>

              <div className="pt-4 text-center">
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15A1BF] hover:underline"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
