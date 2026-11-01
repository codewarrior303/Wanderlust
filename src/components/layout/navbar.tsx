"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth, getHighResAvatar, checkIsAdmin } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Menu, X, BookmarkCheck, Shield, ChevronDown } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, signOut, openAuthModal } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAdmin = mounted && isAuthenticated && checkIsAdmin(user);

  const leftNavLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Bookings", href: "/my-bookings" },
    ...(isAdmin ? [{ name: "Admin", href: "/admin" }] : []),
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 bg-transparent pointer-events-none">
      {/* Floating Pill Navigation matching Penpot Frame 271 (1408x56 at 16,16) */}
      <div className="mx-auto max-w-[1408px] h-14 rounded-full border border-white/70 dark:border-white/10 glass-pill px-6 sm:px-8 flex items-center justify-between pointer-events-auto transition-colors">
        {/* Left Navigation Links matching Penpot Contact Frame */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1">
          {leftNavLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? "text-[#15A1BF] font-bold"
                    : "text-[#0C0B0B] dark:text-neutral-200 hover:text-[#15A1BF] dark:hover:text-[#15A1BF]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Center Brand Logo matching Penpot 'Wanderlast' Frame (x: 713 in 1440 canvas) */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-[#15A1BF] uppercase font-sans">
              Wanderlust
            </span>
          </Link>
        </div>

        {/* Right Section matching Penpot Contact Frame */}
        <div className="hidden md:flex items-center justify-end gap-3 flex-1">
          {mounted && isAuthenticated && user ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  className="group relative flex items-center gap-2 p-0.5 rounded-full ring-2 ring-[#15A1BF]/40 hover:ring-[#15A1BF] hover:shadow-[0_0_15px_rgba(21,161,191,0.3)] transition-all cursor-pointer outline-none active:scale-95"
                  aria-label="User account menu"
                >
                  <div className="relative h-9 w-9 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-xs">
                    {user.avatar ? (
                      <Image
                        src={getHighResAvatar(user.avatar)}
                        alt="User avatar"
                        fill
                        sizes="72px"
                        unoptimized={true}
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[#15A1BF] to-[#2cd5f8] text-white font-bold text-xs uppercase" suppressHydrationWarning>
                        {user.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-[#6C696D] dark:text-[#B6B6B6] group-hover:text-[#15A1BF] transition-colors mr-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="flex items-center gap-3 p-2.5">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#15A1BF]/30 shadow-xs">
                    {user.avatar ? (
                      <Image
                        src={getHighResAvatar(user.avatar)}
                        alt="User avatar"
                        fill
                        sizes="88px"
                        unoptimized={true}
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#15A1BF] text-white font-bold text-sm" suppressHydrationWarning>
                        {user.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col overflow-hidden text-left min-w-0">
                    <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate" suppressHydrationWarning>
                      {user.name}
                    </span>
                    <span className="text-xs text-[#6C696D] dark:text-[#B6B6B6] truncate" suppressHydrationWarning>
                      {user.email}
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-neutral-200/60 dark:bg-white/10" />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2.5">
                    <User className="h-4 w-4 text-[#15A1BF]" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-bookings" className="flex items-center gap-2.5">
                    <BookmarkCheck className="h-4 w-4 text-[#15A1BF]" />
                    <span>My Bookings</span>
                  </Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="flex items-center gap-2.5">
                      <Shield className="h-4 w-4 text-[#15A1BF]" />
                      <span>Admin Panel</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator className="bg-neutral-200/60 dark:bg-white/10" />
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="text-red-600 dark:text-red-400 focus:text-red-600 focus:bg-red-500/10 cursor-pointer"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4 text-sm font-semibold">
              <Link
                href="/sign-in"
                className="text-[#0C0B0B] dark:text-neutral-200 hover:text-[#15A1BF] transition-colors cursor-pointer"
              >
                Login
              </Link>

              <Link
                href="/sign-up"
                className="h-9 px-5 rounded-full bg-[#15A1BF] hover:bg-[#11849d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-[0_0_15px_rgba(21,161,191,0.4)] active:scale-95 cursor-pointer inline-flex items-center justify-center text-center leading-none select-none pt-[1px]"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-auto mt-2 max-w-[1408px] rounded-3xl border border-white/60 dark:border-white/10 glass-panel p-6 shadow-2xl pointer-events-auto animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {leftNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold px-3 py-2 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "bg-[#15A1BF]/10 text-[#15A1BF] font-bold"
                    : "text-neutral-800 dark:text-neutral-200"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-neutral-200/60 dark:border-white/10 flex flex-col gap-2">
              {mounted && isAuthenticated && user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-base font-semibold text-neutral-800 dark:text-neutral-200"
                  >
                    <div className="relative h-8 w-8 rounded-full overflow-hidden ring-2 ring-[#15A1BF]/40">
                      {user.avatar ? (
                        <Image
                          src={getHighResAvatar(user.avatar)}
                          alt="User avatar"
                          fill
                          sizes="64px"
                          unoptimized={true}
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#15A1BF] text-white font-bold text-xs" suppressHydrationWarning>
                          {user.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span suppressHydrationWarning>{user.name}</span>
                  </Link>

                  <Button
                    variant="outline"
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-red-600 justify-start rounded-xl"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Sign Out
                  </Button>
                </>
              ) : (
                <div className="flex gap-2">
                  <Link
                    href="/sign-in"
                    className="flex-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link
                    href="/sign-up"
                    className="flex-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      className="w-full bg-[#15A1BF] hover:bg-[#11849d] rounded-xl text-white"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
