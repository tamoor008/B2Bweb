"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LifeBuoy,
  Mail,
  HelpCircle,
  MessageSquare,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Send,
} from "lucide-react";
import MobileAppComingSoonModal from "@/components/MobileAppComingSoonModal";

export default function SupportPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      question: "Where do I manage my Back to Basics program subscription?",
      answer:
        "All program access and memberships are managed securely through your Apple App Store or Google Play Store account settings on your mobile device.",
    },
    {
      question: "How do I sync my workout data between devices?",
      answer:
        "Once you sign into the Back to Basics mobile app, your completed sessions, exercise PRs, and notes automatically sync with the cloud.",
    },
    {
      question: "Can I log workouts without an active internet connection?",
      answer:
        "Yes! The Back to Basics mobile app supports 100% offline session logging. Your data will sync automatically next time your phone connects to Wi-Fi or cellular data.",
    },
    {
      question: "How can I request form feedback from certified coaches?",
      answer:
        "Inside the upcoming mobile app, you can submit video recordings of your working sets directly to certified strength trainers at Back to Basics Coaching LLC.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
          <LifeBuoy className="w-3.5 h-3.5" /> Back to Basics Coaching LLC Support
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          How Can We <span className="gradient-purple-text">Help You?</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Have questions about your upcoming mobile app access, program subscriptions, or coaching services? Our team is here to assist.
        </p>
      </div>

      {/* Support Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="b2b-card rounded-2xl p-6 border border-slate-200 space-y-3 bg-white text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Email Support</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Directly email our member assistance team for program or account inquiries.
          </p>
          <a
            href="mailto:support@b2bcoaching.fit"
            className="text-xs font-bold text-[#7C3AED] hover:underline pt-2 inline-block"
          >
            support@b2bcoaching.fit
          </a>
        </div>

        <div className="b2b-card rounded-2xl p-6 border border-slate-200 space-y-3 bg-white text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Mobile App Help</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Get early launch notifications and app subscription details.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="text-xs font-bold text-[#7C3AED] hover:underline pt-2"
          >
            App Launch Details →
          </button>
        </div>

        <div className="b2b-card rounded-2xl p-6 border border-slate-200 space-y-3 bg-white text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Legal & Privacy</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Review how we protect your athlete biometric and personal data.
          </p>
          <Link
            href="/privacy"
            className="text-xs font-bold text-[#7C3AED] hover:underline pt-2"
          >
            Read Privacy Policy →
          </Link>
        </div>
      </div>

      {/* FAQ & Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        {/* Left: FAQs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#7C3AED]" />
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-600">
              Quick answers regarding Back to Basics Coaching LLC programs and mobile app.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs"
              >
                <h4 className="text-sm font-bold text-slate-900">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-5">
          <div className="b2b-card rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-lg space-y-5">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#7C3AED]" />
                Send Support Request
              </h3>
              <p className="text-xs text-slate-500">
                Reach out to Back to Basics Coaching LLC customer care.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="athlete@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Question about mobile app launch"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist your training journey?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md shadow-[#7C3AED]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for contacting Back to Basics Coaching LLC. Our support team will get back to <span className="font-semibold text-slate-900">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#7C3AED] font-bold hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <MobileAppComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionTitle="Support & Mobile App"
      />
    </div>
  );
}
