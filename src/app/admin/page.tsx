"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { TravelPackage } from "@/lib/types";
import { RouteGuard } from "@/components/auth/route-guard";
import { EditPackageModal } from "@/components/destinations/edit-package-modal";
import { DeletePackageModal } from "@/components/destinations/delete-package-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Save as SaveIcon,
  Trash2,
  Edit2,
  MapPin,
  Clock,
  Calendar,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";
import { COUNTRIES } from "@/lib/countries";
import { DatePicker } from "@/components/ui/date-picker";

const addPackageSchema = z.object({
  title: z.string().min(2, "Package title is required"),
  country: z.string().min(2, "Country is required"),
  category: z.enum(["Beach", "Adventure", "Cultural", "Luxury", "Mountain"]),
  price: z.string().min(1, "Price must be provided"),
  duration: z.string().min(2, "Duration is required (e.g., 7 Days/6 Nights)"),
  departureDate: z.string().min(4, "Departure date is required (mm/dd/yyyy)"),
  imageUrl: z.string().min(2, "Image URL or path is required"),
  overview: z.string().min(10, "Description must be at least 10 characters"),
});

type AddPackageFormValues = z.infer<typeof addPackageSchema>;

function AdminThumbnail({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || "/images/bali.webp");
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="64px"
      onError={() => setImgSrc("/images/bali.webp")}
      className="object-cover"
    />
  );
}

export default function AdminPage() {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modals for editing and deleting existing packages
  const [editingPackage, setEditingPackage] = useState<TravelPackage | null>(null);
  const [deletingPackage, setDeletingPackage] = useState<TravelPackage | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Pagination matching user requirement: 5 items per page & professional 5-button window
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.max(1, Math.ceil(packages.length / itemsPerPage));

  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return packages.slice(start, start + itemsPerPage);
  }, [packages, currentPage]);

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

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddPackageFormValues>({
    resolver: zodResolver(addPackageSchema),
    defaultValues: {
      title: "",
      country: "",
      category: "Beach",
      price: "",
      duration: "",
      departureDate: "",
      imageUrl: "",
      overview: "",
    },
  });

  const fetchPackages = () => {
    fetch("/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        if (data.packages) {
          setPackages(data.packages);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const onSubmit = async (values: AddPackageFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/destinations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          location: `${values.country}`,
          price: Number(values.price),
        }),
      });

      if (!res.ok) throw new Error("Failed to add package");
      const data = await res.json();
      toast.success("Travel Package Added Successfully!", {
        description: `"${data.package.title}" is now published and available for travelers.`,
      });
      reset();
      fetchPackages();
    } catch {
      toast.error("Failed to add package. Please check your inputs.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RouteGuard requireAdmin={true}>
      <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Centered Add Package Form Container matching Penpot Screen 04 */}
          <div className="max-w-[800px] mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight font-sans">
                Add New Travel Package
              </h1>
              <p className="mt-2 text-sm text-[#6C696D] dark:text-[#B6B6B6]">
                Enter travel specifications to publish a new package
              </p>
            </div>

            {/* Form Card (800x858 in Penpot) */}
            <div className="rounded-3xl glass-panel p-8 sm:p-10 shadow-xl border border-white/70 dark:border-white/10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Destination Name */}
                <div>
                  <Label htmlFor="title" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    Destination Name
                  </Label>
                  <Input
                    id="title"
                    placeholder="Bali Paradise"
                    className="h-12 bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm rounded-xl"
                    {...register("title")}
                  />
                  {errors.title && (
                    <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
                  )}
                </div>

                {/* Country & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      Country
                    </Label>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id="country" className="h-12 rounded-xl text-sm font-normal">
                            <SelectValue placeholder="Select Country..." />
                          </SelectTrigger>
                          <SelectContent className="max-h-72">
                            {COUNTRIES.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.country && (
                      <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="category" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      Category
                    </Label>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id="category" className="h-12 rounded-xl text-sm font-normal">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Beach">Beach</SelectItem>
                            <SelectItem value="Adventure">Adventure</SelectItem>
                            <SelectItem value="Cultural">Cultural</SelectItem>
                            <SelectItem value="Luxury">Luxury</SelectItem>
                            <SelectItem value="Mountain">Mountain</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.category && (
                      <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
                    )}
                  </div>
                </div>

                {/* Price (USD) & Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      Price (USD)
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g., 1299"
                      className="h-12 bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm rounded-xl"
                      {...register("price")}
                    />
                    {errors.price && (
                      <p className="mt-1 text-xs text-red-500">{errors.price.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="duration" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      Duration
                    </Label>
                    <Input
                      id="duration"
                      placeholder="e.g., 7 Days/6 Nights"
                      className="h-12 bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm rounded-xl"
                      {...register("duration")}
                    />
                    {errors.duration && (
                      <p className="mt-1 text-xs text-red-500">{errors.duration.message}</p>
                    )}
                  </div>
                </div>

                {/* Departure Date */}
                <div>
                  <Label htmlFor="departureDate" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    Departure Date
                  </Label>
                  <Controller
                    name="departureDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        id="departureDate"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select departure date from calendar..."
                      />
                    )}
                  />
                  {errors.departureDate && (
                    <p className="mt-1 text-xs text-red-500">{errors.departureDate.message}</p>
                  )}
                </div>

                {/* Image URL */}
                <div>
                  <Label htmlFor="imageUrl" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    Image URL
                  </Label>
                  <Input
                    id="imageUrl"
                    placeholder="https://example.com/image.jpg"
                    className="h-12 bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm rounded-xl"
                    {...register("imageUrl")}
                  />
                  {errors.imageUrl && (
                    <p className="mt-1 text-xs text-red-500">{errors.imageUrl.message}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="overview" className="mb-2 block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    Description
                  </Label>
                  <Textarea
                    id="overview"
                    rows={5}
                    placeholder="Describe the travel experience..."
                    className="bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A] text-sm rounded-xl resize-none"
                    {...register("overview")}
                  />
                  {errors.overview && (
                    <p className="mt-1 text-xs text-red-500">{errors.overview.message}</p>
                  )}
                </div>

                {/* Buttons matching Penpot Frame 272 */}
                <div className="flex items-center justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => reset()}
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-xl border border-[#EF4444] bg-white dark:bg-transparent text-xs font-bold text-[#EF4444] hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4 text-[#EF4444]" />
                    <span>Cancel</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-[#15A1BF] text-xs font-bold text-white hover:bg-[#11849d] transition-colors cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <SaveIcon className="h-4 w-4 text-white" />
                        <span>Add Travel Package</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Manage Existing Packages Table */}
          <div className="rounded-3xl glass-panel p-6 sm:p-10 shadow-xl border border-white/70 dark:border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#EEEEEE] dark:border-[#26262A]">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                  Current Travel Packages
                </h2>
                <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                  Total {packages.length} packages active in the directory
                </p>
              </div>
            </div>

            {loading ? (
              <div className="flex min-h-[200px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#15A1BF] border-t-transparent" />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#EEEEEE] dark:border-[#26262A] text-xs font-bold uppercase tracking-wider text-[#6C696D] dark:text-[#B6B6B6]">
                      <th className="pb-4">Package</th>
                      <th className="pb-4">Category</th>
                      <th className="pb-4">Duration</th>
                      <th className="pb-4">Departure</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EEEEEE] dark:divide-[#26262A]">
                    {paginatedPackages.map((pkg: TravelPackage) => (
                      <tr
                        key={pkg.id}
                        className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors"
                      >
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                              <AdminThumbnail
                                src={pkg.imageUrl}
                                alt={pkg.title}
                              />
                            </div>
                            <div>
                              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                                {pkg.title}
                              </p>
                              <div className="flex items-center gap-1 text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                                <MapPin className="h-3 w-3 text-[#15A1BF]" />
                                <span>{pkg.country}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4">
                          <Badge variant="default" className="text-xs font-semibold">
                            {pkg.category}
                          </Badge>
                        </td>

                        <td className="py-4 text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-[#15A1BF]" />
                            {pkg.duration}
                          </div>
                        </td>

                        <td className="py-4 text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-[#15A1BF]" />
                            {pkg.departureDate}
                          </div>
                        </td>

                        <td className="py-4 font-bold text-[#15A1BF]">
                          {formatPrice(pkg.price)}
                        </td>

                        <td className="py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingPackage(pkg);
                                setIsEditOpen(true);
                              }}
                              className="h-9 px-3 rounded-xl gap-1 text-xs font-semibold"
                            >
                              <Edit2 className="h-3.5 w-3.5 text-[#15A1BF]" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setDeletingPackage(pkg);
                                setIsDeleteOpen(true);
                              }}
                              className="h-9 px-3 rounded-xl gap-1 text-xs font-semibold text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-950/20"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination Controls matching 2nd pic with professional 5-page window */}
            {!loading && totalPages > 1 && (
              <div className="pt-6 border-t border-[#EEEEEE] dark:border-[#26262A] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, packages.length)} of {packages.length} packages
                </p>
                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="h-9 w-9 rounded-xl"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {visiblePages.map((page: number) => {
                    const isCurrent = page === currentPage;
                    return (
                      <Button
                        key={page}
                        variant={isCurrent ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className={`h-9 w-9 rounded-xl font-bold text-xs ${
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
                    className="h-9 w-9 rounded-xl"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Edit Package Modal */}
        <EditPackageModal
          pkg={editingPackage}
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onUpdated={() => fetchPackages()}
        />

        {/* Delete Package Modal */}
        <DeletePackageModal
          pkg={deletingPackage}
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onDeleted={() => fetchPackages()}
        />
      </div>
    </RouteGuard>
  );
}
