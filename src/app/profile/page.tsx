"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RouteGuard } from "@/components/auth/route-guard";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
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
  Globe,
  Plane,
  DollarSign,
  TrendingUp,
  Edit3,
  Camera,
  Shield,
  User,
  Mail,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Edit profile form state
  const [name, setName] = useState(user?.name || "Sarah Mitchell");
  const [email, setEmail] = useState(user?.email || "sarah.mitchell@example.com");
  const [location, setLocation] = useState(user?.location || "San Francisco, CA");
  const [nationality, setNationality] = useState(user?.nationality || "United States");
  const [avatar, setAvatar] = useState(user?.avatar || "/images/avatar-sarah.webp");
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateProfile({
        name,
        email,
        location,
        nationality,
        avatar,
      });
      setIsEditModalOpen(false);
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File is too large", {
        description: "Please choose an image file under 5MB.",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setAvatar(dataUrl);
        await updateProfile({ avatar: dataUrl });
        toast.success("Profile photo updated!", {
          description: "Your new avatar has been applied across the application.",
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerPhotoUpload = () => {
    fileInputRef.current?.click();
  };

  const stats = user?.stats || {
    totalBookings: 12,
    countriesVisited: 18,
    totalSpent: 15750,
    upcomingTrips: 2,
  };

  return (
    <RouteGuard>
      <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-[#F6F8FB] via-[#FAFCFF] to-[#F1F4F9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header matching Penpot Screen 08 */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight font-sans">
              My Profile
            </h1>
            <p className="mt-2 text-base text-[#6C696D] dark:text-[#B6B6B6]">
              Manage your account settings and travel preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Card: 400px User Identity Card */}
            <div className="lg:col-span-4 rounded-3xl glass-panel p-8 shadow-xl border border-white/60 dark:border-white/10 flex flex-col items-center text-center">
              {/* 150x150 Avatar with #15A1BF camera button badge */}
              <div className="relative mb-6">
                <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-[#15A1BF]/20 shadow-md">
                  <Image
                    src={user?.avatar || avatar}
                    alt={user?.name || "Sarah Mitchell"}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarFileChange}
                  accept="image/*"
                  className="hidden"
                />

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={triggerPhotoUpload}
                      className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#15A1BF] text-white shadow-md hover:bg-[#11849d] transition-all hover:scale-110 active:scale-95 cursor-pointer ring-2 ring-white dark:ring-[#141416]"
                      aria-label="Upload profile photo"
                    >
                      <Camera className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Change photo (Upload image)</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Name & Location */}
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                {user?.name || "Sarah Mitchell"}
              </h2>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6C696D] dark:text-[#B6B6B6] mt-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#6C696D]" />
                <span>{user?.location || "San Francisco, CA"}</span>
              </div>

              {/* Role badge */}
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#EDFCFF] dark:bg-[#12282e] px-3 py-1 text-xs font-bold text-[#15A1BF] uppercase tracking-wider">
                <Shield className="h-3 w-3" />
                {user?.role === "admin" ? "Verified Administrator" : "Travel Explorer"}
              </div>

              {/* Member Since & Nationality */}
              <div className="w-full mt-8 pt-6 border-t border-[#EEEEEE] dark:border-[#26262A] space-y-4 text-xs text-left">
                <div className="flex justify-between items-center">
                  <span className="text-[#6C696D] dark:text-[#B6B6B6]">Member since</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {user?.memberSince || "Mar 2024"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6C696D] dark:text-[#B6B6B6]">Nationality</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {user?.nationality || "United States"}
                  </span>
                </div>
              </div>

              {/* Edit Profile Button matching Penpot */}
              <button
                onClick={() => {
                  setName(user?.name || "Sarah Mitchell");
                  setEmail(user?.email || "sarah.mitchell@example.com");
                  setLocation(user?.location || "San Francisco, CA");
                  setNationality(user?.nationality || "United States");
                  setAvatar(user?.avatar || "/images/avatar-sarah.webp");
                  setIsEditModalOpen(true);
                }}
                className="w-full mt-8 flex items-center justify-center gap-2 h-12 rounded-xl bg-[#15A1BF] text-xs font-bold text-white hover:bg-[#11849d] transition-colors cursor-pointer shadow-sm"
              >
                <Edit3 className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Right Column: Travel Statistics & Settings (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Travel Statistics 4-Card Grid matching Penpot Frame 2087325711 */}
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 font-sans">
                  Travel Statistics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Total Bookings */}
                  <div className="flex items-center gap-4 rounded-2xl glass-card p-6 shadow-sm border border-white/60 dark:border-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] text-[#15A1BF]">
                      <Plane className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#6C696D] dark:text-[#B6B6B6] uppercase tracking-wider block">
                        Total Bookings
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-50">
                        {stats.totalBookings}
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Countries Visited */}
                  <div className="flex items-center gap-4 rounded-2xl glass-card p-6 shadow-sm border border-white/60 dark:border-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] text-[#15A1BF]">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#6C696D] dark:text-[#B6B6B6] uppercase tracking-wider block">
                        Countries Visited
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-50">
                        {stats.countriesVisited}
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Upcoming Trips */}
                  <div className="flex items-center gap-4 rounded-2xl glass-card p-6 shadow-sm border border-white/60 dark:border-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] text-[#15A1BF]">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#6C696D] dark:text-[#B6B6B6] uppercase tracking-wider block">
                        Upcoming Trips
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-50">
                        {stats.upcomingTrips}
                      </span>
                    </div>
                  </div>

                  {/* Card 4: Total Spent */}
                  <div className="flex items-center gap-4 rounded-2xl glass-card p-6 shadow-sm border border-white/60 dark:border-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] text-[#15A1BF]">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#6C696D] dark:text-[#B6B6B6] uppercase tracking-wider block">
                        Total Spent
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#15A1BF]">
                        {formatPrice(stats.totalSpent)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Security & Preferences */}
              <div className="rounded-3xl glass-panel p-8 shadow-xl border border-white/60 dark:border-white/10 space-y-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 font-sans">
                  Account Preferences
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between py-3 border-b border-[#EEEEEE] dark:border-[#26262A]">
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                        Email Address
                      </p>
                      <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                        {user?.email}
                      </p>
                    </div>
                    <Badge variant="success">Verified</Badge>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-[#EEEEEE] dark:border-[#26262A]">
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                        Password
                      </p>
                      <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                        Last changed 2 months ago
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        toast.success("Password reset link sent to your email.")
                      }
                    >
                      Change
                    </Button>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                        Two-Factor Authentication
                      </p>
                      <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                        Enhanced security for your bookings and payments
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast.info("2FA settings opened.")}
                    >
                      Enable
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal Dialog */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[500px] p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              Edit Profile
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6C696D] dark:text-[#B6B6B6]">
              Update your personal details and location preferences
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveProfile} className="space-y-4 my-2">
            <div>
              <Label className="mb-2 block text-xs font-semibold">
                Profile Avatar
              </Label>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#15A1BF]/40 shrink-0">
                  <Image
                    src={avatar || "/images/avatar-sarah.webp"}
                    alt="Preview"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Image URL (or upload from device)"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                      className="text-xs"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={triggerPhotoUpload}
                      className="text-xs shrink-0 rounded-xl"
                    >
                      <Camera className="h-3.5 w-3.5 mr-1" /> Browse
                    </Button>
                  </div>
                  <p className="text-[11px] text-[#6C696D] dark:text-[#B6B6B6]">
                    Paste an image link or click browse to upload from your computer
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="prof-name" className="mb-2 block text-xs font-semibold">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="prof-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="prof-email" className="mb-2 block text-xs font-semibold">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="prof-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="prof-loc" className="mb-2 block text-xs font-semibold">
                City / Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="prof-loc"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="prof-nat" className="mb-2 block text-xs font-semibold">
                Nationality
              </Label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-3.5 h-4 w-4 text-[#6C696D]" />
                <Input
                  id="prof-nat"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <DialogFooter className="mt-6 gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditModalOpen(false)}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSaving}
                className="font-bold bg-[#15A1BF] hover:bg-[#11849d]"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </RouteGuard>
  );
}
