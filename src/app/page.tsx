"use client";

import React, { useState } from "react";
import {
  Dumbbell,
  ShieldCheck,
  Flame,
  Trophy,
  PlayCircle,
  ChevronRight,
  CheckCircle2,
  Star,
  Users,
  Activity,
  Zap,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  Smartphone,
  Check,
  Menu,
  X,
  Clock,
  BarChart3,
  Video,
  CirclePlay,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProgramTab, setActiveProgramTab] = useState("all");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [previewTab, setPreviewTab] = useState<"workout" | "lesson" | "equipment">("workout");

  const programs = [
    {
      id: 1,
      title: "Basics 101: Strength Foundations",
      category: "beginner",
      level: "Beginner",
      duration: "4 Weeks",
      frequency: "3 Days/wk",
      rating: 4.9,
      reviewsCount: 420,
      equipment: "Barbell, Dumbbells",
      imageGrad: "from-emerald-500/20 to-teal-500/20",
      accent: "emerald",
      desc: "Learn fundamental movement patterns—squat, hinge, push, pull—with progressive overload designed for beginners.",
    },
    {
      id: 2,
      title: "Hypertrophy & Muscle Blueprint",
      category: "strength",
      level: "Intermediate",
      duration: "8 Weeks",
      frequency: "4 Days/wk",
      rating: 4.95,
      reviewsCount: 850,
      equipment: "Full Gym Setup",
      imageGrad: "from-cyan-500/20 to-blue-500/20",
      accent: "cyan",
      desc: "Targeted volume protocols to build lean muscular symmetry while preserving joint health and recovery capacity.",
    },
    {
      id: 3,
      title: "Bodyweight & Core Mastery",
      category: "bodyweight",
      level: "All Levels",
      duration: "6 Weeks",
      frequency: "3 Days/wk",
      rating: 4.88,
      reviewsCount: 310,
      equipment: "Pull-up Bar, Rings",
      imageGrad: "from-amber-500/20 to-orange-500/20",
      accent: "amber",
      desc: "Master high-tension calisthenics skills, gymnastics ring stability, and bulletproof core endurance anywhere.",
    },
    {
      id: 4,
      title: "Explosive Athletic Performance",
      category: "athletic",
      level: "Advanced",
      duration: "6 Weeks",
      frequency: "4 Days/wk",
      rating: 4.92,
      reviewsCount: 540,
      equipment: "Plyo Boxes, Med Balls",
      imageGrad: "from-purple-500/20 to-indigo-500/20",
      accent: "purple",
      desc: "Increase sprint acceleration, vertical jump height, and lateral agility using science-based velocity training.",
    },
    {
      id: 5,
      title: "Bulletproof Joints & Mobility",
      category: "bodyweight",
      level: "All Levels",
      duration: "4 Weeks",
      frequency: "5 Days/wk",
      rating: 4.97,
      reviewsCount: 680,
      equipment: "Resistance Bands",
      imageGrad: "from-rose-500/20 to-pink-500/20",
      accent: "rose",
      desc: "Eliminate shoulder and hip tightness while restoring full range of motion under active strength loads.",
    },
    {
      id: 6,
      title: "Metabolic Conditioning & Engine",
      category: "athletic",
      level: "Intermediate",
      duration: "5 Weeks",
      frequency: "4 Days/wk",
      rating: 4.89,
      reviewsCount: 390,
      equipment: "Kettlebells, Rower",
      imageGrad: "from-teal-500/20 to-emerald-500/20",
      accent: "teal",
      desc: "High-density aerobic capacity workouts structured to maximize calorie burn and metabolic work capacity.",
    },
  ];

  const filteredPrograms =
    activeProgramTab === "all"
      ? programs
      : programs.filter((p) => p.category === activeProgramTab);

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Competitive Triathlete & Lifter",
      avatar: "MV",
      rating: 5,
      text: "Back2Basics transformed how I train. The structured programs took the guesswork out of my lifting cycles. Added 35 lbs to my squat in 12 weeks with zero knee pain!",
      metric: "+35 lbs Squat PR",
    },
    {
      name: "Elena Rostova",
      role: "Physical Therapist & Fitness Enthusiast",
      avatar: "ER",
      rating: 5,
      text: "The video lessons detailing exercise technique are the highest quality I've seen in any app. I regularly recommend Back2Basics to my clients recovering from injury.",
      metric: "Pain-Free Training",
    },
    {
      name: "David Chen",
      role: "Software Engineer / Calisthenics Practitioner",
      avatar: "DC",
      rating: 5,
      text: "The progression tracking and clean interface make keeping a consistent routine painless. Offline app syncing works flawlessly when I train in underground gyms.",
      metric: "120+ Day Streak",
    },
  ];

  const features = [
    {
      icon: Trophy,
      title: "Structured Program Engine",
      desc: "Progressive overload blueprints tailored to your goal—whether building raw strength, muscle mass, or endurance.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Video,
      title: "HD Cue-by-Cue Video Lessons",
      desc: "Detailed video breakdowns from expert strength coaches explaining posture, breathing, and joint alignment.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Dumbbell,
      title: "Interactive Equipment Directory",
      desc: "Never wonder what gear you need. Filter workouts by your available gym or home equipment setup.",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics & PR Logs",
      desc: "Automatic volume computation, personal record celebrations, and visual charts tracking total effort.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Smartphone,
      title: "Seamless Mobile Syncing",
      desc: "Log workouts effortlessly on iOS & Android apps with real-time sync back to your web dashboard.",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Users,
      title: "Coach & Form Review",
      desc: "Submit your lifting videos directly in-app for personalized form feedback from certified trainers.",
      color: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-emerald-600/20 via-cyan-500/15 to-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[40%] right-[-100px] w-[600px] h-[600px] bg-gradient-to-b from-teal-500/10 to-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-100px] w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Back<span className="text-emerald-400">2</span>Basics
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400/90 font-semibold -mt-1">
                Athletic Fitness
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#programs" className="hover:text-emerald-400 transition-colors">
              Programs
            </a>
            <a href="#lessons" className="hover:text-emerald-400 transition-colors">
              Lessons & Gear
            </a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">
              Platform Features
            </a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
              Reviews
            </a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-slate-950 rounded-xl group bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="px-5 py-2.5 rounded-[10px] flex items-center gap-2">
                Start Free Trial
                <ChevronRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Programs
            </a>
            <a
              href="#lessons"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Lessons & Gear
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Platform Features
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Reviews
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Pricing
            </a>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="#"
                className="w-full text-center py-2.5 text-slate-300 font-medium hover:text-white"
              >
                Sign In
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold rounded-xl"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium shadow-inner">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Next-Gen Athletic Fitness Platform</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-300">V2.4 App Release</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Master the Fundamentals. <br />
              <span className="gradient-text">Build Unstoppable Strength.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop guessing your fitness routine. Back2Basics combines battle-tested workout programs, step-by-step HD exercise video lessons, gear guides, and automated progress tracking engineered for real athletic gains.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>Start 14-Day Free Trial</span>
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#programs"
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 font-semibold rounded-xl border border-slate-800 flex items-center justify-center gap-2.5 transition-all text-base hover:border-slate-700"
              >
                <PlayCircle className="w-5 h-5 text-emerald-400" />
                <span>Explore Programs</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Mobile + Web Access</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">15,000+</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Active Athletes</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">45+</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Structured Programs</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">98.4%</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Goal Completion</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive App Preview Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

            {/* Main Interactive Glass Card */}
            <div className="relative glass-card rounded-2xl p-5 sm:p-6 border border-slate-700/60 shadow-2xl space-y-5">
              {/* Card Header & Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-400 font-mono ml-2">
                    Back2Basics Dashboard
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  LIVE SESSION
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-900/90 p-1 rounded-xl text-xs font-medium border border-slate-800">
                <button
                  onClick={() => setPreviewTab("workout")}
                  className={`py-1.5 rounded-lg transition-all ${
                    previewTab === "workout"
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Workout
                </button>
                <button
                  onClick={() => setPreviewTab("lesson")}
                  className={`py-1.5 rounded-lg transition-all ${
                    previewTab === "lesson"
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Lessons
                </button>
                <button
                  onClick={() => setPreviewTab("equipment")}
                  className={`py-1.5 rounded-lg transition-all ${
                    previewTab === "equipment"
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Equipment
                </button>
              </div>

              {/* Dynamic Tab Body */}
              {previewTab === "workout" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                        Active Program • Week 3 Day 2
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        45 Mins
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Explosive Lower Body & Squat Mechanics
                    </h3>

                    {/* Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-slate-300 font-medium">
                        <span>Overall Session Completion</span>
                        <span className="text-emerald-400 font-bold">75%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full w-[75%]" />
                      </div>
                    </div>
                  </div>

                  {/* Exercise Item Mockup */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                          1
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Barbell Back Squats</p>
                          <p className="text-xs text-slate-400">4 Sets × 6 Reps @ 225 lbs</p>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Done
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                          2
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Romanian Deadlifts</p>
                          <p className="text-xs text-slate-400">3 Sets × 8 Reps @ 185 lbs</p>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-cyan-500 text-slate-950 font-bold rounded-lg animate-pulse">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {previewTab === "lesson" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 h-44 flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <CirclePlay className="w-14 h-14 text-emerald-400 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold rounded">
                        HD VIDEO LESSON
                      </span>
                      <p className="text-sm font-bold text-white mt-1">
                        Mastering Hip Hinge & Lat Engagement
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300">
                    💡 <strong className="text-white">Coach Tip:</strong> Keep your chest elevated and imagine squeezing an orange under each armpit before initiating the pull.
                  </div>
                </div>
              )}

              {previewTab === "equipment" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Recommended Equipment for Today
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                      <Dumbbell className="w-5 h-5 text-amber-400" />
                      <div>
                        <p className="text-xs font-bold text-white">Barbell & Plates</p>
                        <p className="text-[10px] text-slate-400">Required</p>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      <div>
                        <p className="text-xs font-bold text-white">Lifting Belt</p>
                        <p className="text-[10px] text-slate-400">Optional</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400">
                    Prefer dumbbell alternatives? Back2Basics automatically adjusts program variations based on your available equipment.
                  </div>
                </div>
              )}

              {/* Card Footer Badge */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Auto-Saved Cloud Sync
                </span>
                <span className="text-emerald-400 font-semibold">Ready for Next Set →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS SECTION */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" /> Structured Training Catalog
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Programs Engineered for <span className="gradient-text">Measurable Results</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose a battle-tested training program aligned with your fitness goals and available equipment setup.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {[
              { id: "all", label: "All Programs" },
              { id: "beginner", label: "Beginner Basics" },
              { id: "strength", label: "Strength & Muscle" },
              { id: "athletic", label: "Athletic Performance" },
              { id: "bodyweight", label: "Bodyweight & Core" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveProgramTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeProgramTab === tab.id
                    ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 relative group overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${program.imageGrad} rounded-bl-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100`}
              />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 text-xs font-medium border border-slate-700">
                    {program.level}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{program.rating}</span>
                    <span className="text-slate-500 font-normal">({program.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {program.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {program.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>{program.frequency}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Dumbbell className="w-4 h-4 text-slate-500" />
                  <span>Equipment: {program.equipment}</span>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-800 transition-all flex items-center justify-center gap-2 group-hover:border-emerald-500/50">
                  <span>Start This Program</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES GRID */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Built For Athletic Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to <span className="gradient-text">Level Up</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Back2Basics combines key training pillars into one cohesive system built to keep you consistent and injury-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bg}`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Learn how it works</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE VIDEO LESSON & EQUIPMENT SHOWCASE */}
      <section id="lessons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                Interactive Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Step-by-Step Technique Video Lessons & Equipment Guides
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Never second-guess your lifting form again. Every program includes comprehensive video lessons covering exact joint cues, bar path mechanics, and safety setup.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Multi-Angle HD Video Breakdown</h4>
                    <p className="text-xs text-slate-400">
                      Front, side, and isometric angles for every complex movement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Equipment Alternative Selector</h4>
                    <p className="text-xs text-slate-400">
                      Swap barbell exercises for dumbbell or cable variations with 1-tap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Audio Form Cues</h4>
                    <p className="text-xs text-slate-400">
                      Listen to quick 10-second vocal cues right before starting your work set.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side mock video cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-16 rounded-xl bg-slate-800 relative flex items-center justify-center shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20" />
                  <CirclePlay className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                    LESSON #04 • 4 MINS
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300">
                    Conventional Deadlift: Foot Placement & Wedge Technique
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Master lat tension and wedging hip position before pull.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-16 rounded-xl bg-slate-800 relative flex items-center justify-center shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20" />
                  <CirclePlay className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                    LESSON #12 • 3 MINS
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300">
                    Overhead Pressing: Scapular Path & Wrist Alignment
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Protect shoulder impingement while increasing pressing power.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-16 rounded-xl bg-slate-800 relative flex items-center justify-center shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20" />
                  <BookOpen className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    GEAR GUIDE • READ TIME 2 MIN
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300">
                    Selecting the Right Footwear: Squat Shoes vs Minimalist Sneakers
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Understand ankle mobility angles and heel elevation benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & REVIEWS */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-emerald-400" /> Athlete Success Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Over <span className="gradient-text">15,000 Athletes</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how lifters, runners, and fitness enthusiasts are achieving lifetime personal records with Back2Basics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs">
                    {t.metric}
                  </span>
                </div>

                <p className="text-slate-300 text-sm italic leading-relaxed">
                  &quot;{t.text}&quot;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Simple, Transparent Access
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start Free, Upgrade when You&apos;re <span className="gradient-text">Ready</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No hidden contracts. All plans include 14-day free trial with full feature access.
          </p>

          {/* Billing Cycle Switch */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <span
              className={`text-sm font-medium ${
                billingCycle === "monthly" ? "text-white" : "text-slate-400"
              }`}
            >
              Monthly Billing
            </span>
            <button
              onClick={() =>
                setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
              }
              className="w-14 h-8 rounded-full bg-slate-900 border border-slate-700 p-1 flex items-center transition-colors relative"
            >
              <div
                className={`w-6 h-6 rounded-full bg-emerald-400 transition-transform ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium flex items-center gap-1.5 ${
                billingCycle === "annual" ? "text-white" : "text-slate-400"
              }`}
            >
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                SAVE 25%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Free Tier */}
          <div className="glass-card rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Free Starter</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Perfect for beginner lifters getting started.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 text-sm">/ forever free</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Access to 2 Foundation Programs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Basic Exercise Video Cues</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Standard Workout Logger</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-500 line-through">
                  <span>Smart Auto-Regulation Progress</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-500 line-through">
                  <span>Offline Mobile Sync</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-slate-800 transition-colors text-sm">
              Create Free Account
            </button>
          </div>

          {/* Pro Athlete Tier (Highlighted) */}
          <div className="glass-card rounded-3xl p-8 border-2 border-emerald-500/80 flex flex-col justify-between relative bg-slate-900/90 shadow-xl shadow-emerald-500/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-md">
              Most Popular Choice
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  Pro Athlete <Sparkles className="w-4 h-4 text-emerald-400" />
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Full library & advanced performance analytics.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {billingCycle === "annual" ? "$11" : "$15"}
                </span>
                <span className="text-slate-400 text-sm">/ month</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">All 45+ Training Programs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited HD Video Lessons & Gear Guides</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Smart Progressive Overload Engine</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full iOS & Android Mobile Offline Sync</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Priority Form Video Review from Coaches</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20 text-sm">
              Start 14-Day Free Trial
            </button>
          </div>

          {/* Team / Coach Tier */}
          <div className="glass-card rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Team & Gym Coach</h3>
                <p className="text-xs text-slate-400 mt-1">
                  For trainers, gym owners, and team coaches.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {billingCycle === "annual" ? "$39" : "$49"}
                </span>
                <span className="text-slate-400 text-sm">/ month</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Up to 25 Athlete Client Accounts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Program & Workout Builder</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Admin Analytics & Compliance Dashboard</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Team Messaging & Feedback</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-slate-800 transition-colors text-sm">
              Contact Team Sales
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950/80 p-8 sm:p-16 border border-emerald-500/30 overflow-hidden text-center space-y-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs tracking-wider uppercase">
            Start Your Journey Today
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Strip Away the Fluff & Build <span className="gradient-text">Real Athletic Power?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Join 15,000+ athletes training with Back2Basics. Get instant access to all programs, video lessons, and mobile apps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 text-base"
            >
              <span>Get Started 14-Days Free</span>
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-400 text-xs sm:text-sm">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <Dumbbell className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-lg font-bold text-white">Back2Basics</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Back2Basics is an athletic training platform focused on strength fundamentals, exercise form precision, and progressive overload.
            </p>
            <p className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} Back2Basics Inc. All rights reserved.
            </p>
          </div>

          {/* Links 1 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Training</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Beginner Programs
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Strength & Hypertrophy
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Athletic Conditioning
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  Calisthenics & Mobility
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#lessons" className="hover:text-emerald-400 transition-colors">
                  Video Lessons
                </a>
              </li>
              <li>
                <a href="#lessons" className="hover:text-emerald-400 transition-colors">
                  Equipment Database
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Coaching Staff
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
