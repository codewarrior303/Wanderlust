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
import { Calendar, Users, MapPin, CheckCircle, ShieldCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";

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

  if (!pkg) return null;

  const totalPrice = pkg.price * guests;

  const handleBooking = async () => {
    if (!isAuthenticated || !user) {
      toast.error("Authentication Required", {
        description: "Please sign in or create an account to book your journey.",
      });
      onClose();
      router.push(`/sign-in?redirect=/destinations/${pkg.id}`);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
      toast.success("Trip Booked Successfully!", {
        description: `Booking reference: ${data.booking.bookingCode}. Departure on ${departureDate}.`,
      });
      onClose();
      router.push("/my-bookings");
    } catch {
      toast.error("Failed to complete booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[540px] p-6 sm:p-8">
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
            <Input
              id="book-date"
              defaultValue={pkg.departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="h-11"
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
          <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
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
            ) : (
              "Confirm & Book Now"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
