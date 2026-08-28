"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Check,
  Smartphone,
  Sparkles,
  Info,
} from "lucide-react";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";
import { AppleAppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Subscribe to Mobile App");

  const openSubscribeModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" /> Mobile App Access & Membership
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Simple, Transparent <span className="gradient-purple-text">App Membership</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          All program access and subscription memberships are handled natively inside the Back to Basics Mobile App on iOS & Android. No web payments required.
        </p>

        {/* Store Badges Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <AppleAppStoreBadge onClick={() => openSubscribeModal("iOS App Store Access")} />
          <GooglePlayBadge onClick={() => openSubscribeModal("Google Play Store Access")} />
        </div>
      </div>

      {/* Important Notice Banner */}
      <div className="b2b-card rounded-2xl p-4 sm:p-6 border border-[#7C3AED]/30 bg-[#7C3AED]/10 max-w-3xl mx-auto flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center shrink-0 mt-0.5">
          <Info className="w-5 h-5" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <h4 className="font-bold text-white">No Web Subscriptions</h4>
          <p className="text-slate-300 leading-relaxed">
            Subscriptions and program unlocks are processed through the official Apple App Store and Google Play Store when you log into the Back to Basics mobile app.
          </p>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Free Starter */}
        <div className="b2b-card rounded-3xl p-8 border border-[#26262B] flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Free Starter</h3>
              <p className="text-xs text-slate-400 mt-1">
                Perfect for trying out foundational movement programs.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">$0</span>
              <span className="text-slate-400 text-sm">/ free app download</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Access to 2 Foundation Programs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Basic Exercise Video Technique Cues</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Standard Workout Session Logger</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => openSubscribeModal("Free Starter Account")}
            className="w-full mt-8 py-3 rounded-xl bg-[#1A1A1E] hover:bg-[#26262B] text-white font-semibold border border-[#26262B] text-xs transition-colors"
          >
            App Coming Soon
          </button>
        </div>

        {/* Pro Athlete Tier (Highlighted) */}
        <div className="b2b-card rounded-3xl p-8 border-2 border-[#7C3AED] flex flex-col justify-between relative shadow-xl shadow-[#7C3AED]/10">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7C3AED] text-white font-extrabold text-[10px] uppercase tracking-wider">
            Most Popular Choice
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Pro Athlete <Sparkles className="w-4 h-4 text-[#A78BFA]" />
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Full program library & advanced performance analytics.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">$11</span>
              <span className="text-slate-400 text-sm">/ month (in app)</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2 font-semibold text-white">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>All 45+ Curated Training Programs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Unlimited HD Video Lessons & Gear Guides</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Smart Progressive Overload Engine</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Full iOS & Android Mobile Offline Sync</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Priority Form Review by Certified Coaches</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => openSubscribeModal("Pro Athlete Membership")}
            className="w-full mt-8 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md shadow-[#7C3AED]/25 transition-all flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile App Coming Soon</span>
          </button>
        </div>

        {/* Team Coach Tier */}
        <div className="b2b-card rounded-3xl p-8 border border-[#26262B] flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Team & Gym Coach</h3>
              <p className="text-xs text-slate-400 mt-1">
                For strength trainers and gym owners.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">$39</span>
              <span className="text-slate-400 text-sm">/ month</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Up to 25 Athlete Client Accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Custom Program & Workout Builder</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Coach Admin Compliance Dashboard</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => openSubscribeModal("Team Coach Plan")}
            className="w-full mt-8 py-3 rounded-xl bg-[#1A1A1E] hover:bg-[#26262B] text-white font-semibold border border-[#26262B] text-xs transition-colors"
          >
            App Coming Soon
          </button>
        </div>
      </div>

      {/* Modal */}
      <MobileAppComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionTitle={modalTitle}
      />
    </div>
  );
}
