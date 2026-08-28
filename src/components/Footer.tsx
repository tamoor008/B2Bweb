"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="border-t border-slate-200 bg-slate-100/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-600 text-xs sm:text-sm">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs flex items-center justify-center">
              <Image
                src="/roundiconb2b.png"
                alt="Back to Basics Coaching LLC App Icon"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-slate-900">Back to Basics</span>
              <span className="text-[10px] text-[#7C3AED] font-bold -mt-1">
                Back to Basics Coaching LLC
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
            Back to Basics Coaching LLC is an athletic fitness and strength coaching company. Our upcoming mobile app brings structured workout programs, multi-angle HD video lessons, and equipment guides directly to your mobile device.
          </p>

          <div className="p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1 shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
              <span>Mobile App Subscriptions</span>
            </div>
            <p>
              All future program subscriptions will be processed securely through the official iOS App Store & Google Play Store via the upcoming Back to Basics Coaching LLC mobile app.
            </p>
          </div>
        </div>

        {/* Links 1: Programs */}
        <div className="space-y-3">
          <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider">App Programs</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/programs" className="hover:text-[#7C3AED] transition-colors">
                Beginner Foundations
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-[#7C3AED] transition-colors">
                Strength & Hypertrophy
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-[#7C3AED] transition-colors">
                Bodyweight & Core
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-[#7C3AED] transition-colors">
                Explosive Athleticism
              </Link>
            </li>
          </ul>
        </div>

        {/* Links 2: Support & Company */}
        <div className="space-y-3">
          <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider">Support & Help</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/support" className="hover:text-[#7C3AED] transition-colors">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#7C3AED] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#7C3AED] transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-[#7C3AED] transition-colors">
                App Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Links 3: Mobile Apps Notice */}
        <div className="space-y-3">
          <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider">Upcoming App</h4>
          <p className="text-xs text-slate-500">Releasing soon for iOS & Android:</p>
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <Smartphone className="w-4 h-4 text-[#7C3AED]" />
              <span>Mobile App Launch</span>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-2 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Early Access</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Back to Basics Coaching LLC. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/support" className="hover:text-slate-900">Support Center</Link>
          <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
        </div>
      </div>

      {/* Coming soon modal */}
      <MobileAppComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionTitle="Get Mobile App"
      />
    </footer>
  );
}
