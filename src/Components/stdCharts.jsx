 function Charts(){
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div className="relative overflow-hidden rounded-2xl bg-[#0a0e0d] border border-white/[0.08] p-5 flex flex-col justify-between min-h-[250px]">
    <div
      className="pointer-events-none absolute -bottom-10 left-1/4 w-64 h-24 rounded-full opacity-25 blur-2xl"
      style={{ background: "radial-gradient(circle, #8be836 0%, transparent 70%)" }}
    />

    <div className="relative z-10 flex items-center gap-3 mb-4">
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0">
        <path
          d="M14 2.5L23.5 6.8V13.8C23.5 19.6 19.4 24.8 14 26.2C8.6 24.8 4.5 19.6 4.5 13.8V6.8L14 2.5Z"
          fill="#8be836"
        />
        <polyline
          points="10 14.2 12.8 17 18.5 11.2"
          stroke="#070a09"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="text-[17px] font-semibold text-white tracking-tight">
        Complaint Status Overview
      </h3>
    </div>

    <div className="relative z-10 flex flex-wrap items-center justify-around gap-6 my-auto py-2">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90">
          <circle
            cx="70"
            cy="70"
            r="54"
            fill="none"
            stroke="#1a221d"
            strokeWidth="15"
          />
          <circle
            cx="70"
            cy="70"
            r="54"
            fill="none"
            stroke="#8be836"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="339.29"
            strokeDashoffset="84.82"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[28px] font-bold text-white leading-none">75%</span>
          <span className="text-[12.5px] text-[#9ca3af] mt-1">Resolved</span>
        </div>
      </div>

      <div className="space-y-4 min-w-[165px]">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#8be836]" />
            <span className="text-[13.5px] text-[#e5e7eb]">Resolved</span>
          </div>
          <span className="text-[14px] font-semibold text-white">5</span>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#3b82f6]" />
            <span className="text-[13.5px] text-[#e5e7eb]">In Progress</span>
          </div>
          <span className="text-[14px] font-semibold text-white">3</span>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#facc15]" />
            <span className="text-[13.5px] text-[#e5e7eb]">Pending</span>
          </div>
          <span className="text-[14px] font-semibold text-white">4</span>
        </div>
      </div>
    </div>
  </div>

  <div className="relative overflow-hidden rounded-2xl bg-[#0a0e0d] border border-white/[0.08] p-5 flex flex-col justify-between min-h-[250px]">
    <div className="relative z-10 flex items-center gap-3 mb-4">
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#8be836] shrink-0">
        <path
          d="M13 2L4 14H11.5L10.5 22L20 10H12.5L13 2Z"
          fill="currentColor"
        />
      </svg>
      <h3 className="text-[17px] font-semibold text-white tracking-tight">
        Quick Action
      </h3>
    </div>

    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 my-auto py-2 px-2">
      <div className="relative shrink-0 flex items-center justify-center">
        <div
          className="pointer-events-none absolute w-28 h-28 rounded-full opacity-20 blur-xl"
          style={{ background: "radial-gradient(circle, #8be836 0%, transparent 70%)" }}
        />
        <svg viewBox="0 0 110 120" fill="none" className="w-28 h-28 drop-shadow-[0_12px_16px_rgba(0,0,0,0.85)]">
          <defs>
            <linearGradient id="boardBody" x1="20" y1="15" x2="85" y2="105" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#323835" />
              <stop offset="55%" stopColor="#1b1f1d" />
              <stop offset="100%" stopColor="#101312" />
            </linearGradient>
            <linearGradient id="paperSheet" x1="30" y1="28" x2="75" y2="95" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
          </defs>

          <g transform="rotate(-10 55 60)">
            <rect x="20" y="18" width="62" height="84" rx="10" fill="url(#boardBody)" stroke="#3f4743" strokeWidth="1.5" />
            <rect x="37" y="11" width="28" height="12" rx="4" fill="#4b5563" />
            <circle cx="51" cy="17" r="2.2" fill="#111827" />
            <rect x="28" y="29" width="46" height="64" rx="5" fill="url(#paperSheet)" />
            <rect x="35" y="40" width="32" height="4.5" rx="2.2" fill="#374151" />
            <rect x="35" y="51" width="28" height="4.5" rx="2.2" fill="#374151" />
            <rect x="35" y="62" width="32" height="4.5" rx="2.2" fill="#374151" />
            <rect x="35" y="73" width="22" height="4.5" rx="2.2" fill="#374151" />
          </g>

          <circle cx="80" cy="74" r="16" fill="#7be022" />
          <polyline
            points="73.5 74.5 78 79 87 69.5"
            stroke="#070a09"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
        <p className="text-[14.5px] text-[#e5e7eb] leading-relaxed max-w-[220px]">
          Submit a new complaint in just a few clicks.
        </p>

        <button
          // onClick={onSubmitClick}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#8be836] hover:bg-[#99f542] text-[#070b07] text-[13.5px] font-semibold shadow-[0_0_20px_rgba(139,232,54,0.3)] transition-all"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M13.5 3.5a2.121 2.121 0 0 1 3 3L6.5 16.5 2.5 17.5l1-4L13.5 3.5z" />
          </svg>
          <span>Submit New Complaint</span>
          <span className="font-bold">→</span>
        </button>
      </div>
    </div>
  </div>
</div>
        </>
    )
 }
 export default Charts;