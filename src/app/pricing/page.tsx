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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" /> Mobile App Access & Membership
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A]">
          Simple, Transparent <span className="gradient-purple-text">App Membership</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          All program access and 1-on-1 subscription memberships are handled natively inside the Back to Basics Mobile App on iOS & Android. No web payments required.
        </p>

        {/* Early Access Action */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => openSubscribeModal("Mobile App Early Access")}
            className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md shadow-[#7C3AED]/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Join App Early Access Waitlist</span>
          </button>
        </div>
      </div>

      {/* Important Notice Banner */}
      <div className="b2b-card rounded-2xl p-4 sm:p-6 border border-[#7C3AED]/25 bg-[#7C3AED]/5 max-w-3xl mx-auto flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
          <Info className="w-5 h-5" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <h4 className="font-bold text-[#0F172A]">No Web Subscriptions</h4>
          <p className="text-slate-600 leading-relaxed">
            Subscriptions and program unlocks are processed through the official Apple App Store and Google Play Store when you log into the Back to Basics mobile app.
          </p>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Free Starter */}
        <div className="b2b-card rounded-3xl p-8 border border-slate-200 flex flex-col justify-between bg-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Free Starter</h3>
              <p className="text-xs text-slate-500 mt-1">
                Perfect for trying out foundational movement programs.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-[#0F172A]">$0</span>
              <span className="text-slate-500 text-sm">/ free app download</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
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
            type="button"
            onClick={() => openSubscribeModal("Free Starter Account")}
            className="w-full mt-8 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 text-xs transition-colors cursor-pointer"
          >
            App Coming Soon
          </button>
        </div>

        {/* Pro Athlete Tier (Highlighted) */}
        <div className="b2b-card rounded-3xl p-8 border-2 border-[#7C3AED] flex flex-col justify-between relative shadow-xl shadow-[#7C3AED]/10 bg-white">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7C3AED] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
            Most Popular Choice
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
                Pro Athlete <Sparkles className="w-4 h-4 text-[#7C3AED]" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Full program library & 1-on-1 performance tracking.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-[#0F172A]">$11</span>
              <span className="text-slate-500 text-sm">/ month (in app)</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-center gap-2 font-semibold text-[#0F172A]">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>All 15+ Curated Training Programs</span>
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
                <span>Priority Form Review by Your 1-on-1 Coach</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => openSubscribeModal("Pro Athlete Membership")}
            className="w-full mt-8 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md shadow-[#7C3AED]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile App Coming Soon</span>
          </button>
        </div>

        {/* 1-on-1 Athlete Tier */}
        <div className="b2b-card rounded-3xl p-8 border border-slate-200 flex flex-col justify-between bg-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">1-on-1 VIP Coaching</h3>
              <p className="text-xs text-slate-500 mt-1">
                For dedicated custom strength programming.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-[#0F172A]">$39</span>
              <span className="text-slate-500 text-sm">/ month</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Direct 1-on-1 Coach Chat Access</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Custom Tailored Program & Workout Builder</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7C3AED]" />
                <span>Weekly Video Form Reviews</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => openSubscribeModal("1-on-1 VIP Coaching Plan")}
            className="w-full mt-8 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200 text-xs transition-colors cursor-pointer"
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
