"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  ShieldCheck,
  Flame,
  Trophy,
  PlayCircle,
  ChevronRight,
  Star,
  Zap,
  Sparkles,
  ArrowUpRight,
  Smartphone,
  Clock,
  Video,
} from "lucide-react";
import { PROGRAMS, ProgramData } from "@/data/programs";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const featuredPrograms = PROGRAMS.slice(0, 3);

  const handleProgramClick = (program: ProgramData) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  return (
    <div className="relative space-y-24 pb-20">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#7C3AED]/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      {/* HERO SECTION */}
      <section className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#7C3AED]" />
              <span>Back to Basics Coaching LLC • Upcoming Mobile App</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Master the Fundamentals. <br />
              <span className="gradient-purple-text">Build Unstoppable Strength.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Back to Basics Coaching LLC is bringing structured athletic strength programs, multi-angle HD video lessons, equipment guides, and progressive overload tracking to your phone in our upcoming mobile app.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl shadow-lg shadow-[#7C3AED]/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 text-base"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <span>Get App Early Access</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <Link
                href="/features"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 flex items-center justify-center gap-2.5 transition-all text-base shadow-xs"
              >
                <PlayCircle className="w-5 h-5 text-[#7C3AED]" />
                <span>Upcoming App Features</span>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Mobile Focused</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED]">45+</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Coaching Programs</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">HD Video</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Technique Cues</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile App Preview Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative b2b-card rounded-2xl p-6 border border-slate-200 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs">
                    <Image src="/roundiconb2b.png" alt="App Icon" width={36} height={36} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Back to Basics Mobile</p>
                    <p className="text-[10px] text-[#7C3AED] font-semibold">Back to Basics Coaching LLC</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold">
                  App Preview
                </span>
              </div>

              {/* Workout Item Preview */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#7C3AED] font-bold uppercase tracking-wider">
                    Basics 101 • Week 2 Day 1
                  </span>
                  <span className="text-slate-500">45 Mins</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Barbell Back Squat & Lower Body Focus
                </h3>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600 font-medium">
                    <span>Target Session Completion</span>
                    <span className="text-[#7C3AED] font-bold">75%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#7C3AED] h-full rounded-full w-[75%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7C3AED]" /> iOS & Android Release
                </span>
                <span className="text-[#7C3AED] font-bold">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED APP PROGRAMS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5" /> Structured App Catalog
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Upcoming Mobile App Programs</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Curated by certified strength trainers at Back to Basics Coaching LLC.
            </p>
          </div>
          <Link
            href="/programs"
            className="text-sm font-semibold text-[#7C3AED] hover:text-[#6D28D9] flex items-center gap-1"
          >
            <span>Preview All Programs ({PROGRAMS.length})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPrograms.map((program) => (
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
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
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

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleProgramClick(program)}
                    className="flex-1 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-md"
                  >
                    Join Program
                  </button>
                  <Link
                    href={`/programs/${program.id}`}
                    className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE APP FEATURES HIGHLIGHT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="b2b-card rounded-3xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white shadow-xl">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
              Upcoming App Features
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              What You Will Get in the Mobile App
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
              Back to Basics Coaching LLC is designing our mobile app to streamline your workout sessions, track auto-regulated progressive overload, and provide form guidance wherever you train.
            </p>

            <div className="pt-2">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] hover:text-[#6D28D9]"
              >
                <span>Explore All Mobile App Features</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Trophy className="w-6 h-6 text-[#7C3AED]" />
              <h4 className="text-sm font-bold text-slate-900">Program Engine</h4>
              <p className="text-xs text-slate-500">Targeted weight & set progression.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Video className="w-6 h-6 text-indigo-600" />
              <h4 className="text-sm font-bold text-slate-900">HD Video Lessons</h4>
              <p className="text-xs text-slate-500">Multi-angle posture breakdowns.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Dumbbell className="w-6 h-6 text-amber-500" />
              <h4 className="text-sm font-bold text-slate-900">Equipment Guide</h4>
              <p className="text-xs text-slate-500">Gym or home gear filters.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Smartphone className="w-6 h-6 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900">Offline Log Sync</h4>
              <p className="text-xs text-slate-500">Log workouts without cellular data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE APP COMING SOON MODAL */}
      <MobileAppComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        program={selectedProgram}
        actionTitle="Join Program Waitlist"
      />
    </div>
  );
}
