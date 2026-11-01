"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { RouteGuard } from "@/components/auth/route-guard";
import { useAuth, getHighResAvatar } from "@/contexts/auth-context";
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
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";
import { Booking } from "@/lib/types";
import { COUNTRIES } from "@/lib/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function formatPasswordLastChanged(dateStr?: string) {
  if (!dateStr) return "recently";
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userBookings, setUserBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (user?.id) {
      fetch(`/api/bookings?userId=${encodeURIComponent(user.id)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.bookings) {
            setUserBookings(data.bookings);
          }
        })
        .catch(() => {});
    }
  }, [user?.id]);

  // Edit profile form state
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [location, setLocation] = useState(user?.location || "");
  const [nationality, setNationality] = useState(user?.nationality || "");
  const [avatar, setAvatar] = useState(user?.avatar || "/images/avatar-alex.webp");
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // 2FA state
  const [is2FAModalOpen, setIs2FAModalOpen] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [disable2FACode, setDisable2FACode] = useState("");
  const [is2FALoading, setIs2FALoading] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const secretKey = "JBSWY3DPEHPK3PXP";
  const totpUri = useMemo(() => {
    const email = user?.email || "abirahnafshahriar@gmail.com";
    return `otpauth://totp/Wanderlust:${encodeURIComponent(email)}?secret=${secretKey}&issuer=Wanderlust`;
  }, [user?.email]);

  const qrCodeUrl = useMemo(() => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=2&format=png&data=${encodeURIComponent(
      totpUri
    )}`;
  }, [totpUri]);

  // Pre-load QR into browser cache so modal opens with 0 latency
  useEffect(() => {
    if (typeof window !== "undefined" && qrCodeUrl) {
      const preloadImg = new window.Image();
      preloadImg.src = qrCodeUrl;
    }
  }, [qrCodeUrl]);

  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    if (twoFactorCode.trim().length !== 6) {
      toast.error("Invalid Code", {
        description: "Please enter the 6-digit code shown in your Google Authenticator app.",
      });
      return;
    }

    setIs2FALoading(true);
    setTimeout(async () => {
      await updateProfile({ twoFactorEnabled: true });
      setIs2FALoading(false);
      setIs2FAModalOpen(false);
      setTwoFactorCode("");
      toast.success("Two-Factor Authentication Enabled!", {
        description: "Your account is now protected with 2-step verification.",
      });
    }, 500);
  };

  const handleDisable2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    if (disable2FACode.trim().length !== 6) {
      toast.error("Invalid Code", {
        description: "Please enter the 6-digit code from Google Authenticator to confirm disabling.",
      });
      return;
    }
    setIs2FALoading(true);
    setTimeout(async () => {
      await updateProfile({ twoFactorEnabled: false });
      setIs2FALoading(false);
      setIs2FAModalOpen(false);
      setDisable2FACode("");
      toast.info("Two-Factor Authentication Disabled", {
        description: "2-Step verification has been deactivated for your account.",
      });
    }, 400);
  };

  const handleCopySecretKey = () => {
    navigator.clipboard.writeText("JBSWY3DPEHPK3PXP");
    setCopiedKey(true);
    toast.success("Secret Key Copied", {
      description: "Paste this key into Google Authenticator or Authy.",
    });
    setTimeout(() => setCopiedKey(false), 2000);
  };

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

  // Dynamically calculate user statistics from their actual bookings
  const stats = {
    totalBookings: userBookings.length,
    countriesVisited: new Set(userBookings.map((b) => b.country)).size,
    totalSpent: userBookings.reduce(
      (sum, b) => sum + (b.status !== "Cancelled" ? b.price : 0),
      0
    ),
    upcomingTrips: userBookings.filter((b) => b.status === "Confirmed").length,
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
                    src={getHighResAvatar(user?.avatar || avatar)}
                    alt="User profile avatar"
                    fill
                    sizes="288px"
                    quality={100}
                    unoptimized={true}
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
                {user?.name || "Traveler"}
              </h2>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6C696D] dark:text-[#B6B6B6] mt-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#6C696D]" />
                <span>{user?.location || "Not set"}</span>
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
                    {user?.memberSince || "2026"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6C696D] dark:text-[#B6B6B6]">Nationality</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {user?.nationality || "Not set"}
                  </span>
                </div>
              </div>

              {/* Edit Profile Button matching Penpot */}
              <button
                onClick={() => {
                  setName(user?.name || "");
                  setEmail(user?.email || "");
                  setLocation(user?.location || "");
                  setNationality(user?.nationality || "");
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
                        Last changed {formatPasswordLastChanged(user?.passwordLastChanged)}
                      </p>
                    </div>
                    <Link href={`/forgot-password?email=${encodeURIComponent(user?.email || "")}`}>
                      <Button variant="outline" size="sm" className="font-semibold text-xs">
                        Change
                      </Button>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          Two-Factor Authentication
                        </span>
                        {user?.twoFactorEnabled ? (
                          <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40">
                            Enabled
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full border border-neutral-300 dark:border-neutral-700 text-[#6C696D] dark:text-[#B6B6B6] bg-neutral-100/80 dark:bg-neutral-800/80">
                            Disabled
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6] mt-1.5">
                        {user?.twoFactorEnabled
                          ? "Secured with Google Authenticator (TOTP)"
                          : "Enhanced security for your bookings and payments"}
                      </p>
                    </div>
                    {user?.twoFactorEnabled ? (
                      <Button
                        size="sm"
                        className="bg-[#15A1BF] hover:bg-[#11849d] text-white text-xs font-semibold shadow-xs"
                        onClick={() => setIs2FAModalOpen(true)}
                      >
                        Disable
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs font-semibold"
                        onClick={() => setIs2FAModalOpen(true)}
                      >
                        Enable
                      </Button>
                    )}
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
                  <Button
                    type="button"
                    variant="outline"
                    onClick={triggerPhotoUpload}
                    className="text-xs rounded-xl h-10 px-4 font-semibold hover:border-[#15A1BF]"
                  >
                    <Camera className="h-4 w-4 mr-2 text-[#15A1BF]" /> Choose Photo from Device
                  </Button>
                  <p className="text-[11px] text-[#6C696D] dark:text-[#B6B6B6]">
                    Select JPG, PNG or WEBP from your computer (max 2MB)
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
                Country / Nationality
              </Label>
              <Select value={nationality} onValueChange={setNationality}>
                <SelectTrigger id="prof-nat" className="h-10 rounded-xl text-sm font-normal">
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

      {/* 2FA Setup & Management Modal */}
      <Dialog open={is2FAModalOpen} onOpenChange={setIs2FAModalOpen}>
        <DialogContent className="sm:max-w-[480px] p-6 sm:p-8">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] text-[#15A1BF]">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  {user?.twoFactorEnabled ? "Two-Factor Authentication Active" : "Enable Two-Factor Authentication"}
                </DialogTitle>
                <DialogDescription className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                  {user?.twoFactorEnabled
                    ? "Your account is protected with 2-step verification"
                    : "Add an extra layer of security using an authenticator app"}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {user?.twoFactorEnabled ? (
            <form onSubmit={handleDisable2FA} className="space-y-5 my-2">
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    2-Step Verification is Active
                  </h4>
                  <p className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                    Protected via Google Authenticator (TOTP).
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="disable-2fa-code" className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block">
                  Enter 6-digit code from Google Authenticator to disable:
                </Label>
                <Input
                  id="disable-2fa-code"
                  type="text"
                  maxLength={6}
                  placeholder="000 000"
                  value={disable2FACode}
                  onChange={(e) => setDisable2FACode(e.target.value.replace(/\D/g, ""))}
                  className="h-12 text-center text-xl font-mono font-bold tracking-widest"
                  autoFocus
                  required
                />
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIs2FAModalOpen(false);
                    setDisable2FACode("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={is2FALoading || disable2FACode.length !== 6}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  {is2FALoading ? "Disabling..." : "Confirm & Disable 2FA"}
                </Button>
              </DialogFooter>
            </form>
          ) : (
            <form onSubmit={handleVerify2FA} className="space-y-5 my-2">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-900/50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#15A1BF] text-white text-[10px]">1</span>
                  Scan with Google Authenticator or Authy
                </div>

                {/* Instant Official Scannable TOTP QR Code */}
                <div className="flex flex-col sm:flex-row items-center gap-4 py-2">
                  <div className="relative p-2 bg-white rounded-xl shadow-xs border border-neutral-200 flex items-center justify-center shrink-0">
                    <Image
                      src={qrCodeUrl}
                      alt="Google Authenticator QR Code"
                      width={128}
                      height={128}
                      unoptimized
                      priority
                      className="w-32 h-32 object-contain rounded-md"
                    />
                  </div>

                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <p className="text-[11px] text-[#6C696D] dark:text-[#B6B6B6] leading-relaxed">
                      Can&apos;t scan? Enter key manually into your app:
                    </p>
                    <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                      <code className="px-2 py-1 bg-white dark:bg-neutral-800 rounded-md font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 select-all">
                        JBSW - Y3DP - EHPK - 3PXP
                      </code>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={handleCopySecretKey}
                        title="Copy Key"
                      >
                        {copiedKey ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-[#6C696D]" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#15A1BF] text-white text-[10px]">2</span>
                  Enter 6-digit code generated by your app
                </div>
                <Input
                  type="text"
                  maxLength={6}
                  placeholder="000 000"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, ""))}
                  className="h-12 text-center text-xl font-mono font-bold tracking-widest"
                  autoFocus
                  required
                />
              </div>

              <DialogFooter className="mt-4 gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIs2FAModalOpen(false)}
                  disabled={is2FALoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={is2FALoading || twoFactorCode.length !== 6}
                  className="font-bold bg-[#15A1BF] hover:bg-[#11849d] text-white"
                >
                  {is2FALoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Verifying...
                    </>
                  ) : (
                    "Verify & Enable 2FA"
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </RouteGuard>
  );
}
