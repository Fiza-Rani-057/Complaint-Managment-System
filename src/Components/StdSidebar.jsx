
import React, { useState } from "react";

const Sidebar = ({ isOpen, setIsOpen, activeTab = "dashboard", setActiveTab, onLogout }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleSelect = (id) => {
    setCurrentTab(id);
    if (setActiveTab) setActiveTab(id);
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Exact Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[230px] flex flex-col justify-between 
        bg-[#070a09] border-r border-[#1a241e] text-[#d1d5db] select-none
        transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Green Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-40 rounded-full opacity-35 blur-3xl"
          style={{ background: "radial-gradient(circle, #76e01b 0%, transparent 70%)" }}
        />

        {/* Bottom Green Ambient Glow & Flowing Light Waves */}
        <div
          className="pointer-events-none absolute bottom-12 -left-10 w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #5ec412 0%, transparent 75%)" }}
        />
        <svg
          viewBox="0 0 230 180"
          fill="none"
          className="pointer-events-none absolute bottom-10 left-0 w-full h-44 opacity-80"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#65d415" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#84f029" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#65d415" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84f029" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#4ea80d" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#070a09" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Flowing Neon Curves behind Headphones */}
          <path
            d="M-20 135 C 45 145, 110 85, 240 155"
            stroke="url(#waveGrad1)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M-15 155 C 60 110, 140 165, 245 120"
            stroke="url(#waveGrad2)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M-10 175 C 80 170, 165 130, 240 65"
            stroke="url(#waveGrad1)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* TOP SECTION: Logo + Navigation */}
        <div className="relative z-10 pt-5 px-3.5">
          {/* Brand Logo */}
          <div className="flex flex-col items-center justify-center mb-7">
            <svg
              viewBox="0 0 64 56"
              fill="none"
              className="w-12 h-11 mb-1.5 drop-shadow-[0_0_14px_rgba(124,232,29,0.55)]"
            >
              {/* Top Outer Chevron */}
              <path
                d="M12 28L32 9L52 28L46.5 33.5L32 19.5L17.5 33.5L12 28Z"
                fill="url(#logoGradTop)"
              />
              {/* Middle Chevron */}
              <path
                d="M20 37L32 25.5L44 37L39 41.8L32 35L25 41.8L20 37Z"
                fill="url(#logoGradMid)"
              />
              {/* Bottom Diamond/Chevron Tip */}
              <path d="M27.5 45L32 40.5L36.5 45L32 49.5L27.5 45Z" fill="#9cf748" />
              <defs>
                <linearGradient id="logoGradTop" x1="32" y1="9" x2="32" y2="33.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9ef84c" />
                  <stop offset="1" stopColor="#5cc912" />
                </linearGradient>
                <linearGradient id="logoGradMid" x1="32" y1="25.5" x2="32" y2="41.8" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8ce838" />
                  <stop offset="1" stopColor="#4eb30c" />
                </linearGradient>
              </defs>
            </svg>

            <h1 className="text-[19px] font-bold tracking-tight leading-none">
              <span className="text-white">Core</span>
              <span className="text-[#8be836]">Resolve</span>
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1.5">
            {/* 1. Dashboard */}
            <button
              onClick={() => handleSelect("dashboard")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium transition-all duration-200 ${
                currentTab === "dashboard"
                  ? "bg-gradient-to-r from-[#2c4716] via-[#213611] to-[#17260c] text-[#a3f054] border border-[#5a9626]/70 shadow-[0_0_16px_rgba(118,224,27,0.18)]"
                  : "text-[#d1d5db] hover:bg-white/[0.04] hover:text-white border border-transparent"
              }`}
            >
              {/* 4-Square Grid Icon (Bottom-right square tilted/offset like image) */}
              <svg viewBox="0 0 20 20" fill="none" className="w-[17px] h-[17px] shrink-0">
                <rect
                  x="2.5"
                  y="2.5"
                  width="6"
                  height="6"
                  rx="1"
                  fill={currentTab === "dashboard" ? "#8be836" : "#9ca3af"}
                />
                <rect
                  x="11"
                  y="2.5"
                  width="6"
                  height="6"
                  rx="1"
                  fill={currentTab === "dashboard" ? "#8be836" : "#9ca3af"}
                />
                <rect
                  x="2.5"
                  y="11"
                  width="6"
                  height="6"
                  rx="1"
                  fill={currentTab === "dashboard" ? "#8be836" : "#9ca3af"}
                />
                <rect
                  x="11.5"
                  y="11.5"
                  width="5.5"
                  height="5.5"
                  rx="1"
                  fill={currentTab === "dashboard" ? "#8be836" : "#9ca3af"}
                />
              </svg>
              <span>Dashboard</span>
            </button>

            {/* 2. Submit Complaint */}
            <button
              onClick={() => handleSelect("submit")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium transition-all duration-200 ${
                currentTab === "submit"
                  ? "bg-gradient-to-r from-[#2c4716] via-[#213611] to-[#17260c] text-[#a3f054] border border-[#5a9626]/70 shadow-[0_0_16px_rgba(118,224,27,0.18)]"
                  : "text-[#d1d5db] hover:bg-white/[0.04] hover:text-white border border-transparent"
              }`}
            >
              {/* Pencil Icon */}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke={currentTab === "submit" ? "#8be836" : "#9ca3af"}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[17px] h-[17px] shrink-0"
              >
                <path d="M13.5 3.5a2.121 2.121 0 0 1 3 3L6.5 16.5 2.5 17.5l1-4L13.5 3.5z" />
                <path d="M11.5 5.5l3 3" />
              </svg>
              <span>Submit Complaint</span>
            </button>

            {/* 3. My Complaints */}
            <button
              onClick={() => handleSelect("complaints")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium transition-all duration-200 ${
                currentTab === "complaints"
                  ? "bg-gradient-to-r from-[#2c4716] via-[#213611] to-[#17260c] text-[#a3f054] border border-[#5a9626]/70 shadow-[0_0_16px_rgba(118,224,27,0.18)]"
                  : "text-[#d1d5db] hover:bg-white/[0.04] hover:text-white border border-transparent"
              }`}
            >
              {/* Document List Box Icon */}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke={currentTab === "complaints" ? "#8be836" : "#9ca3af"}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[17px] h-[17px] shrink-0"
              >
                <rect x="3" y="3" width="14" height="14" rx="2.5" />
                <line x1="6.5" y1="7.5" x2="13.5" y2="7.5" />
                <line x1="6.5" y1="10.5" x2="13.5" y2="10.5" />
                <line x1="6.5" y1="13.5" x2="10.5" y2="13.5" />
              </svg>
              <span>My Complaints</span>
            </button>

            {/* 4. Logout */}
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium text-[#d1d5db] hover:bg-white/[0.04] hover:text-white border border-transparent transition-all duration-200"
            >
              {/* Exit Door Arrow Icon */}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[17px] h-[17px] shrink-0"
              >
                <path d="M11 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6" />
                <polyline points="14 13 17 10 14 7" />
                <line x1="17" y1="10" x2="8" y2="10" />
              </svg>
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* BOTTOM SECTION: 3D Style Headphones + Help Text + Copyright */}
        <div className="relative z-10 flex flex-col items-center pb-5 px-4">
          {/* Floating Gaming/Support Headset Illustration (Exact angled style) */}
          <div className="relative mb-2 flex flex-col items-center">
            <svg
              viewBox="0 0 120 110"
              fill="none"
              className="w-24 h-24 drop-shadow-[0_12px_18px_rgba(0,0,0,0.85)]"
            >
              <defs>
                <linearGradient id="bandGrad" x1="25" y1="15" x2="95" y2="65" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#323835" />
                  <stop offset="50%" stopColor="#171b19" />
                  <stop offset="100%" stopColor="#0d100e" />
                </linearGradient>
                <linearGradient id="neonRing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a3f748" />
                  <stop offset="100%" stopColor="#4da80c" />
                </linearGradient>
                <radialGradient id="cupFace" cx="50%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#2b302e" />
                  <stop offset="70%" stopColor="#141716" />
                  <stop offset="100%" stopColor="#090b0a" />
                </radialGradient>
              </defs>

              {/* Headband Arch (Slightly tilted like image) */}
              <g transform="rotate(-14 60 55)">
                <path
                  d="M26 56 C 24 22, 92 22, 90 56"
                  stroke="url(#bandGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* Inner Neon Green Cushion Accent on Headband */}
                <path
                  d="M38 30 C 48 24, 68 24, 78 30"
                  stroke="#7be022"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Left Ear Cup (Background) */}
                <rect x="20" y="48" width="14" height="28" rx="7" fill="#181c1a" stroke="#65c914" strokeWidth="1.5" />

                {/* Right Ear Cup (Foreground 3D) */}
                <ellipse cx="86" cy="62" rx="15" ry="20" fill="#121514" />
                <ellipse cx="88" cy="62" rx="13" ry="18" fill="url(#cupFace)" stroke="url(#neonRing)" strokeWidth="2.5" />
                {/* Inner Neon Accent Ring */}
                <ellipse cx="89" cy="62" rx="7" ry="10" stroke="#8be836" strokeWidth="1.5" opacity="0.85" />

                {/* Boom Microphone */}
                <path
                  d="M84 78 C 76 90, 62 92, 52 89"
                  stroke="#262b29"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="51" cy="89" r="2.8" fill="#8be836" />
              </g>
            </svg>

            <p className="text-[13px] font-medium text-[#e5e7eb] text-center leading-[1.35] -mt-1">
              We&apos;re here
              <br />
              to help you!
            </p>
          </div>

          {/* Bottom Copyright */}
          <div className="w-full pt-4 mt-4 border-t border-white/[0.06] text-center">
            <p className="text-[11px] text-[#6b7280] tracking-wide">© 2026 CoreResolve</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;