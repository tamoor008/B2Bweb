import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft, Mail } from "lucide-react";

export default function TermsPage() {
  const termsSections = [
    {
      title: "1. Acceptance of Terms",
      body: "By creating an account or accessing Back to Basics Coaching LLC mobile application and web services, you agree to be bound by these Terms & Conditions. If you do not agree, you must cease using our services immediately.",
    },
    {
      title: "2. User Accounts & Membership",
      body: "You are responsible for maintaining the confidentiality of your login credentials. Paid program subscriptions renew automatically according to the selected billing cycle in the Apple App Store or Google Play Store unless cancelled prior to renewal.",
    },
    {
      title: "3. Fitness & Health Disclaimer",
      body: "Back to Basics Coaching LLC provides exercise routines, workout tracking, and general fitness guidance. Always consult a qualified physician before starting any exercise training program. You assume full risk and responsibility for any physical injuries incurred while performing exercises.",
    },
    {
      title: "4. Intellectual Property",
      body: "All custom workout programs, videos, graphics, logos, software, and UI components are the exclusive property of Back to Basics Coaching LLC and protected by applicable copyright and trademark laws.",
    },
    {
      title: "5. Account Termination",
      body: "We reserve the right to suspend or terminate accounts that violate community standards, misuse application services, or engage in unauthorized distribution of Back to Basics Coaching LLC content.",
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
          <FileText className="w-4 h-4" /> Terms of Service
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Back to Basics Coaching LLC • Last updated: July 1, 2026
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Please review the terms and conditions governing your use of Back to Basics Coaching LLC training programs, mobile applications, and web platform.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-6">
        {termsSections.map((sec, idx) => (
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
            <p className="font-bold text-slate-900">Questions about our Terms?</p>
            <p className="text-slate-500">Contact our legal & support team anytime.</p>
          </div>
        </div>
        <a
          href="mailto:support@b2bcoaching.fit"
          className="px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold transition-colors"
        >
          support@b2bcoaching.fit
        </a>
      </div>
    </div>
  );
}
