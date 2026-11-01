"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { TravelPackage } from "@/lib/types";
import { BookTripModal } from "@/components/destinations/book-trip-modal";
import { EditPackageModal } from "@/components/destinations/edit-package-modal";
import { DeletePackageModal } from "@/components/destinations/delete-package-modal";
import { useAuth } from "@/contexts/auth-context";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Star,
  CheckCircle,
  ShieldCheck,
  Headphones,
  Edit,
  Trash2,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";

const DEFAULT_ITINERARY = [
  {
    day: "01",
    title: "Arrival & Beach Welcome",
    desc: "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.",
  },
  {
    day: "02",
    title: "Cultural Temple Tour",
    desc: "Visit iconic temples including Tanah Lot and Uluwatu. Watch traditional Kecak dance at sunset.",
  },
  {
    day: "03",
    title: "Beach & Water Activities",
    desc: "Snorkeling, surfing lessons, or simply relax on pristine beaches. Evening beach barbecue.",
  },
  {
    day: "04",
    title: "Rice Terraces & Spa",
    desc: "Explore Tegalalang Rice Terraces and enjoy a traditional Balinese massage.",
  },
  {
    day: "05",
    title: "Mount Batur Sunrise Trek",
    desc: "Early morning volcano trek to watch the sunrise. Return for breakfast and rest.",
  },
  {
    day: "06",
    title: "Free Day & Shopping",
    desc: "Explore Ubud markets, art galleries, or enjoy resort amenities.",
  },
  {
    day: "07",
    title: "Departure",
    desc: "Final breakfast and transfer to airport with unforgettable memories.",
  },
];

const DEFAULT_REVIEWS = [
  {
    id: "r1",
    author: "Michael Chen",
    date: "March 2026",
    content: "Absolutely incredible experience! The itinerary was perfect and our guide was amazing.",
    rating: 5,
  },
  {
    id: "r2",
    author: "David Brown",
    date: "February 2026",
    content: "This trip exceeded all my expectations. Every detail was thoughtfully planned.",
    rating: 5,
  },
];

function DestinationDetailsContent() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { user } = useAuth();

  const [pkg, setPkg] = useState<TravelPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [travelersCount, setTravelersCount] = useState(2);

  // Modals
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/destinations/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        if (data.package) {
          setPkg(data.package);
        }
      })
      .catch(() => {
        toast.error("Destination not found");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#15A1BF] border-t-transparent" />
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="mx-auto max-w-4xl py-24 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Destination Not Found</h2>
        <p className="text-neutral-500 mb-6">
          The destination package you are looking for does not exist or was removed.
        </p>
        <Link href="/destinations">
          <button className="px-6 py-3 rounded-xl bg-[#15A1BF] text-white font-semibold">
            Back to Destinations
          </button>
        </Link>
      </div>
    );
  }

  const totalPrice = pkg.price * travelersCount;

  return (
    <div className="min-h-screen pt-28 pb-12 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Bar matching Penpot Screen 05: Back to Destinations + Edit & Cancel */}
        <div className="flex items-center justify-between">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#15A1BF] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Destinations</span>
          </Link>

          {/* Action buttons (always visible or for admin) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#15A1BF] text-xs font-bold text-white hover:bg-[#11849d] transition-colors cursor-pointer shadow-sm"
            >
              <Edit className="h-3.5 w-3.5" />
              <span>Edit</span>
            </button>

            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-[#EF4444] bg-white dark:bg-transparent text-xs font-bold text-[#EF4444] hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5 text-[#EF4444]" />
              <span>Cancel</span>
            </button>
          </div>
        </div>

        {/* Hero Banner matching Penpot Rectangle 31 (1280x500) */}
        <div className="relative aspect-[16/7] sm:h-[480px] w-full overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800 shadow-md">
          <Image
            src={pkg.imageUrl}
            alt={pkg.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            loading="eager"
            className="object-cover"
          />
        </div>

        {/* Content Layout: 840px left column + 400px right booking card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (lg:col-span-8 ~ 840px) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Title & Metadata */}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#6C696D] dark:text-[#B6B6B6] mb-2">
                <MapPin className="h-3.5 w-3.5 text-[#6C696D]" />
                <span>{pkg.country || pkg.location}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight font-sans">
                {pkg.title}
              </h1>

              <div className="flex items-center gap-6 mt-4 text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                  <span className="font-bold text-neutral-900 dark:text-neutral-100">
                    {pkg.rating.toFixed(1)}
                  </span>
                  <span>({pkg.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#6C696D]" />
                  <span>{pkg.duration}</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="border-t border-[#EEEEEE] dark:border-[#26262A] pt-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 font-sans">
                Overview
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {pkg.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="border-t border-[#EEEEEE] dark:border-[#26262A] pt-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 font-sans">
                Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(pkg.highlights && pkg.highlights.length > 0
                  ? pkg.highlights
                  : [
                      "Luxury beachfront accommodation",
                      "Traditional Balinese spa treatment",
                      "Sunrise trek to Mount Batur",
                      "Visit Uluwatu Temple at sunset",
                      "Private beach dinner experience",
                    ]
                ).map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] dark:bg-[#18181b] p-4 border border-[#EEEEEE] dark:border-[#26262A]"
                  >
                    <CheckCircle className="h-5 w-5 text-[#1E9E35] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trip Itinerary matching Penpot 06/07 */}
            <div className="border-t border-[#EEEEEE] dark:border-[#26262A] pt-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 font-sans">
                Itinerary
              </h2>
              <div className="space-y-4">
                {(pkg.itinerary && pkg.itinerary.length > 0
                  ? pkg.itinerary
                  : DEFAULT_ITINERARY
                ).map((dayItem) => (
                  <div
                    key={dayItem.day}
                    className="rounded-2xl border border-[#EEEEEE] dark:border-[#26262A] bg-white dark:bg-[#141416] p-5 shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EDFCFF] dark:bg-[#12282e] text-xs font-extrabold text-[#15A1BF]">
                        {dayItem.day}
                      </span>
                      <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                        {dayItem.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] pl-10 leading-relaxed">
                      {dayItem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Traveler Reviews matching Penpot */}
            <div className="border-t border-[#EEEEEE] dark:border-[#26262A] pt-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 font-sans">
                Traveler Reviews
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DEFAULT_REVIEWS.map((rev) => (
                  <div
                    key={rev.id}
                    className="rounded-2xl border border-[#EEEEEE] dark:border-[#26262A] bg-[#F8FAFC] dark:bg-[#141416] p-6 space-y-3"
                  >
                    <div className="flex items-center gap-1 text-[#FFB800]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FFB800]" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 italic">
                      &quot;{rev.content}&quot;
                    </p>
                    <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex justify-between text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        — {rev.author}
                      </span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-4 ~ 400px Sticky Booking Card) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-white/80 glass-panel p-8 shadow-xl space-y-6">
              {/* Pricing Display */}
              <div>
                <span className="text-xs text-[#6C696D] dark:text-[#B6B6B6] uppercase tracking-wider block">
                  Starting from
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-[#15A1BF]">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                    per person
                  </span>
                </div>
              </div>

              {/* Departure Date Selector */}
              <div>
                <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">
                  Departure Date
                </span>
                <div className="flex items-center justify-between rounded-xl border border-[#EEEEEE] dark:border-[#26262A] bg-[#F8FAFC] dark:bg-neutral-900/60 px-4 py-3 text-xs text-neutral-900 dark:text-neutral-100">
                  <span>{pkg.departureDate}</span>
                  <Calendar className="h-4 w-4 text-[#6C696D]" />
                </div>
              </div>

              {/* Number of Travelers Counter */}
              <div>
                <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">
                  Number of Travelers
                </span>
                <div className="flex items-center justify-between rounded-xl border border-[#EEEEEE] dark:border-[#26262A] bg-[#F8FAFC] dark:bg-neutral-900/60 px-4 py-2">
                  <button
                    onClick={() => setTravelersCount((c) => Math.max(1, c - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    <Minus className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" />
                  </button>
                  <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                    {travelersCount}
                  </span>
                  <button
                    onClick={() => setTravelersCount((c) => c + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" />
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex items-center justify-between pt-2 border-t border-[#EEEEEE] dark:border-[#26262A]">
                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                  Total Price:
                </span>
                <span className="text-2xl font-extrabold text-[#15A1BF]">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              {/* Book Now Button matching Penpot */}
              <button
                onClick={() => {
                  if (!user) {
                    toast.error("Authentication Required", {
                      description: "Please sign in or create an account to book your journey.",
                    });
                    router.push(`/sign-in?redirect=/destinations/${id}`);
                    return;
                  }
                  setIsBookModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 h-14 rounded-2xl bg-[#15A1BF] text-sm font-bold text-white hover:bg-[#11849d] transition-colors cursor-pointer shadow-lg shadow-[#15A1BF]/20"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* 3 Guarantees matching Penpot */}
              <div className="space-y-3 pt-4 border-t border-[#EEEEEE] dark:border-[#26262A] text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-[#1E9E35] shrink-0" />
                  <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-[#15A1BF] shrink-0" />
                  <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Headphones className="h-4 w-4 text-[#15A1BF] shrink-0" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Trip Modal */}
      <BookTripModal
        pkg={pkg}
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />

      {/* Edit Package Modal matching Screen 06 */}
      <EditPackageModal
        pkg={pkg}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdated={(updated) => setPkg(updated)}
      />

      {/* Delete Package Modal matching Screen 07 */}
      <DeletePackageModal
        pkg={pkg}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDeleted={() => {
          router.push("/destinations");
        }}
      />
    </div>
  );
}

export default function DestinationDetailsPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#15A1BF] border-t-transparent" />
        </div>
      }
    >
      <DestinationDetailsContent />
    </React.Suspense>
  );
}
