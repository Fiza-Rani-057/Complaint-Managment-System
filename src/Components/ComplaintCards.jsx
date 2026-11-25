function ComplaintCards() {
    return (
        <>
            <div className="w-full space-y-5 bg-[#060908] text-white">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-[28px] font-bold tracking-tight text-white leading-tight">
                            Welcome back, Student!
                        </h1>
                        <p className="text-[13.5px] text-[#9ca3af] mt-0.5">
                            Here&apos;s an overview of your complaint activity.
                        </p>
                    </div>
                    <button
                        // onClick={onSubmitClick}
                        className="inline-flex items-center gap-2 px-4 py-2.5 
                  rounded-lg bg-[#8be836] hover:bg-[#99f542] text-[#070b07] text-[13.5px] font-semibold 
                  shadow-[0_0_20px_rgba(139,232,54,0.3)] transition-all"
                    >
                        <span className="text-base leading-none font-bold">+</span>
                        <span>Submit New Complaint</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="relative overflow-hidden rounded-xl bg-[#0a0e0d] border border-white/[0.08] p-4 min-h-[118px] flex flex-col justify-between">
                        <div className="relative z-10 flex items-center gap-3.5">
                            <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 shrink-0">
                                <rect x="6" y="5" width="24" height="27" rx="3.5" fill="#8be836" />
                                <rect x="13" y="3" width="10" height="4" rx="1.5" fill="#0a0e0d" stroke="#8be836" strokeWidth="1.5" />
                                <rect x="11" y="13" width="14" height="13" rx="1.5" fill="#0a0e0d" />
                                <line x1="14" y1="17" x2="22" y2="17" stroke="#8be836" strokeWidth="1.8" strokeLinecap="round" />
                                <line x1="14" y1="21.5" x2="20" y2="21.5" stroke="#8be836" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[32px] font-bold text-white leading-none">0</span>
                                <span className="text-[13px] text-[#9ca3af] font-normal">Total Complaints</span>
                            </div>
                        </div>

                        <svg
                            viewBox="0 0 280 55"
                            fill="none"
                            className="pointer-events-none absolute bottom-0 left-0 w-full h-14"
                        >
                            <defs>
                                <linearGradient id="card1Fill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#8be836" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#8be836" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 44 C 55 44, 85 24, 145 28 C 205 32, 235 16, 280 22 L 280 55 L 0 55 Z"
                                fill="url(#card1Fill)"
                            />
                            <path
                                d="M0 44 C 55 44, 85 24, 145 28 C 205 32, 235 16, 280 22"
                                stroke="#8be836"
                                strokeWidth="2.2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="relative overflow-hidden rounded-xl bg-[#0a0e0d] border border-white/[0.08] p-4 min-h-[118px] flex flex-col justify-between">
                        <div className="relative z-10 flex items-center gap-3.5">
                            <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 shrink-0">
                                <circle cx="18" cy="18" r="13" stroke="#eab308" strokeWidth="2.6" />
                                <path
                                    d="M18 11.5V18L22.5 20.5"
                                    stroke="#eab308"
                                    strokeWidth="2.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[32px] font-bold text-white leading-none">0</span>
                                <span className="text-[13px] text-[#9ca3af] font-normal">Pending</span>
                            </div>
                        </div>

                        <svg
                            viewBox="0 0 280 55"
                            fill="none"
                            className="pointer-events-none absolute bottom-0 left-0 w-full h-14"
                        >
                            <defs>
                                <linearGradient id="card2Fill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#eab308" stopOpacity="0.22" />
                                    <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 46 C 65 46, 95 26, 155 30 C 210 34, 240 20, 280 26 L 280 55 L 0 55 Z"
                                fill="url(#card2Fill)"
                            />
                            <path
                                d="M0 46 C 65 46, 95 26, 155 30 C 210 34, 240 20, 280 26"
                                stroke="#eab308"
                                strokeWidth="2.2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="relative overflow-hidden rounded-xl bg-[#0a0e0d] border border-white/[0.08] p-4 min-h-[118px] flex flex-col justify-between">
                        <div className="relative z-10 flex items-center gap-3.5">
                            <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 shrink-0">
                                <path
                                    d="M27.5 14.5A10.5 10.5 0 0 0 8.5 13"
                                    stroke="#3b82f6"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                />
                                <polyline
                                    points="28 9.5 28 15 22.5 15"
                                    stroke="#3b82f6"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.5 21.5A10.5 10.5 0 0 0 27.5 23"
                                    stroke="#3b82f6"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                />
                                <polyline
                                    points="8 26.5 8 21 13.5 21"
                                    stroke="#3b82f6"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[32px] font-bold text-white leading-none">0</span>
                                <span className="text-[13px] text-[#9ca3af] font-normal">In Progress</span>
                            </div>
                        </div>
                        <svg
                            viewBox="0 0 280 55"
                            fill="none"
                            className="pointer-events-none absolute bottom-0 left-0 w-full h-14"
                        >
                            <defs>
                                <linearGradient id="card3Fill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 45 C 60 45, 95 28, 150 32 C 205 36, 235 18, 280 24 L 280 55 L 0 55 Z"
                                fill="url(#card3Fill)"
                            />
                            <path
                                d="M0 45 C 60 45, 95 28, 150 32 C 205 36, 235 18, 280 24"
                                stroke="#3b82f6"
                                strokeWidth="2.2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="relative overflow-hidden rounded-xl bg-[#0a0e0d] border border-white/[0.08] p-4 min-h-[118px] flex flex-col justify-between">
                        <div className="relative z-10 flex items-center gap-3.5">
                            <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 shrink-0">
                                <circle cx="18" cy="18" r="13" stroke="#22c55e" strokeWidth="2.6" />
                                <polyline
                                    points="12.5 18.5 16.5 22.5 24 14.5"
                                    stroke="#22c55e"
                                    strokeWidth="2.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[32px] font-bold text-white leading-none">0</span>
                                <span className="text-[13px] text-[#9ca3af] font-normal">Resolved</span>
                            </div>
                        </div>

                        <svg
                            viewBox="0 0 280 55"
                            fill="none"
                            className="pointer-events-none absolute bottom-0 left-0 w-full h-14"
                        >
                            <defs>
                                <linearGradient id="card4Fill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.22" />
                                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 45 C 65 45, 100 26, 155 30 C 210 34, 240 20, 280 25 L 280 55 L 0 55 Z"
                                fill="url(#card4Fill)"
                            />
                            <path
                                d="M0 45 C 65 45, 100 26, 155 30 C 210 34, 240 20, 280 25"
                                stroke="#22c55e"
                                strokeWidth="2.2"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComplaintCards;