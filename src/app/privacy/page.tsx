import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

export default function PrivacyPage() {
  const privacySections = [
    {
      title: "1. Information We Collect",
      body: "We collect personal metrics such as your name, email, age, gender, exercise location, and fitness levels to customize your elite training programs and maximize your results inside Back to Basics Coaching LLC services.",
    },
    {
      title: "2. How We Use Your Data",
      body: "Your biometric and preference data is strictly used to tailor personalized workouts, track performance trends, and enable chat support with your designated Back to Basics Coaching LLC coaches.",
    },
    {
      title: "3. Data Sharing & Third Parties",
      body: "We do not sell your personal data. We only share information with trusted third-party service providers essential for app analytics, secure payment processing via Apple App Store or Google Play Store, and cloud hosting services.",
    },
    {
      title: "4. Your Rights",
      body: "You retain full control over your personal information. You can request access, update your profile within Back to Basics settings, or request full deletion of your account and all associated data at any time.",
    },
    {
      title: "5. Contact Us",
      body: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data handling, please contact our support team at privacy@b2bcoaching.fit.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      {/* Back Link */}
      <Link
        href="/support"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Support</span>
      </Link>

      {/* Header */}
      <div className="b2b-card rounded-3xl p-8 border border-slate-200 bg-white shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Legal Policy
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Back to Basics Coaching LLC • Last updated: July 1, 2026
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Back to Basics Coaching LLC is committed to protecting your privacy. This policy details how we collect, handle, and safeguard your personal and athletic data.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-6">
        {privacySections.map((sec, idx) => (
          <div
            key={idx}
            className="b2b-card rounded-2xl p-6 border border-slate-200 bg-white space-y-2 shadow-xs"
          >
            <h3 className="text-base font-bold text-slate-900">{sec.title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sec.body}</p>
          </div>
        ))}
      </div>

      {/* Contact Banner */}
      <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#7C3AED]" />
          <div>
            <p className="font-bold text-slate-900">Privacy Questions?</p>
            <p className="text-slate-500">Contact our data protection team anytime.</p>
          </div>
        </div>
        <a
          href="mailto:privacy@b2bcoaching.fit"
          className="px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold transition-colors"
        >
          privacy@b2bcoaching.fit
        </a>
      </div>
    </div>
  );
}
