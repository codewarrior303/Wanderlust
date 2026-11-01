"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TravelPackage } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Star, MapPin, Calendar, ArrowUpRight, Edit2, Trash2 } from "lucide-react";

interface DestinationCardProps {
  pkg: TravelPackage;
  onBook?: (pkg: TravelPackage) => void;
  onEdit?: (pkg: TravelPackage) => void;
  onDelete?: (pkg: TravelPackage) => void;
  showAdminActions?: boolean;
}

export function DestinationCard({
  pkg,
  onBook,
  onEdit,
  onDelete,
  showAdminActions = false,
}: DestinationCardProps) {
  const router = useRouter();

  const [imgSrc, setImgSrc] = React.useState(pkg.imageUrl || "/images/bali.webp");

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;
    router.push(`/destinations/${pkg.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group flex flex-col rounded-3xl glass-card p-4 transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-[#15A1BF]/40"
    >
      {/* Image Container with Rating Pill */}
      <div className="relative aspect-[16/10] sm:h-[230px] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={imgSrc}
          alt={pkg.title}
          fill
          onError={() => setImgSrc("/images/bali.webp")}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating badge - Penpot pill at top right */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 shadow-sm">
          <span className="text-xs font-bold text-neutral-900">
            {pkg.rating.toFixed(1)}
          </span>
          <Star className="h-3.5 w-3.5 fill-[#FFB800] text-[#FFB800]" />
        </div>

        {/* Admin Quick Actions */}
        {showAdminActions && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {onEdit && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 rounded-full bg-white/90 dark:bg-black/80 shadow-md hover:bg-neutral-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(pkg);
                    }}
                    aria-label="Edit Package"
                  >
                    <Edit2 className="h-3.5 w-3.5 text-neutral-800 dark:text-neutral-200" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Edit Package</p>
                </TooltipContent>
              </Tooltip>
            )}
            {onDelete && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="destructive"
                    className="h-8 w-8 rounded-full shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(pkg);
                    }}
                    aria-label="Delete Package"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Delete Package</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        )}
      </div>

      {/* Card Details matching Penpot Frame 178 */}
      <div className="flex flex-1 flex-col pt-4">
        {/* Row 1: Location Pin & Country */}
        <div className="flex items-center gap-1.5 text-xs text-[#6C696D] dark:text-[#B6B6B6] mb-1.5">
          <MapPin className="h-3.5 w-3.5 text-[#6C696D] dark:text-[#B6B6B6]" />
          <span>{pkg.country || pkg.location}</span>
        </div>

        {/* Row 2: Title and Price on same row with clean wrap */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 mb-2">
          <Link href={`/destinations/${pkg.id}`} className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 hover:text-[#15A1BF] transition-colors leading-snug">
              {pkg.title}
            </h3>
          </Link>
          <span className="shrink-0 text-base font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
            ${pkg.price}
            <span className="text-xs font-normal text-[#6C696D] dark:text-[#B6B6B6]">
              /Person
            </span>
          </span>
        </div>

        {/* Row 3: Duration with Calendar */}
        <div className="flex items-center gap-1.5 text-xs text-[#6C696D] dark:text-[#B6B6B6] mb-4">
          <Calendar className="h-3.5 w-3.5 text-[#6C696D] dark:text-[#B6B6B6]" />
          <span>{pkg.duration}</span>
        </div>

        {/* Row 4: Teal Book Now + ArrowUpRight */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#F2F4F7] dark:border-[#26262A]">
          <Link
            href={`/destinations/${pkg.id}`}
            className="text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:text-[#15A1BF] transition-colors"
          >
            Details
          </Link>

          <button
            onClick={() => onBook?.(pkg)}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#15A1BF] hover:text-[#11849d] transition-colors cursor-pointer group/btn"
          >
            <span>BOOK NOW</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
