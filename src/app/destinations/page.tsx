"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { TravelPackage } from "@/lib/types";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import { DestinationCard } from "@/components/destinations/destination-card";
import { BookTripModal } from "@/components/destinations/book-trip-modal";
import { SlidersHorizontal, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DestinationsPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters from Penpot Frame 281
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Booking Modal
  const [bookingPackage, setBookingPackage] = useState<TravelPackage | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        if (data.packages) {
          setPackages(data.packages);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Price Range filter
    if (selectedPriceRange === "under-1500") {
      result = result.filter((p) => p.price < 1500);
    } else if (selectedPriceRange === "1500-2500") {
      result = result.filter((p) => p.price >= 1500 && p.price <= 2500);
    } else if (selectedPriceRange === "above-2500") {
      result = result.filter((p) => p.price > 2500);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [packages, selectedCategory, selectedPriceRange, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage) || 1;
  const paginatedPackages = filteredPackages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const visiblePages = useMemo(() => {
    const maxButtons = 5;
    if (totalPages <= maxButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    let start = currentPage - 2;
    let end = currentPage + 2;
    if (start < 1) {
      start = 1;
      end = 5;
    } else if (end > totalPages) {
      end = totalPages;
      start = totalPages - 4;
    }
    const list: number[] = [];
    for (let p = start; p <= end; p++) {
      list.push(p);
    }
    return list;
  }, [currentPage, totalPages]);

  const handleBook = (pkg: TravelPackage) => {
    if (!isAuthenticated || !user) {
      toast.error("Authentication Required", {
        description: "Please sign in or create an account to book your journey.",
      });
      router.push(`/sign-in?redirect=/destinations/${pkg.id}`);
      return;
    }
    setBookingPackage(pkg);
    setIsBookModalOpen(true);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange("All");
    setSortBy("Featured");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header matching Penpot 02_Destinations */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight font-sans">
            Explore All Destinations
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#6C696D] dark:text-[#B6B6B6]">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Bar matching Penpot Frame 281 (1280x56) */}
        <div className="mb-8 rounded-2xl glass-panel p-2.5 shadow-sm border border-white/70 dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {/* 1. Category Custom Dropdown */}
            <Select
              value={selectedCategory}
              onValueChange={(val) => {
                setSelectedCategory(val);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="h-12 rounded-xl text-xs font-semibold">
                <SelectValue placeholder="Category: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Category: All</SelectItem>
                <SelectItem value="Beach">Beach</SelectItem>
                <SelectItem value="Cultural">Cultural</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Luxury">Luxury</SelectItem>
                <SelectItem value="Mountain">Mountain</SelectItem>
              </SelectContent>
            </Select>

            {/* 2. Price Range Custom Dropdown */}
            <Select
              value={selectedPriceRange}
              onValueChange={(val) => {
                setSelectedPriceRange(val);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="h-12 rounded-xl text-xs font-semibold">
                <SelectValue placeholder="Price Range: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Price Range: All</SelectItem>
                <SelectItem value="under-1500">Under $1,500</SelectItem>
                <SelectItem value="1500-2500">$1,500 - $2,500</SelectItem>
                <SelectItem value="above-2500">$2,500 and above</SelectItem>
              </SelectContent>
            </Select>

            {/* 3. SORT BY Custom Dropdown */}
            <Select
              value={sortBy}
              onValueChange={(val) => setSortBy(val)}
            >
              <SelectTrigger className="h-12 rounded-xl text-xs font-semibold uppercase tracking-wider">
                <SelectValue placeholder="SORT BY: Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Featured">SORT BY: Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* 4. ALL FILTERS Button */}
            <button
              onClick={() => setShowSearchModal(!showSearchModal)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#15A1BF] hover:bg-[#d8f7fc] dark:hover:bg-[#183942] transition-colors cursor-pointer border border-[#15A1BF]/20"
            >
              <SlidersHorizontal className="h-4 w-4 text-[#15A1BF]" />
              <span>ALL FILTERS</span>
            </button>
          </div>

          {/* Quick Search Dropdown Bar (when ALL FILTERS clicked) */}
          {showSearchModal && (
            <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3 px-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C696D]" />
                <input
                  type="text"
                  placeholder="Filter by country, title, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-[#15A1BF]"
                />
              </div>
              {(selectedCategory !== "All" || selectedPriceRange !== "All" || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-red-500 hover:underline px-2"
                >
                  Reset
                </button>
              )}
            </div>
          )}
        </div>

        {/* Showing X Destinations matching Penpot */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#6C696D] dark:text-[#B6B6B6]">
          <span>
            Showing <strong className="text-neutral-900 dark:text-neutral-100">{filteredPackages.length}</strong> destinations
          </span>
          {selectedCategory !== "All" && (
            <span className="text-[#15A1BF] font-semibold">
              Category: {selectedCategory}
            </span>
          )}
        </div>

        {/* 3-Column Destinations Grid matching Penpot Frame 190 */}
        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#15A1BF] border-t-transparent" />
          </div>
        ) : paginatedPackages.length === 0 ? (
          <div className="rounded-2xl border border-[#E6E8EB] dark:border-[#26262A] bg-white dark:bg-[#141416] p-12 text-center my-8">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              No destinations match your criteria
            </h3>
            <p className="text-sm text-[#6C696D] dark:text-[#B6B6B6] mb-6">
              Try adjusting your category or price range filters.
            </p>
            <Button onClick={resetFilters} variant="outline">
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPackages.map((pkg) => (
              <DestinationCard key={pkg.id} pkg={pkg} onBook={handleBook} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="h-10 w-10 rounded-xl"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {visiblePages.map((page) => {
              const isCurrent = page === currentPage;
              return (
                <Button
                  key={page}
                  variant={isCurrent ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className={`h-10 w-10 rounded-xl font-bold text-xs ${
                    isCurrent ? "bg-[#15A1BF] text-white" : ""
                  }`}
                >
                  {page}
                </Button>
              );
            })}
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="h-10 w-10 rounded-xl"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Book Trip Modal */}
      <BookTripModal
        pkg={bookingPackage}
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  );
}
