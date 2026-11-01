"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TravelPackage } from "@/lib/types";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import { BookTripModal } from "@/components/destinations/book-trip-modal";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  MapPin,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Star,
  ShieldCheck,
  MapPin as MapPinIcon,
  Headphones,
  Compass,
  Camera,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPackageForBooking, setSelectedPackageForBooking] =
    useState<TravelPackage | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  // Hero Background Carousel with Luxury Destinations
  const heroBackgrounds = [
    { url: "/images/santorini.webp", title: "Santorini Island, Greece" },
    { url: "/images/swiss-alps.webp", title: "Swiss Alps Alpine Luxury" },
    { url: "/images/bali.webp", title: "Bali Tropical Paradise" },
    { url: "/images/kyoto.webp", title: "Kyoto Heritage Sanctuary" },
    { url: "/images/venice.webp", title: "Venice Grand Canal & Palazzos" },
  ];
  const [heroBgIndex, setHeroBgIndex] = useState(0);

  // Auto-cycle hero background every 8.5 seconds for a relaxed, ultra-premium pacing
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);

  // Search Bar state
  const [location, setLocation] = useState("");
  const [dateDuration, setDateDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [people, setPeople] = useState("");

  useEffect(() => {
    fetch("/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        if (data.packages) {
          setPackages(data.packages);
        }
      })
      .catch(() => {});
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("search", location);
    router.push(`/destinations?${params.toString()}`);
  };

  const handleBook = (pkg: TravelPackage) => {
    if (!isAuthenticated || !user) {
      toast.error("Authentication Required", {
        description: "Please sign in or create an account to book your journey.",
      });
      router.push(`/sign-in?redirect=/destinations/${pkg.id}`);
      return;
    }
    setSelectedPackageForBooking(pkg);
    setIsBookModalOpen(true);
  };

  const nextSlide = () => {
    if (packages.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const prevSlide = () => {
    if (packages.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  // Dynamically compute the 3 packages to display when sliding
  const displayedPackages = React.useMemo(() => {
    if (packages.length === 0) return [];
    const count = 3;
    const start = currentIndex % packages.length;
    const items: TravelPackage[] = [];
    for (let i = 0; i < Math.min(count, packages.length); i++) {
      items.push(packages[(start + i) % packages.length]);
    }
    return items;
  }, [packages, currentIndex]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO HEADER SECTION with Vertically Centered Content */}
      <section className="relative w-full min-h-[920px] lg:min-h-[980px] flex flex-col justify-between items-center overflow-hidden bg-black px-4 pt-28 pb-16">
        {/* Cinema-Grade Smooth Crossfade Hero Backgrounds with Professional Ken-Burns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroBackgrounds.map((bg, idx) => {
            const isActive = idx === heroBgIndex;
            return (
              <div
                key={bg.url}
                className={`absolute inset-0 transition-opacity duration-[2200ms] ease-in-out will-change-[opacity] ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={bg.url}
                  alt={bg.title}
                  fill
                  sizes="100vw"
                  priority={idx <= 1}
                  className={`object-cover object-center transition-transform duration-[9000ms] ease-out will-change-transform ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            );
          })}
          {/* Cinema luxury gradient overlay for high contrast and elegance */}
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/35 to-black/70 pointer-events-none" />

          {/* Professional Minimalist Slide Indicator on Left Edge (Out of Center View) */}
          <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-3 select-none">
            {heroBackgrounds.map((bg, idx) => {
              const isActive = idx === heroBgIndex;
              return (
                <button
                  key={bg.url}
                  onClick={() => setHeroBgIndex(idx)}
                  aria-label={`Go to ${bg.title}`}
                  className="group relative flex items-center justify-center cursor-pointer p-1.5"
                >
                  {/* Proper Geometrically Exact Circle Indicator */}
                  <span
                    className={`block rounded-full aspect-square shrink-0 transition-all duration-500 ${
                      isActive
                        ? "h-3.5 w-3.5 bg-[#15A1BF] ring-4 ring-[#15A1BF]/40 shadow-[0_0_12px_#15A1BF]"
                        : "h-2.5 w-2.5 bg-white/60 ring-2 ring-transparent group-hover:bg-white group-hover:scale-125"
                    }`}
                  />
                  {/* Premium White Background Tooltip Pill - Dead Centered */}
                  <span className="absolute left-8 h-8 px-4 inline-flex items-center justify-center leading-none text-center pt-[1px] rounded-full bg-white text-[#0C0B0B] border border-neutral-200/80 shadow-[0_8px_25px_rgba(0,0,0,0.2)] text-xs font-bold opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-40">
                    {bg.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Content CENTERED VERTICALLY in the Hero Canvas */}
        <div className="relative z-10 mx-auto max-w-[760px] text-center my-auto flex flex-col items-center justify-center pt-8">
          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold text-white leading-[1.08] tracking-tight font-sans mb-6 drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
          <p className="text-base sm:text-lg text-white/95 max-w-[640px] leading-relaxed mb-10 drop-shadow-md font-normal">
            Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
          </p>

          {/* Action Buttons matching Penpot Frame 272 (418x56 at 511,514) */}
          <div className="flex items-center gap-4">
            <Link href="/destinations">
              <button className="h-14 px-8 rounded-full bg-[#15A1BF] hover:bg-[#11849d] text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-xl hover:shadow-[0_0_25px_rgba(21,161,191,0.5)] transition-all active:scale-95 cursor-pointer">
                <span>EXPLORE NOW</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/destinations/bali-paradise">
              <button className="h-14 px-8 rounded-full bg-white/95 hover:bg-white text-[#0C0B0B] font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-xl transition-all active:scale-95 cursor-pointer backdrop-blur-md">
                <span>VIEW DESTINATION</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* 5-Block Search Bar NESTED LOWER INSIDE HERO SECTION */}
        <div className="relative z-30 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-auto mb-4">
          <form
            onSubmit={handleSearchSubmit}
            className="w-full h-auto sm:h-[74px] rounded-3xl sm:rounded-full glass-pill shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/80 flex flex-col sm:flex-row items-stretch overflow-hidden transition-all hover:shadow-[0_30px_70px_rgba(21,161,191,0.25)]"
          >
            {/* Block 1: Location */}
            <div className="flex-1 flex flex-col justify-center px-6 py-3.5 sm:py-0 border-b sm:border-b-0 sm:border-r border-neutral-200/60 hover:bg-black/5 transition-colors">
              <span className="text-sm font-bold text-[#0C0B0B]">
                Location
              </span>
              <input
                type="text"
                placeholder="Address, City or Zip"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-xs text-[#0C0B0B] placeholder:text-[#8C8C90] outline-none bg-transparent"
              />
            </div>

            {/* Block 2: Date / Duration */}
            <div className="flex-1 flex flex-col justify-center px-6 py-3.5 sm:py-0 border-b sm:border-b-0 sm:border-r border-neutral-200/60 hover:bg-black/5 transition-colors">
              <span className="text-sm font-bold text-[#0C0B0B]">
                Date/Duration
              </span>
              <input
                type="text"
                placeholder="Anytime / 3 Days"
                value={dateDuration}
                onChange={(e) => setDateDuration(e.target.value)}
                className="text-xs text-[#0C0B0B] placeholder:text-[#8C8C90] outline-none bg-transparent"
              />
            </div>

            {/* Block 3: Budget */}
            <div className="flex-1 flex flex-col justify-center px-6 py-3.5 sm:py-0 border-b sm:border-b-0 sm:border-r border-neutral-200/60 hover:bg-black/5 transition-colors">
              <span className="text-sm font-bold text-[#0C0B0B]">
                Budget
              </span>
              <input
                type="text"
                placeholder="$0 - $3,000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="text-xs text-[#0C0B0B] placeholder:text-[#8C8C90] outline-none bg-transparent"
              />
            </div>

            {/* Block 4: People */}
            <div className="flex-1 flex flex-col justify-center px-6 py-3.5 sm:py-0 border-b sm:border-b-0 sm:border-r border-neutral-200/60 hover:bg-black/5 transition-colors">
              <span className="text-sm font-bold text-[#0C0B0B]">
                People
              </span>
              <input
                type="text"
                placeholder="5 - 10 Guests"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="text-xs text-[#0C0B0B] placeholder:text-[#8C8C90] outline-none bg-transparent"
              />
            </div>

            {/* Block 5: Search Button matching Penpot (200x74 in #15A1BF) */}
            <button
              type="submit"
              className="w-full sm:w-[180px] h-14 sm:h-full bg-[#15A1BF] hover:bg-[#11849d] text-white font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center transition-colors cursor-pointer shadow-md sm:rounded-r-full"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* 2. FEATURED DESTINATIONS SECTION matching Penpot 'Featured Destination' (1440x1054 at y:746) */}
      <section className="py-24 bg-white dark:bg-[#0c0b0b] transition-colors">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Header matching Penpot Frame 192 (1280x98 at 80,866) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-normal text-[#0C0B0B] dark:text-neutral-50 tracking-tight font-sans">
                Featured Destinations
              </h2>
              <p className="text-base sm:text-lg text-[#6C696D] dark:text-[#B6B6B6] mt-2">
                Handpicked travel experiences for the adventure seekers
              </p>
            </div>

            <Link href="/destinations">
              <button className="h-14 px-6 rounded-full border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] hover:bg-neutral-50 dark:hover:bg-neutral-800 text-[#0C0B0B] dark:text-neutral-100 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-xs">
                <span>ALL DESTINATIONS</span>
                <ArrowRight className="h-4 w-4 text-[#15A1BF]" />
              </button>
            </Link>
          </div>

          {/* Cards Grid matching Penpot Frame 190 (Projects 628x576) with Dynamic Slider */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group flex flex-col rounded-3xl bg-white border border-[#E6E8EB] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with rounded-3xl & 4.5 golden star badge */}
                <div className="relative aspect-[16/10] sm:h-[320px] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Top-Right Badge with Golden Yellow Star */}
                  <div className="absolute top-4 right-4 h-10 px-3 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center gap-1.5 text-xs font-bold text-[#0C0B0B]">
                    <Star className="h-3.5 w-3.5 fill-[#FFB800] text-[#FFB800]" />
                    <span>{pkg.rating ? pkg.rating.toFixed(1) : "4.8"}</span>
                  </div>
                </div>

                {/* Content underneath matching Penpot Frame 178 (628x152) */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    {/* Location with MapPinLine */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#6C696D] dark:text-[#B6B6B6] mb-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#6C696D]" />
                      <span>{pkg.country}</span>
                    </div>

                    {/* Title and Price row matching Penpot Frame 176 with Clean Wrap */}
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
                      <Link href={`/destinations/${pkg.id}`} className="min-w-0 flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0C0B0B] dark:text-neutral-50 hover:text-[#15A1BF] transition-colors leading-snug">
                          {pkg.title}
                        </h3>
                      </Link>
                      <span className="text-lg sm:text-xl font-bold text-[#0C0B0B] dark:text-neutral-100 whitespace-nowrap shrink-0">
                        ${pkg.price}/Person
                      </span>
                    </div>

                    {/* Calendar row matching Penpot Button with Calendar icon */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#6C696D] dark:text-[#B6B6B6]">
                      <Calendar className="h-3.5 w-3.5 text-[#6C696D]" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Bottom BOOK NOW button matching Penpot Frame (text in #15A1BF with ArrowUpRight) */}
                  <div className="pt-4 border-t border-[#E6E8EB] dark:border-[#26262A] flex items-center justify-between">
                    <button
                      onClick={() => handleBook(pkg)}
                      className="font-bold text-xs uppercase tracking-wider text-[#15A1BF] hover:text-[#11849d] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>BOOK NOW</span>
                      <ArrowUpRight className="h-4 w-4 text-[#15A1BF]" />
                    </button>
                    <Link
                      href={`/destinations/${pkg.id}`}
                      className="text-xs font-medium text-[#6C696D] hover:underline"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls matching Penpot 'Slider' (1280x60 at y:1620) */}
          <div className="mt-16 flex items-center justify-between gap-6 pt-6">
            <span className="text-2xl sm:text-3xl font-normal text-[#0C0B0B] dark:text-neutral-100 font-sans">
              {packages.length > 0 ? `${currentIndex + 1}/${packages.length}` : "1/5"}
            </span>

            {/* Vector 11 divider line */}
            <div className="flex-1 h-px bg-[#E6E8EB] dark:bg-[#26262A]" />

            {/* Arrows matching Penpot Frame 229 (60x60 circles) */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="h-14 w-14 rounded-full border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center text-[#B6B6B6] hover:text-neutral-900 transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="h-14 w-14 rounded-full border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center text-[#B6B6B6] hover:text-neutral-900 transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE WANDERLUST matching Penpot 'Why' (1440x626 at y:1800, fills=['#edfcff']) */}
      <section className="py-24 bg-[#EDFCFF] dark:bg-[#0f2329] transition-colors">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-normal text-[#0C0B0B] dark:text-white tracking-tight font-sans">
              Why Choose Wanderlust
            </h2>
            <p className="text-base sm:text-lg text-[#6C696D] dark:text-[#a0c5cc] mt-2">
              Your trusted partner for exceptional travel experiences
            </p>
          </div>

          {/* 3 White Cards matching Penpot Frame 1618873625 (410x248, white) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Safe & Secure */}
            <div className="rounded-3xl bg-white dark:bg-[#141416] p-8 shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-[248px]">
              <div className="h-12 w-12 flex items-center justify-center text-[#15A1BF]">
                <ShieldCheck className="h-12 w-12 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C0B0B] dark:text-white mb-2">
                  Safe & Secure
                </h3>
                <p className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
                  Your safety is our priority with comprehensive travel insurance and 24/7 support.
                </p>
              </div>
            </div>

            {/* Card 2: Expert Guides */}
            <div className="rounded-3xl bg-white dark:bg-[#141416] p-8 shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-[248px]">
              <div className="h-12 w-12 flex items-center justify-center text-[#15A1BF]">
                <Compass className="h-12 w-12 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C0B0B] dark:text-white mb-2">
                  Expert Guides
                </h3>
                <p className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
                  Local experts who bring destinations to life with authentic cultural insights.
                </p>
              </div>
            </div>

            {/* Card 3: 24/7 Support */}
            <div className="rounded-3xl bg-white dark:bg-[#141416] p-8 shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-[248px]">
              <div className="h-12 w-12 flex items-center justify-center text-[#15A1BF]">
                <Headphones className="h-12 w-12 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C0B0B] dark:text-white mb-2">
                  24/7 Support
                </h3>
                <p className="text-xs sm:text-sm text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
                  Round-the-clock customer service to assist you wherever your journey takes you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION matching Penpot 'Testimonials' (1440x690 at y:2426) */}
      <section className="py-24 bg-white dark:bg-[#0c0b0b] transition-colors">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-normal text-[#0C0B0B] dark:text-white tracking-tight font-sans">
                What Travelers Say
              </h2>
              <p className="text-base sm:text-lg text-[#6C696D] dark:text-[#B6B6B6] mt-2">
                Real experiences from our happy travelers
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="h-14 w-14 rounded-full border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] flex items-center justify-center text-[#B6B6B6] hover:text-neutral-900 transition-colors cursor-pointer">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button className="h-14 w-14 rounded-full border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] flex items-center justify-center text-[#B6B6B6] hover:text-neutral-900 transition-colors cursor-pointer">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards matching Penpot Frame 213 (628x312 with image split) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-3xl border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-sm text-[#0C0B0B] dark:text-neutral-200 italic leading-relaxed">
                  &quot;Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm text-[#0C0B0B] dark:text-white">
                    Marcus Vance
                  </h4>
                  <p className="text-xs text-[#6C696D]">Adventure Enthusiast</p>
                </div>
              </div>
              <div className="relative h-44 w-36 sm:h-52 sm:w-44 shrink-0 rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/images/avatar-alex.webp"
                  alt="Marcus Vance"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-3xl border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-sm text-[#0C0B0B] dark:text-neutral-200 italic leading-relaxed">
                  &quot;The Kyoto Blossom tour was pure poetry. The tea ceremony master and our private guide made us feel connected to Japanese history like never before.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm text-[#0C0B0B] dark:text-white">
                    Elena Rostova
                  </h4>
                  <p className="text-xs text-[#6C696D]">Cultural Explorer</p>
                </div>
              </div>
              <div className="relative h-44 w-36 sm:h-52 sm:w-44 shrink-0 rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/images/avatar-elena.webp"
                  alt="Elena Rostova"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER SECTION matching Penpot 'CTA' (1440x440 at y:3116) */}
      <section className="relative w-full h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-travel.webp"
            alt="Ready to Start Your Journey"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-[845px] mx-auto text-white">
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight font-sans mb-3">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 font-normal">
            Join thousands of travelers who have discovered the world with us
          </p>
          <Link href="/destinations">
            <button className="h-14 px-8 rounded-full bg-white hover:bg-neutral-100 text-[#0C0B0B] font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl transition-transform active:scale-95 cursor-pointer">
              <span>BOOK YOUR TRIP TODAY</span>
              <ArrowRight className="h-4 w-4 text-[#0C0B0B]" />
            </button>
          </Link>
        </div>
      </section>

      {/* Book Trip Modal */}
      <BookTripModal
        pkg={selectedPackageForBooking}
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  );
}
