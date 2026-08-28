"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Clock,
  Zap,
  Dumbbell,
  Calendar,
} from "lucide-react";
import { PROGRAMS } from "@/data/programs";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProgramDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const program = PROGRAMS.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Program Not Found</h2>
        <Link href="/programs" className="text-[#7C3AED] hover:underline text-sm">
          ← Back to Programs Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      {/* Back link */}
      <Link
        href="/programs"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Programs</span>
      </Link>

      {/* Main Header Banner */}
      <div className="b2b-card rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 relative overflow-hidden bg-white shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
            {program.category} • {program.level}
          </span>

          <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
            <Star className="w-4 h-4 fill-amber-500" />
            <span>{program.rating}</span>
            <span className="text-slate-500 font-normal">({program.reviewsCount} reviews)</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            {program.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            {program.description}
          </p>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#7C3AED]" />
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Duration</p>
              <p className="text-sm font-bold text-slate-900">{program.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#7C3AED]" />
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Frequency</p>
              <p className="text-sm font-bold text-slate-900">{program.frequency}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
            <Dumbbell className="w-5 h-5 text-amber-500" />
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Gear Needed</p>
              <p className="text-sm font-bold text-slate-900">{program.equipment}</p>
            </div>
          </div>
        </div>

        {/* CTA Action */}
        <div className="pt-2">
          <button
            onClick={() => setShowJoinModal(true)}
            className="w-full sm:w-auto px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl shadow-lg shadow-[#7C3AED]/25 transition-all text-base"
          >
            Join This Program
          </button>
        </div>
      </div>

      {/* Program Weeks Schedule Breakdown */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#7C3AED]" />
          Weekly Program Schedule
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {program.weeks.map((week) => (
            <div
              key={week.weekNumber}
              className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                  Week {week.weekNumber}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {week.daysCount} Sessions/wk
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900">{week.weekTitle}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{week.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile App Coming Soon Modal */}
      <MobileAppComingSoonModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
        program={program}
        actionTitle="Join Program Waitlist"
      />
    </div>
  );
}
