import { useState } from "react";
function SignUp({ onSignin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [confirm, setconfirm] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen w-full bg-[#0D0E10] flex items-center justify-center p-0 font-sans">
      <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row">

        {/* Left Dark Panel */}
        <div className="w-full md:w-[48%] bg-[#090A0C] text-white p-8 sm:p-10 flex flex-col justify-between relative z-10">
          <div className="mt-10 pr-6">
            <h1 className="text-5xl sm:text-6xl mt-15 font-extrabold tracking-wide text-white uppercase leading-tight">
              JOIN US
            </h1>

            <h2 className="mt-3 text-base sm:text-lg font-bold tracking-wider text-[#E6FF00] uppercase leading-snug max-w-xs">
              COMPLAINT MANAGEMENT SYSTEM
            </h2>
          </div>

          <div className="space-y-3 text-gray-300 text-sm mb-28">
            <p>✓ Create Your Account in Seconds</p>
            <p>✓ Submit Complaints Easily</p>
            <p>✓ Track Real-Time Status Updates</p>
            <p>✓ Fast &amp; Transparent Resolution</p>
          </div>
        </div>

        {/* Right Side Sign Up Form */}
        <div className="w-full md:w-[52%] bg-white px-4 sm:px-8 py-12 sm:pr-16 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">

            <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
              Create Account
            </h1>

            <p className="text-sm text-[#6B7280] mt-1 mb-7">
              Sign up to get started with your dashboard
            </p>

            <form className="space-y-4">

              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full h-11 pl-4 pr-10 text-sm text-[#111827] placeholder-[#6B7280] bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#090A0C] transition-colors"
                />

                <i className="fa-solid fa-user text-sm text-[#374151] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full h-11 pl-4 pr-10 text-sm text-[#111827] placeholder-[#6B7280] bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#090A0C] transition-colors"
                />

                <i className="fa-solid fa-envelope text-sm text-[#374151] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type={showpassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pl-4 pr-20 text-sm text-[#111827] placeholder-[#6B7280] bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#090A0C] transition-colors"
                />

                <button
                  type="button"
                  onClick={() => setShowpassword(!showpassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#374151]"
                >
                  <span className="material-symbols-outlined">
                    {showpassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(e) => {
                    setconfirm(e.target.value);

                    if (e.target.value !== password) {
                      setError("Passwords do not match!");
                    } else {
                      setError("");
                    }
                  }}
                  className="w-full h-11 pl-4 pr-20 text-sm text-[#111827] placeholder-[#6B7280] bg-white border border-[#D1D5DB] rounded-lg outline-none focus:border-[#090A0C] transition-colors"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#374151]"
                >
                  <span className="material-symbols-outlined">
                    {showConfirm ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-xs">
                  {error}
                </p>
              )}

              {/* Terms Checkbox */}
              <div className="flex items-center pt-1 pb-2 text-xs">
                <label className="flex items-center gap-2 text-[#374151] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-[#9CA3AF] accent-[#090A0C]"
                  />
                  <span>I agree to the Terms &amp; Conditions</span>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="button"
                className="w-full h-11 bg-[#0F1012] hover:bg-[#1F2126] text-white text-sm font-medium rounded-lg transition-colors"
              >
                Sign Up
              </button>

              {/* Google Button */}
              <button
                type="button"
                className="w-full h-11 bg-white hover:bg-gray-50 text-[#111827] text-sm font-medium border border-[#9CA3AF] rounded-lg flex items-center justify-center gap-2.5 transition-colors"
              >
                <i className="fa-brands fa-google text-base text-[#EA4335]" />
                <span>Sign Up with Google</span>
              </button>

            </form>

            {/* Login Footer */}
            <p className="text-center text-xs text-[#374151] mt-6">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSignin}
                className="font-bold text-[#111827] hover:underline ml-0.5"
              >
                Sign In
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
