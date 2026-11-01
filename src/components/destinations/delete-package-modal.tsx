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
import { TravelPackage } from "@/lib/types";
import { Trash2, AlertTriangle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface DeletePackageModalProps {
  pkg: TravelPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onDeleted: (id: string) => void;
}

export function DeletePackageModal({
  pkg,
  isOpen,
  onClose,
  onDeleted,
}: DeletePackageModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  if (!pkg) return null;

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/destinations/${pkg.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      toast.success(`"${pkg.title}" removed successfully.`);
      onDeleted(pkg.id);
      onClose();
    } catch {
      toast.error("Failed to delete package.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px] p-6 sm:p-8">
        <DialogHeader className="gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/50 text-[#EF4444] mb-2">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Delete Travel Package
          </DialogTitle>
          <DialogDescription className="text-sm text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              &quot;{pkg.title}&quot;
            </span>
            ? This action cannot be undone and will permanently remove this
            travel package from the system.
          </DialogDescription>
        </DialogHeader>

        {/* Package summary card */}
        <div className="flex items-center gap-4 rounded-xl border border-[#E6E8EB] dark:border-[#26262A] bg-neutral-50 dark:bg-[#18181b] p-3 my-2">
          <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={pkg.imageUrl}
              alt={pkg.title}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 truncate">
              {pkg.title}
            </h4>
            <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
              {pkg.country} • {pkg.duration}
            </p>
            <p className="text-xs font-semibold text-[#15A1BF] mt-0.5">
              ${pkg.price} / person
            </p>
          </div>
        </div>

        <DialogFooter className="mt-4 gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isDeleting}
            className="sm:mr-2"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
            className="gap-2 font-semibold"
          >
            {isDeleting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="h-4 w-4" />
                Delete Package
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
