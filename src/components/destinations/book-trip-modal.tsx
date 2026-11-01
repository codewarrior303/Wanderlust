"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TravelPackage } from "@/lib/types";
import { Calendar, Users, MapPin, CheckCircle, ShieldCheck, Loader2, ArrowLeft, Lock } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { DatePicker } from "@/components/ui/date-picker";

interface BookTripModalProps {
  pkg: TravelPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BookTripModal({ pkg, isOpen, onClose }: BookTripModalProps) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [guests, setGuests] = useState(1);
  const [departureDate, setDepartureDate] = useState(pkg?.departureDate || "05/15/2026");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<"details" | "2fa">("details");
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [codeError, setCodeError] = useState("");

  if (!pkg) return null;

  const totalPrice = pkg.price * guests;

  const handleClose = () => {
    setStep("details");
    setTwoFactorCode("");
    setCodeError("");
    onClose();
  };

  const handleBooking = async () => {
    if (!isAuthenticated || !user) {
      toast.error("Authentication Required", {
        description: "Please sign in or create an account to book your journey.",
      });
      handleClose();
      router.push(`/sign-in?redirect=/destinations/${pkg.id}`);
      return;
    }

    // If user has 2FA enabled and we're still on details step, require 2FA first
    if (user.twoFactorEnabled && step === "details") {
      setStep("2fa");
      setTwoFactorCode("");
      setCodeError("");
      return;
    }

    // If on 2FA step, validate 6-digit code
    if (step === "2fa") {
      if (twoFactorCode.trim().length !== 6) {
        setCodeError("Please enter a valid 6-digit verification code");
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          packageId: pkg.id,
          packageName: pkg.title,
          packageImage: pkg.imageUrl,
          country: pkg.country,
          location: pkg.location,
          departureDate: departureDate || pkg.departureDate,
          duration: pkg.duration,
          price: totalPrice,
          guests: guests,
        }),
      });

      if (!res.ok) throw new Error("Booking failed");
      const data = await res.json();
      toast.success("Trip Booked & Paid Successfully!", {
        description: `Booking reference: ${data.booking.bookingCode}. Departure on ${departureDate}.`,
      });
      handleClose();
      router.push("/my-bookings");
    } catch {
      toast.error("Failed to complete booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[540px] p-6 sm:p-8">
        {step === "details" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                Book Your Journey
              </DialogTitle>
              <DialogDescription className="text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                Secure your spot for {pkg.title}
              </DialogDescription>
            </DialogHeader>

            {/* Selected Package Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E6E8EB] dark:border-[#26262A] bg-neutral-50 dark:bg-[#18181b] p-4 flex gap-4 items-center">
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">
                  {pkg.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#6C696D] dark:text-[#B6B6B6] mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-[#15A1BF]" />
                  <span>{pkg.location}</span>
                </div>
                <p className="text-sm font-bold text-[#15A1BF] mt-1">
                  ${pkg.price} <span className="text-xs font-normal text-neutral-500">/ person</span>
                </p>
              </div>
            </div>

            {/* Booking Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div>
                <Label htmlFor="book-date" className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold">
                  <Calendar className="h-3.5 w-3.5 text-[#15A1BF]" /> Departure Date
                </Label>
                <DatePicker
                  id="book-date"
                  value={departureDate}
                  onChange={(d) => setDepartureDate(d)}
                  placeholder="Select departure date from calendar..."
                />
              </div>

              <div>
                <Label htmlFor="book-guests" className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold">
                  <Users className="h-3.5 w-3.5 text-[#15A1BF]" /> Number of Guests
                </Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-11 w-11 text-lg font-bold"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                  >
                    -
                  </Button>
                  <div className="flex-1 text-center font-bold text-base bg-white dark:bg-[#141416] border border-[#E6E8EB] dark:border-[#26262A] rounded-xl h-11 flex items-center justify-center">
                    {guests} {guests === 1 ? "Guest" : "Guests"}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-11 w-11 text-lg font-bold"
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-1.5 text-xs text-[#6C696D] dark:text-[#B6B6B6] bg-emerald-50/50 dark:bg-emerald-950/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-medium">
                <CheckCircle className="h-3.5 w-3.5 shrink-0" /> Free cancellation up to 7 days before departure
              </div>
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0" /> Comprehensive travel insurance included
              </div>
              {user?.twoFactorEnabled && (
                <div className="flex items-center gap-2 text-[#15A1BF] dark:text-[#38bdf8] font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" /> Two-Factor Authentication payment protection active
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-[#E6E8EB] dark:border-[#26262A] pt-3 space-y-1.5">
              <div className="flex justify-between text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                <span>${pkg.price} × {guests} {guests === 1 ? "person" : "people"}</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-neutral-900 dark:text-neutral-100 pt-1">
                <span>Total Amount</span>
                <span className="text-[#15A1BF] text-xl">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <DialogFooter className="mt-2 gap-2 sm:gap-0">
              <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button
                onClick={handleBooking}
                disabled={isSubmitting}
                className="h-12 px-6 font-bold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Confirming...
                  </>
                ) : user?.twoFactorEnabled ? (
                  "Proceed to 2FA Verification"
                ) : (
                  "Confirm & Book Now"
                )}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#15A1BF]/10 text-[#15A1BF] flex items-center justify-center">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                    Two-Factor Authorization
                  </DialogTitle>
                  <DialogDescription className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                    Confirm payment of {formatPrice(totalPrice)} for {pkg.title}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-4 my-2">
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#18181b] border border-[#E6E8EB] dark:border-[#26262A] space-y-2 text-sm">
                <div className="flex justify-between text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                  <span>Package</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">{pkg.title}</span>
                </div>
                <div className="flex justify-between text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                  <span>Authorized Account</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">{user?.email}</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-1 border-t border-[#E6E8EB] dark:border-[#26262A]">
                  <span>Payment Amount</span>
                  <span className="text-[#15A1BF] text-base">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div>
                <Label htmlFor="twofactor-code" className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block mb-2">
                  Enter 6-digit Authenticator Code
                </Label>
                <Input
                  id="twofactor-code"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  autoFocus
                  placeholder="000 000"
                  value={twoFactorCode}
                  onChange={(e) => {
                    setTwoFactorCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                    setCodeError("");
                  }}
                  className="h-14 text-center text-2xl tracking-[0.35em] font-mono font-bold bg-white dark:bg-[#141416] border-2 focus-visible:ring-[#15A1BF]"
                />
                {codeError && (
                  <p className="text-xs text-red-500 font-medium mt-1.5">{codeError}</p>
                )}
                <p className="text-[11px] text-[#6C696D] dark:text-[#B6B6B6] mt-2">
                  Open your Google Authenticator or TOTP app to view the active 6-digit security code.
                </p>
              </div>
            </div>

            <DialogFooter className="mt-2 flex items-center justify-between gap-2 sm:gap-0">
              <Button
                variant="outline"
                onClick={() => setStep("details")}
                disabled={isSubmitting}
                className="gap-1.5"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                onClick={handleBooking}
                disabled={isSubmitting || twoFactorCode.length < 6}
                className="h-11 px-6 font-bold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Authorizing...
                  </>
                ) : (
                  "Authorize & Pay Now"
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
