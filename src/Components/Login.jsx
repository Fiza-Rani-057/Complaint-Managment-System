
function Login() {
    return (
        <div className="min-h-screen bg-[#111426]
     flex items-center justify-center p-5 alfa-slab-one-regular ">
            <div className="w-full max-w-md bg-[#191D32]
       border border-[#292E46] rounded-[28px] p-8 shadow-[0_0_20px_rgba(93,214,44,0.35)]">
                <div className="text-center mb-8 ">
                    <h1 className="text-3xl font-bold text-white">
                        Uni<span className="text-[#5DD62C]">Resolve</span>
                    </h1>
                </div>
                <div className="mb-7">
                    <h2 className="text-3xl font-bold text-white text-center">
                        Welcome Back!
                    </h2>

                    <p className="text-gray-400 text-sm mt-2 text-center">
                        Login to manage your complaints.
                    </p>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-300 text-sm mb-2">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-[#111426] border border-[#30364F] 
                        rounded-2xl px-4 py-3.5 text-white outline-none 
                         focus:border-[#5DD62C]
                         focus:shadow-[0_0_35px_rgba(93,214,44,0.7)]
                         transition-all duration-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm mb-2">
                        Password
                    </label>

                    <input
                         type="password"
                         placeholder="Enter your password"
                         className="w-full bg-[#111426]
                          border border-[#30364F] 
                          rounded-2xl px-4 py-3.5
                          text-white outline-none 
                         focus:border-[#5DD62C]
                         focus:shadow-[0_0_35px_rgba(93,214,44,0.7)]
                         transition-all duration-300"
                    />
                </div>
                <button
                    className="w-full bg-[#5DD62C] text-[#111426] 
                    font-bold py-3.5 rounded-2xl  text-lg
                    shadow-[0_0_18px_rgba(93,214,44,0.25)] font-bold
                     hover:shadow-[0_0_28px_rgba(93,214,44,0.45)] 
                     hover:scale-[1.02] transition-all duration-300
                     hover: cursor-pointer"
                > Login
                </button>

                <p className="text-center text-white text-xs mt-7">
                    © 2026 UniResolve. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export { Login };
