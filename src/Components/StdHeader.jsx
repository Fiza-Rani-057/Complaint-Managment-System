 function Navbar(){
    return(
   <>
      <header className="w-full h-14 px-5 flex items-center justify-between bg-[#070a09] border-b border-white/[0.07] shrink-0">
        <div className="flex items-center gap-5 flex-1 max-w-xl">
          <button
            onClick={() => setIsOpen && setIsOpen((prev) => !prev)}
            className="text-[#9ca3af] hover:text-white transition-colors p-1"
            aria-label="Toggle Menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-5 h-5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Search Input Pill */}
          <div className="flex items-center gap-2.5 w-full max-w-[380px] h-9 px-3.5 rounded-lg bg-[#0d1110] border border-white/[0.08] focus-within:border-[#76e01b]/50 transition-colors">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="#6b7280"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 shrink-0"
            >
              <circle cx="9" cy="9" r="6" />
              <line x1="13.5" y1="13.5" x2="17" y2="17" />
            </svg>
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full bg-transparent text-[13px] text-gray-200 placeholder-[#6b7280] focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Notification Bell + Student Profile Dropdown */}
        <div className="flex items-center gap-4">
          {/* Bell Icon */}
          <button
            className="relative text-[#9ca3af] hover:text-white transition-colors p-1"
            aria-label="Notifications"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px]"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          {/* Student Avatar + Name + Chevron */}
          <button className="flex items-center gap-2 text-left group">
            <span className="w-7 h-7 rounded-full bg-[#17221b] border border-[#2d4234] flex items-center justify-center text-[12px] font-semibold text-[#e5e7eb]">
              S
            </span>
            <span className="text-[13px] font-medium text-[#e5e7eb] group-hover:text-white transition-colors">
              Student
            </span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 group-hover:text-white transition-colors"
            >
              <polyline points="4 6 8 10 12 6" />
            </svg>
          </button>
        </div>
      </header>
   </>
    )
    
 }
 export default Navbar;