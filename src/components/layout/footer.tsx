"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, ArrowUpRight, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed to newsletter!", {
      description: "You'll be the first to know about upcoming travel deals.",
    });
    setEmail("");
  };

  return (
    <footer className="border-t border-[#1C1C1F] bg-[#0C0B0B] text-white transition-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#15A1BF] text-white shadow-md shadow-[#15A1BF]/20">
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="8.5" />
                  <polygon
                    points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-wider uppercase text-white font-sans">
                Wanderlust
              </span>
            </Link>
            <p className="text-sm text-[#B6B6B6] max-w-sm leading-relaxed">
              Your gateway to extraordinary travel experiences around the world. We curate unforgettable journeys tailored to your wanderlust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B6B6B6]">
              <li>
                <Link href="/" className="hover:text-[#15A1BF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#15A1BF] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-[#15A1BF] transition-colors">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-[#15A1BF] transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B6B6B6]">
              <li>
                <a href="#help" className="hover:text-[#15A1BF] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#15A1BF] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#15A1BF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#15A1BF] transition-colors">
                  FAQs & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter matching Penpot Frame 2087325660 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              NEWSLETTER
            </h4>
            <p className="text-xs text-[#B6B6B6] leading-relaxed">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 rounded-xl bg-[#222225] border border-[#333336] px-4 pr-12 text-xs text-white placeholder:text-[#888888] focus:outline-none focus:border-[#15A1BF] focus:ring-1 focus:ring-[#15A1BF] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#15A1BF] text-white hover:bg-[#11849d] transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="pt-2 text-xs text-[#B6B6B6] space-y-1">
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#15A1BF]" />
                <span>786 901 1622</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#15A1BF]" />
                <span>info@wanderlust.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching Penpot Frame 167 */}
        <div className="mt-12 pt-8 border-t border-[#1C1C1F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B6B6B6]">
          <p>© 2026 Wanderlust. All rights reserved.</p>

          {/* SVG Social Icons */}
          <div className="flex items-center gap-4">
            {/* Twitter-X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1C1F] text-white hover:bg-[#15A1BF] hover:text-white transition-colors"
              aria-label="Twitter X"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1C1F] text-white hover:bg-[#15A1BF] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1C1F] text-white hover:bg-[#15A1BF] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
