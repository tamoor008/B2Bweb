"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Star,
  Clock,
  Zap,
  Dumbbell,
  ChevronRight,
} from "lucide-react";
import { PROGRAMS, ProgramData } from "@/data/programs";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProgram, setSelectedProgram] = useState<ProgramData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredPrograms =
    selectedCategory === "All"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === selectedCategory);

  const handleJoinClick = (program: ProgramData) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5" /> Structured Training Catalog
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Choose Your Training <span className="gradient-purple-text">Program</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Browse workout programs designed for strength, muscle building, calisthenics, and athletic conditioning. Programs will be available exclusively inside our upcoming mobile app.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {["All", "Gym", "Home", "Bodyweight", "Outdoors"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/20 font-bold"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {cat === "All" ? "All Categories" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="b2b-card b2b-card-hover rounded-2xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                  {program.level}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{program.rating}</span>
                  <span className="text-slate-500 font-normal">({program.reviewsCount})</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {program.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#7C3AED]" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#7C3AED]" />
                  <span>{program.frequency}</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-slate-400" />
                <span>Gear: {program.equipment}</span>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => handleJoinClick(program)}
                  className="flex-1 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1"
                >
                  <span>Join Program</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <Link
                  href={`/programs/${program.id}`}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile App Coming Soon Modal */}
      <MobileAppComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        program={selectedProgram}
        actionTitle="Join Program Waitlist"
      />
    </div>
  );
}
