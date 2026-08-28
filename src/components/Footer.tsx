"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { AppleAppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="border-t border-[#26262B] bg-[#0C0C0E] pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-400 text-xs sm:text-sm">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#16161A] border border-[#26262B] flex items-center justify-center">
              <Image
                src="/icon.png"
                alt="Back to Basics Coaching LLC App Icon"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-white">Back to Basics</span>
              <span className="text-[10px] text-[#A78BFA] font-semibold -mt-1">
                Back to Basics Coaching LLC
              </span>
            </div>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Back to Basics Coaching LLC is an athletic fitness and strength coaching company. Our upcoming mobile app brings structured workout programs, multi-angle HD video lessons, and equipment guides directly to your mobile device.
          </p>

          <div className="p-3 rounded-xl bg-[#16161A] border border-[#26262B] text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-white">
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
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">App Programs</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/programs" className="hover:text-[#A78BFA] transition-colors">
                Beginner Foundations
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-[#A78BFA] transition-colors">
                Strength & Hypertrophy
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-[#A78BFA] transition-colors">
                Bodyweight & Core
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-[#A78BFA] transition-colors">
                Explosive Athleticism
              </Link>
            </li>
          </ul>
        </div>

        {/* Links 2: Platform Features */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">App Features</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/features" className="hover:text-[#A78BFA] transition-colors">
                Workout Session Logger
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-[#A78BFA] transition-colors">
                HD Video Lessons
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-[#A78BFA] transition-colors">
                Equipment Directory
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-[#A78BFA] transition-colors">
                Athlete Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Links 3: Mobile Apps Badges */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Upcoming App</h4>
          <p className="text-xs text-slate-400">Available soon for iOS & Android:</p>
          <div className="space-y-2 pt-1">
            <AppleAppStoreBadge onClick={() => setModalOpen(true)} />
            <GooglePlayBadge onClick={() => setModalOpen(true)} />
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-[#26262B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Back to Basics Coaching LLC. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
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
