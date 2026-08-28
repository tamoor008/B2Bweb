"use client";

import React, { useState } from "react";
import {
  Trophy,
  Video,
  Dumbbell,
  BarChart3,
  Smartphone,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

export default function FeaturesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const detailedFeatures = [
    {
      icon: Trophy,
      title: "Mobile Program Engine",
      subtitle: "Progressive Overload Blueprints",
      description:
        "Select training programs built by Back to Basics Coaching LLC for strength, hypertrophy, calisthenics, or athletic performance. The upcoming mobile app automatically tracks weight targets, rep ranges, RPE, and rest timers on your phone.",
      bullets: [
        "Automatic weight & set calculation based on previous attempt",
        "Customizable workout split variations for 3 to 5 day schedules",
        "Built-in deload and recovery week protocols",
      ],
      color: "text-[#7C3AED]",
      badge: "bg-[#7C3AED]/15 text-[#A78BFA] border-[#7C3AED]/30",
    },
    {
      icon: Video,
      title: "Multi-Angle HD Video Lessons",
      subtitle: "Master Exercise Mechanics On Mobile",
      description:
        "Never second-guess your lifting form again. Stream video breakdowns recorded by Back to Basics Coaching LLC strength coaches directly inside the app with front, side, and isometric angles for complex lifts.",
      bullets: [
        "Audio form cues play before starting your work sets",
        "Common mistakes & injury prevention checklists",
        "Equipment alternative swap options with 1 tap",
      ],
      color: "text-[#A78BFA]",
      badge: "bg-[#A78BFA]/15 text-[#A78BFA] border-[#A78BFA]/30",
    },
    {
      icon: Dumbbell,
      title: "Mobile Equipment Directory",
      subtitle: "Match Workouts to Your Available Gear",
      description:
        "Training in a commercial gym, home garage, or hotel? Filter programs and exercises by available gear so you always know what tools you need before hitting start.",
      bullets: [
        "Barbell, Dumbbell, Kettlebell, Resistance Band & Bodyweight filters",
        "Equipment setup guides and ankle/wrist elevation cues",
        "Seamless exercise substitution engine",
      ],
      color: "text-amber-400",
      badge: "bg-amber-400/15 text-amber-400 border-amber-400/30",
    },
    {
      icon: BarChart3,
      title: "Smart App Analytics & PR Tracking",
      subtitle: "Visualize Your Athletic Growth",
      description:
        "Track total volume lifted, personal best records (PRs), workout completion streaks, and body metric changes over time with automated mobile charts.",
      bullets: [
        "Automatic estimated 1RM (One Rep Max) tracking",
        "Volume density & total tonnage logs",
        "Visual streak milestones & consistency trophies",
      ],
      color: "text-blue-400",
      badge: "bg-blue-400/15 text-blue-400 border-blue-400/30",
    },
    {
      icon: Smartphone,
      title: "Seamless Mobile Sync & Offline Log",
      subtitle: "Train Anywhere Without Data Interruption",
      description:
        "Log workouts in underground basements or outdoor parks. The mobile app automatically caches your workout logs and syncs back when connected.",
      bullets: [
        "100% Offline workout logging support",
        "Instant background cloud synchronization",
        "Native iOS & Android performance",
      ],
      color: "text-emerald-400",
      badge: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
    },
    {
      icon: Users,
      title: "Coach Form Review & Feedback",
      subtitle: "Personalized Coaching Guidance",
      description:
        "Submit video recordings of your lifting sets directly through the mobile app to receive technique feedback and joint angle corrections from certified trainers at Back to Basics Coaching LLC.",
      bullets: [
        "Direct coach video review comments",
        "Community Q&A and form breakdown threads",
        "Personalized progression adjustments",
      ],
      color: "text-rose-400",
      badge: "bg-rose-400/15 text-rose-400 border-rose-400/30",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Back to Basics Coaching LLC
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Features Coming to Our <span className="gradient-purple-text">Mobile App</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base">
          Back to Basics Coaching LLC is building a mobile application engineered to eliminate training guesswork, guide proper exercise form, and log athletic performance on iOS & Android.
        </p>
      </div>

      {/* Feature List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {detailedFeatures.map((feat, idx) => (
          <div
            key={idx}
            className="b2b-card b2b-card-hover rounded-3xl p-8 border border-[#26262B] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#1A1A1E] border border-[#26262B] flex items-center justify-center">
                  <feat.icon className={`w-6 h-6 ${feat.color}`} />
                </div>

              </div>

              <div>
                <p className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider">
                  {feat.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white mt-0.5">{feat.title}</h3>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {feat.description}
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-300 border-t border-[#26262B]">
                {feat.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-[#1A1A1E] hover:bg-[#7C3AED] text-slate-300 hover:text-white font-semibold text-xs border border-[#26262B] transition-all flex items-center justify-center gap-1.5"
              >
                <span>Notify Me on App Launch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <MobileAppComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionTitle="Explore Mobile App Features"
      />
    </div>
  );
}
