import { useState } from "react";
function Login({onSignUp}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasword, setshowPasword] = useState("");
  const [error, setError] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[#0D0E10] flex items-center justify-center p-0 font-sans">
      <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row">
        {/* Curved Dark Left Panel */}
        <div
          className="w-full md:w-[48%] bg-[#090A0C] text-white p-8 sm:p-10 flex flex-col justify-between relative z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          {/* Top Logo */}

          {/* Center Welcome Copy */}
          <div className="mt-10 py-12 pr-6">
            <h1
              className="text-5xl sm:text-6xl font-extrabold 
            tracking-wide text-white uppercase leading-tight mt-6"
            >
              WELCOME
            </h1>
            <h2
              className="mt-3 text-base 
              sm:text-lg font-bold tracking-wider
             text-[#E6FF00] uppercase leading-snug max-w-xs
             mb-0"
            >
              COMPLAINT MANAGEMENT SYSTEM
            </h2>
          </div>
          <div
            className="space-y-3 text-gray-300  mb-25"
            style={{ font: "20px" }}
          >
            <p>✓ Submit Complaints Easily</p>
            <p>✓ Track Complaint Status</p>
            <p>✓ Quick & Transparent Resolution</p>
            <p>✓ Manage Complaints Efficiently</p>
          </div>
        </div>
        {/* Right Side Login Form */}
        <div
          className="w-full md:w-[52%] bg-white px-4 
        sm:px-8 py-12  pr-16 flex flex-col justify-center"
        >
          <div className="w-full max-w-sm mx-auto">
            <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
              Sign In
            </h1>
            <p className="text-sm text-[#6B7280] mt-1 mb-7">
              Login to your dashboard
            </p>

            <form className="space-y-4">
              {/* User Name / Email Input */}
              <div className="relative">
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="User Name"
                  className="w-full h-11 pl-4 pr-10 text-sm text-[#111827] placeholder-[#6B7280] bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#090A0C] transition-colors"
                />
                <span className="material-symbols-outlined text-[#374151] text-lg absolute right-3 top-1/2 -translate-y-1/2 select-none pointer-events-none">
                  person
                </span>
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPasword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  value={password}
                  className="w-full h-11 pl-4 pr-20 text-sm text-[#111827] placeholder-[#6B7280] bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#090A0C] transition-colors"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[#374151] select-none">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#111827]"></span>
                  <button
                    type="button"
                    className="text-[11px] font-bold tracking-wider uppercase text-[#111827]"
                    onClick={() => setshowPasword(!showPasword)}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPasword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1 pb-2 text-xs">
                <label className="flex items-center gap-2 text-[#374151] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-[#9CA3AF] accent-[#090A0C]"
                  />
                  <span>Remember Me</span>
                </label>

                <button
                  type="button"
                  className="font-semibold text-[#111827] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Primary Sign In Button */}
              <button
                type="button"
                className="w-full h-11 bg-[#0F1012]
                hover: cursor-pointer  hover:bg-[#1F2126] text-white text-sm font-medium rounded-lg transition-colors"
              >
                Sign In
              </button>

              {/* Secondary Google Sign In Button */}
              <button
                type="button"
                className="w-full h-11 bg-white hover:bg-gray-50 text-[#111827] text-sm font-medium border border-[#9CA3AF] rounded-lg flex items-center justify-center gap-2.5 transition-colors"
              >
                <span className="font-extrabold text-base bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
                  G
                </span>
                <span>Sign In with other</span>
              </button>
            </form>

            {/* Sign Up Footer */}
            <p className="text-center text-xs text-[#374151] mt-6">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={onSignUp}
                className="font-bold text-[#111827] hover:underline ml-0.5"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
