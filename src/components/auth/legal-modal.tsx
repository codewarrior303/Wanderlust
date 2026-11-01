"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Shield } from "lucide-react";

interface LegalModalProps {
  type: "terms" | "privacy" | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LegalModal({ type, isOpen, onClose }: LegalModalProps) {
  if (!type) return null;

  const isTerms = type === "terms";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[620px] max-h-[85vh] flex flex-col p-6 sm:p-8">
        <DialogHeader className="gap-2 pb-2 border-b border-neutral-200/60 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDFCFF] dark:bg-[#12282e] text-[#15A1BF]">
              {isTerms ? <FileText className="h-5 w-5" /> : <Shield className="h-5 w-5" />}
            </div>
            <div>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                {isTerms ? "Terms of Service" : "Privacy Policy"}
              </DialogTitle>
              <DialogDescription className="text-xs text-[#6C696D] dark:text-[#B6B6B6]">
                Last updated: March 2026 • Wanderlust Travel Adventures
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2 py-4 space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-h-[50vh]">
          {isTerms ? (
            <>
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  1. Agreement to Terms
                </h4>
                <p>
                  By creating an account or accessing Wanderlust, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our travel packages or booking services.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  2. Bookings &amp; Reservations
                </h4>
                <p>
                  All travel bookings are subject to availability and confirmation. A booking is considered confirmed once processed through our payment gateway and an official Booking ID has been issued.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  3. Cancellation &amp; Refunds
                </h4>
                <p>
                  We offer a full 100% refund for cancellations requested up to 7 days before the departure date. Cancellations made within 7 days of departure may incur supplier fees as detailed in individual package itineraries.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  4. Travel Documentation
                </h4>
                <p>
                  Travelers are responsible for obtaining and holding all required travel visas, passports with at least 6 months validity, and any mandatory immunizations for destination countries.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  1. Information We Collect
                </h4>
                <p>
                  We collect information you provide directly to us when creating an account, booking a travel package, or contacting support. This includes your name, email, contact details, and travel preferences.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  2. How We Use Your Data
                </h4>
                <p>
                  We use your personal data exclusively to manage reservations, process payments, issue flight/hotel vouchers, and provide trip updates. We never sell your personal data to third parties.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  3. Security &amp; Encryption
                </h4>
                <p>
                  All transactions and personal credentials are encrypted using industry-standard TLS 1.3 encryption. Auth sessions are stored securely using HTTP-only cookies and cryptographically signed tokens.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                  4. Your Rights
                </h4>
                <p>
                  You have the right to access, update, export, or delete your personal data at any time through your Profile Dashboard or by reaching out to info@wanderlust.com.
                </p>
              </div>
            </>
          )}
        </div>

        <DialogFooter className="pt-3 border-t border-neutral-200/60 dark:border-white/10">
          <Button onClick={onClose} className="w-full sm:w-auto font-bold bg-[#15A1BF] hover:bg-[#11849d]">
            I Understand &amp; Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
