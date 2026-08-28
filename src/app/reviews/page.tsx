"use client";

import React, { useState } from "react";
import { Star, Smartphone } from "lucide-react";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

export default function ReviewsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const reviews = [
    {
      name: "Marcus Vance",
      role: "Competitive Triathlete & Lifter",
      avatar: "MV",
      rating: 5,
      metric: "+35 lbs Squat PR",
      text: "Back to Basics transformed how I train. The structured programs took the guesswork out of my lifting cycles. Added 35 lbs to my squat in 12 weeks with zero knee pain!",
      programUsed: "Basics 101: Strength Foundations",
    },
    {
      name: "Elena Rostova",
      role: "Physical Therapist & Lifter",
      avatar: "ER",
      rating: 5,
      metric: "Pain-Free Training",
      text: "The video lessons detailing exercise technique are the highest quality I've seen in any app. I regularly recommend Back to Basics to my clients recovering from injury.",
      programUsed: "Bulletproof Joints & Mobility",
    },
    {
      name: "David Chen",
      role: "Software Engineer & Calisthenics Practitioner",
      avatar: "DC",
      rating: 5,
      metric: "120+ Day Streak",
      text: "The progression tracking and clean interface make keeping a consistent routine painless. Offline app syncing works flawlessly when I train in underground gyms.",
      programUsed: "Bodyweight & Core Mastery",
    },
    {
      name: "Sarah Jenkins",
      role: "Marathon Runner & Strength Enthusiast",
      avatar: "SJ",
      rating: 5,
      metric: "Improved Sprint Finish",
      text: "Combining the athletic conditioning program with my running schedule helped me shave 4 minutes off my half-marathon personal best!",
      programUsed: "Explosive Athletic Performance",
    },
    {
      name: "Brandon Ortiz",
      role: "Powerlifter",
      avatar: "BO",
      rating: 5,
      metric: "+50 lbs Deadlift PR",
      text: "The form breakdown video lessons fixed my deadlift wedging position. Finally broke through a 2-year plateau without hurting my lower back.",
      programUsed: "Hypertrophy & Muscle Blueprint",
    },
    {
      name: "Chloe Miller",
      role: "Cross-Training Athlete",
      avatar: "CM",
      rating: 5,
      metric: "3x Weekly Consistency",
      text: "I love the equipment directory feature. I can easily swap barbell lifts for dumbbell variations when traveling for work.",
      programUsed: "Metabolic Conditioning & Engine",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider">
          <Star className="w-3.5 h-3.5 fill-amber-500" /> Athlete Ratings & Results
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Real Stories, <span className="gradient-purple-text">Real PR Gains</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Over 15,000 lifters and athletes rely on Back to Basics programs for consistent athletic growth.
        </p>
      </div>

      {/* Ratings Overview Bar */}
      <div className="b2b-card rounded-2xl p-6 border border-slate-200 max-w-2xl mx-auto grid grid-cols-3 gap-4 text-center bg-white shadow-md">
        <div>
          <p className="text-3xl font-extrabold text-slate-900">4.9 / 5</p>
          <div className="flex items-center justify-center gap-0.5 text-amber-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
            ))}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Average App Rating</p>
        </div>
        <div className="border-x border-slate-200">
          <p className="text-3xl font-extrabold text-[#7C3AED]">15,000+</p>
          <p className="text-[11px] text-slate-500 mt-3">Active Lifters</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-slate-900">98.4%</p>
          <p className="text-[11px] text-slate-500 mt-3">Program Finish Rate</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="b2b-card rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(r.rating)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-bold">
                  {r.metric}
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed">
                &quot;{r.text}&quot;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs">
                  {r.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{r.name}</h4>
                  <p className="text-[11px] text-slate-500">{r.role}</p>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 font-mono">
                Completed: {r.programUsed}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="b2b-card rounded-3xl p-8 border border-slate-200 text-center space-y-4 max-w-xl mx-auto bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900">Join 15,000+ Athletes Today</h3>
        <p className="text-slate-600 text-xs sm:text-sm">
          Get notified as soon as the Back to Basics mobile app launches on iOS & Android.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-md shadow-[#7C3AED]/20 inline-flex items-center gap-2"
        >
          <Smartphone className="w-4 h-4" />
          <span>Mobile App Coming Soon</span>
        </button>
      </div>

      {/* Modal */}
      <MobileAppComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionTitle="Join Athlete Waitlist"
      />
    </div>
  );
}
