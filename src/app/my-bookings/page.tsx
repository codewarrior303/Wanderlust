"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Booking } from "@/lib/types";
import { RouteGuard } from "@/components/auth/route-guard";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  Trash2,
  AlertCircle,
  Plane,
} from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";

export default function MyBookingsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // Cancel Dialog
  const [cancelTarget, setCancelTarget] = useState<Booking | null>(null);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  const fetchBookings = useCallback(() => {
    if (!user) {
      setBookings([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`/api/bookings?userId=${encodeURIComponent(user.id)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.bookings) {
          setBookings(data.bookings);
        }
      })
      .catch(() => {
        setBookings([]);
      })
      .finally(() => setLoading(false));
  }, [user]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const handleCancel = async () => {
    if (!cancelTarget) return;
    try {
      const res = await fetch(`/api/bookings/${cancelTarget.id}`, {
        method: "PATCH",
      });
      if (!res.ok) throw new Error("Cancel failed");
      toast.success("Booking cancelled", {
        description: `Booking #${cancelTarget.bookingCode} for ${cancelTarget.packageName} has been cancelled.`,
      });
      setIsCancelOpen(false);
      fetchBookings();
    } catch {
      toast.error("Failed to cancel booking.");
    }
  };

  const filteredBookings = bookings.filter((b) => {
    if (selectedFilter === "All") return true;
    return b.status.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <RouteGuard>
      <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header matching Penpot Screen 03 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0C0B0B] tracking-tight font-sans">
                My Bookings
              </h1>
              <p className="mt-2 text-base text-[#6C696D]">
                Manage and view your upcoming travel plans
              </p>
            </div>

            {/* Living Flow Filter Pills */}
            <div className="flex items-center gap-1.5 glass-pill p-1.5 rounded-2xl border border-white/80 shadow-xs">
              {["All", "Confirmed", "Pending", "Cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedFilter(status)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    selectedFilter === status
                      ? "bg-[#15A1BF] text-white shadow-sm"
                      : "text-[#6C696D] hover:text-[#0C0B0B] hover:bg-black/5"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Bookings List */}
          {loading ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#15A1BF] border-t-transparent" />
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="rounded-3xl border border-[#EEEEEE] dark:border-[#26262A] bg-white dark:bg-[#141416] p-12 text-center my-8 shadow-xs">
              <Plane className="mx-auto h-12 w-12 text-[#15A1BF] mb-4 stroke-1" />
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                No bookings found
              </h3>
              <p className="text-sm text-[#6C696D] dark:text-[#B6B6B6] mb-6 max-w-sm mx-auto">
                You haven&apos;t booked any trips under this filter yet. Explore our destinations and plan your next getaway!
              </p>
              <Link href="/destinations">
                <Button className="h-11 px-6 font-semibold bg-[#15A1BF] hover:bg-[#11849d]">
                  Browse Destinations
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBookings.map((b) => (
                <div
                  key={b.id}
                  className="group flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl glass-card p-6 shadow-sm transition-all"
                >
                  {/* Left: Thumbnail (400x225 in Penpot) */}
                  <div className="relative h-56 sm:h-60 lg:h-52 w-full lg:w-[380px] shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={b.packageImage || "/images/bali.webp"}
                      alt={b.packageName}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Middle: Details matching Penpot Frame 137 */}
                  <div className="flex-1 min-w-0 w-full space-y-3">
                    {/* Status Pill */}
                    <div>
                      {b.status === "Confirmed" && (
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F9EE] px-3.5 py-1 text-xs font-bold text-[#1E9E35]">
                          <CheckCircle className="h-3.5 w-3.5 text-[#1E9E35]" />
                          <span>Confirmed</span>
                        </div>
                      )}
                      {b.status === "Pending" && (
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5E5] px-3.5 py-1 text-xs font-bold text-[#FE9A00]">
                          <Clock className="h-3.5 w-3.5 text-[#FE9A00]" />
                          <span>Pending</span>
                        </div>
                      )}
                      {b.status === "Cancelled" && (
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FEE2E2] px-3.5 py-1 text-xs font-bold text-[#EF4444]">
                          <AlertCircle className="h-3.5 w-3.5 text-[#EF4444]" />
                          <span>Cancelled</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 truncate">
                      {b.packageName}
                    </h2>

                    {/* Departure Date & Booking ID */}
                    <div className="space-y-1.5 text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#6C696D] dark:text-[#B6B6B6]" />
                        <span>Departure: {b.departureDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#6C696D] dark:text-[#B6B6B6]" />
                        <span>Booking ID: {b.bookingCode}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100 pt-1">
                      {formatPrice(b.price)}
                    </div>
                  </div>

                  {/* Right: Actions matching Penpot Frame 272 (Cancel & View) */}
                  <div className="flex flex-row sm:flex-col lg:flex-row items-center gap-3 w-full lg:w-auto justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-[#EEEEEE] dark:border-[#26262A]">
                    {b.status !== "Cancelled" && (
                      <button
                        onClick={() => {
                          setCancelTarget(b);
                          setIsCancelOpen(true);
                        }}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl border border-[#EF4444] bg-white dark:bg-transparent text-xs font-bold text-[#EF4444] hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4 text-[#EF4444]" />
                        <span>Cancel</span>
                      </button>
                    )}

                    <Link href={`/destinations/${b.packageId}`} className="flex-1 sm:flex-none">
                      <button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#15A1BF] text-xs font-bold text-white hover:bg-[#11849d] transition-colors cursor-pointer shadow-sm">
                        <Eye className="h-4 w-4 text-white" />
                        <span>View</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cancel Confirmation Dialog */}
      <Dialog open={isCancelOpen} onOpenChange={setIsCancelOpen}>
        <DialogContent className="sm:max-w-[480px] p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              Cancel Booking
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
              Are you sure you want to cancel your booking for{" "}
              <strong className="text-neutral-900 dark:text-neutral-100">
                {cancelTarget?.packageName}
              </strong>{" "}
              (Ref: {cancelTarget?.bookingCode})? This action will release your reservation.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setIsCancelOpen(false)}>
              Keep Booking
            </Button>
            <Button variant="destructive" onClick={handleCancel}>
              Confirm Cancellation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </RouteGuard>
  );
}
