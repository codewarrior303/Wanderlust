"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TravelPackage } from "@/lib/types";
import { Save, Loader2 } from "lucide-react";
import { toast } from "sonner";

const editSchema = z.object({
  title: z.string().min(2, "Package name is required"),
  country: z.string().min(2, "Country is required"),
  location: z.string().min(2, "Specific location is required"),
  category: z.enum(["Beach", "Adventure", "Cultural", "Luxury", "Mountain"]),
  duration: z.string().min(2, "Duration is required"),
  price: z.string().min(1, "Price must be provided"),
  departureDate: z.string().min(4, "Departure date is required"),
  imageUrl: z.string().min(2, "Image path or URL is required"),
  overview: z.string().min(10, "Description must be at least 10 characters"),
});

type EditFormValues = z.infer<typeof editSchema>;

interface EditPackageModalProps {
  pkg: TravelPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdated: (updated: TravelPackage) => void;
}

export function EditPackageModal({
  pkg,
  isOpen,
  onClose,
  onUpdated,
}: EditPackageModalProps) {
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<EditFormValues>({
    resolver: zodResolver(editSchema),
  });

  useEffect(() => {
    if (pkg) {
      reset({
        title: pkg.title,
        country: pkg.country,
        location: pkg.location,
        category: pkg.category,
        duration: pkg.duration,
        price: String(pkg.price),
        departureDate: pkg.departureDate,
        imageUrl: pkg.imageUrl,
        overview: pkg.overview,
      });
    }
  }, [pkg, reset]);

  if (!pkg) return null;

  const onSubmit = async (values: EditFormValues) => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/destinations/${pkg.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          price: Number(values.price),
        }),
      });
      if (!res.ok) throw new Error("Update failed");
      const data = await res.json();
      toast.success("Package updated successfully!");
      onUpdated(data.package);
      onClose();
    } catch {
      toast.error("Failed to update travel package.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] max-h-[92vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden p-6 sm:p-8">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Update Travel Package
          </DialogTitle>
          <DialogDescription className="text-sm text-[#6C696D] dark:text-[#B6B6B6]">
            Make changes to the travel package details below
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-title" className="mb-1.5 block">
                Package Title
              </Label>
              <Input id="edit-title" {...register("title")} />
              {errors.title && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="edit-country" className="mb-1.5 block">
                Country
              </Label>
              <Input id="edit-country" {...register("country")} />
              {errors.country && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="edit-category" className="mb-1.5 block">
                Category
              </Label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="edit-category" className="h-12 rounded-xl text-sm font-normal">
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
                <p className="mt-1 text-xs text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="edit-price" className="mb-1.5 block">
                Price (USD)
              </Label>
              <Input
                id="edit-price"
                type="number"
                placeholder="1299"
                {...register("price")}
              />
              {errors.price && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="edit-duration" className="mb-1.5 block">
                Duration
              </Label>
              <Input
                id="edit-duration"
                placeholder="7 Days / 6 Nights"
                {...register("duration")}
              />
              {errors.duration && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.duration.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-location" className="mb-1.5 block">
                Specific Location
              </Label>
              <Input
                id="edit-location"
                placeholder="Ubud & Seminyak, Bali"
                {...register("location")}
              />
              {errors.location && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="edit-date" className="mb-1.5 block">
                Departure Date
              </Label>
              <Input
                id="edit-date"
                placeholder="05/15/2026"
                {...register("departureDate")}
              />
              {errors.departureDate && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.departureDate.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="edit-image" className="mb-1.5 block">
              Image URL / Path
            </Label>
            <Input
              id="edit-image"
              placeholder="/images/bali.webp"
              {...register("imageUrl")}
            />
            {errors.imageUrl && (
              <p className="mt-1 text-xs text-red-500">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="edit-overview" className="mb-1.5 block">
              Description / Overview
            </Label>
            <Textarea
              id="edit-overview"
              rows={4}
              placeholder="Describe the travel experience..."
              {...register("overview")}
            />
            {errors.overview && (
              <p className="mt-1 text-xs text-red-500">
                {errors.overview.message}
              </p>
            )}
          </div>

          <DialogFooter className="pt-4 gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSaving}
              className="sm:mr-2 rounded-xl h-11 px-5 border-neutral-300 dark:border-neutral-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSaving}
              className="gap-2 font-bold bg-[#15A1BF] hover:bg-[#11849d] text-white shadow-md rounded-xl h-11 px-6"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
