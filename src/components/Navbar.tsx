"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Smartphone } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "App Features", href: "/features" },
    { name: "Reviews", href: "/reviews" },
    { name: "Pricing Info", href: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-white border border-slate-200 flex items-center justify-center">
            <Image
              src="/roundiconb2b.png"
              alt="Back to Basics Coaching LLC App Icon"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Back <span className="text-[#7C3AED]">to</span> Basics
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#7C3AED] font-extrabold -mt-1">
              Coaching LLC
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? "text-[#7C3AED] font-bold"
                    : "text-slate-600 hover:text-[#7C3AED]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/programs"
            className="text-sm font-semibold text-slate-600 hover:text-[#7C3AED] px-3 py-2 transition-colors"
          >
            Preview App Programs
          </Link>
          <a
            href="/pricing"
            className="px-4 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm shadow-md shadow-[#7C3AED]/20 transition-all flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-white" />
            <span>Upcoming App</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#7C3AED]/10 text-[#7C3AED] font-bold"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <Link
              href="/programs"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 text-slate-700 font-semibold hover:text-[#7C3AED]"
            >
              Browse Programs
            </Link>
            <a
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Upcoming App</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
