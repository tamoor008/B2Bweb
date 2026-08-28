"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { ProgramData } from "@/data/programs";

interface JoinProgramModalProps {
  program: ProgramData | null;
  onClose: () => void;
}

export default function JoinProgramModal({ program, onClose }: JoinProgramModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!program) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl b2b-card p-6 sm:p-8 border border-[#26262B] shadow-2xl space-y-6 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#1A1A1E] text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Start Training Today
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                Join <span className="text-[#A78BFA]">{program.title}</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Enter your details to enroll in this {program.duration} program ({program.level} level).
              </p>
            </div>

            {/* Quick Summary Pill */}
            <div className="p-3 bg-[#1A1A1E] rounded-xl border border-[#26262B] grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <p className="text-slate-400">Duration</p>
                <p className="font-bold text-white">{program.duration}</p>
              </div>
              <div>
                <p className="text-slate-400">Frequency</p>
                <p className="font-bold text-[#A78BFA]">{program.frequency}</p>
              </div>
              <div>
                <p className="text-slate-400">Category</p>
                <p className="font-bold text-white">{program.category}</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1E] border border-[#26262B] text-white text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1E] border border-[#26262B] text-white text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-[#7C3AED]/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Confirm Program Enrollment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 text-[#A78BFA] flex items-center justify-center mx-auto border border-[#7C3AED]/40">
              <CheckCircle2 className="w-10 h-10 text-[#7C3AED]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">You&apos;re Enrolled!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto">
                Welcome to <strong className="text-white">{program.title}</strong>, {name || "Athlete"}. We sent your program schedule to <span className="text-[#A78BFA]">{email}</span>.
              </p>
            </div>

            <div className="p-4 bg-[#1A1A1E] rounded-xl border border-[#26262B] text-left space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Smartphone className="w-4 h-4 text-[#7C3AED]" />
                <span>Next Step: Open Back to Basics Mobile App</span>
              </div>
              <p className="text-slate-400">
                Sign in with <span className="text-white font-mono">{email}</span> in the Back to Basics mobile app on iOS or Android to log sets, view HD video lessons, and track personal records!
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#1A1A1E] hover:bg-[#26262B] text-slate-200 font-semibold text-xs border border-[#26262B]"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
