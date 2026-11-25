import { useState } from "react";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("error");
    function showNotification(message, type) {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            showNotification("Please enter your Email", "error");
        }
        else if (password === "") {
            showNotification("Please enter your Password", "error");
        }
        else if (
            email === users.admin.email &&
            password === users.admin.password
        ) {
            showNotification(" Login Successful!", "success");
        }
        else if (
            email === users.student.email &&
            password === users.student.password
        ) {
            showNotification(" Login Successful!", "success");
        }
        else {
            showNotification("Invalid Email or Password!", "error");
        }
    };

    const users = {
        admin: {
            email: "admin@gmail.com",
            password: "admin123"
        },
        student: {
            email: "student@gmail.com",
            password: "student123"
        }
    }
    return (
        <>
            <div className="min-h-screen bg-[#111426]
     flex items-center justify-center p-5 alfa-slab-one-regular ">
                <div className="w-full max-w-md bg-[#191D32]
       border border-[#292E46] rounded-[28px] p-8 shadow-[0_0_20px_rgba(93,214,44,0.35)]">

                    <div className="text-center mb-8">

                        <div className="flex justify-center mb-3">
                            <svg
                                viewBox="0 0 48 48"
                                className="w-12 h-12 text-[#5DD62C] drop-shadow-[0_0_10px_#5DD62C]"
                                fill="none"
                            >
                                <path
                                    d="M7 24 L24 7 L41 24"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 32 L24 20 L36 32"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 39 L24 33 L30 39"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white">
                            Core<span className="text-[#5DD62C]">Resolve</span>
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

                    <form onSubmit={handleSubmit}>

                        <div className="mb-5">
                            <label className="block text-gray-300 text-sm mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={email}
                                placeholder="Enter your email"
                                className="w-full bg-[#111426] border border-[#30364F] rounded-2xl px-4 py-3.5 text-white outline-none focus:border-[#5DD62C] focus:shadow-[0_0_35px_rgba(93,214,44,0.7)] transition-all duration-300"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                placeholder="Enter your password"
                                className="w-full bg-[#111426] border border-[#30364F] rounded-2xl px-4 py-3.5 text-white outline-none focus:border-[#5DD62C] focus:shadow-[0_0_35px_rgba(93,214,44,0.7)] transition-all duration-300"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#5DD62C] text-[#111426] font-bold py-3.5 rounded-2xl text-lg cursor-pointer"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-white text-xs mt-7">
                        © 2026 CoreResolve. All rights reserved.
                    </p>
                </div>
            </div>
            {showToast && (
                <div className={`fixed top-5 right-5 flex items-center gap-3
                    p-4 rounded-xl shadow-lg z-50
                    ${toastType === "error"
                        ? "bg-red-100 text-white-"
                        : "bg-green-100 text-green"
                    }`}>
                    <span
                        className="text-xl cursor-pointer"
                        onClick={() => setShowToast(false)}
                    >
                        {toastType === "error" ? "❌" : "✔"}
                    </span>

                    <p className="font-semibold">
                        {toastMessage}
                    </p>
                </div>
            )}
        </>
    );
}
export { Login };
