"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, CheckCircle2, Bell, Sparkles } from "lucide-react";
import { ProgramData } from "@/data/programs";
import { AppleAppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";

interface MobileAppComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  program?: ProgramData | null;
  actionTitle?: string;
}

export default function MobileAppComingSoonModal({
  isOpen,
  onClose,
  program,
  actionTitle = "Join Program",
}: MobileAppComingSoonModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl b2b-card p-6 sm:p-8 border border-[#26262B] shadow-2xl space-y-6 text-slate-100 text-center overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#7C3AED]/25 blur-3xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#1A1A1E] text-slate-400 hover:text-white transition-colors border border-[#26262B]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Badge */}
        <div className="flex flex-col items-center space-y-3 relative z-10 pt-2">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#16161A] border border-[#26262B] shadow-xl shadow-[#7C3AED]/20 flex items-center justify-center p-2">
            <Image
              src="/icon.png"
              alt="Back2Basics App Icon"
              width={64}
              height={64}
              className="object-cover rounded-xl"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A78BFA] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Mobile App Launching Soon
          </div>
        </div>

        {!submitted ? (
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                {program ? `Join "${program.title}"` : actionTitle}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Back2Basics programs and subscriptions are exclusive to our mobile app. The iOS and Android apps are releasing soon! Enter your email to get early access & launch discount.
              </p>
            </div>

            {/* App Store & Google Play Official Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
              <AppleAppStoreBadge />
              <GooglePlayBadge />
            </div>

            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-[#1A1A1E] border border-[#26262B] text-white text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-[#7C3AED]/25 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notify Me</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                🔒 We respect your privacy. No spam ever.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 space-y-4 relative z-10 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white">You&apos;re on the VIP List!</h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                We saved your spot for <span className="text-[#A78BFA]">{email}</span>. We will send you an exclusive invite as soon as the Back2Basics iOS & Android app drops!
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#1A1A1E] hover:bg-[#26262B] text-slate-200 font-semibold text-xs border border-[#26262B]"
            >
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
