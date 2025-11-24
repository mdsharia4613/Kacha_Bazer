import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();

    
    const { login } = useContext(UserContext);

    const [input, setInput] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const res = login(input.email, input.password);

        if (res.success) {
            Swal.fire({
                title: "Login Successful!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
            navigate("/");
        } else {
            console.log("error message", res.message)
            setError(res.message);
            toast.error(res.message, {
                style: {
                    background: "#ff4d4d",
                    color: "#fff",
                    fontWeight: "bold"
                },
            });

        }
    };

    return (
        <div className="p-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 ">

            <Toaster position="top-center" toastOptions={{
                success: { style: { background: '#00bc7d', color: '#fff' } },
                error: { style: { background: '#ff4d4d', color: '#fff' } }
            }} />
            <div className="w-full max-w-xl bg-white/40 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8 animate-fadeIn">

                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#00bc7d] to-[#028d5b] text-transparent bg-clip-text">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00bc7d] focus:outline-none transition-all"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00bc7d] focus:outline-none transition-all"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00bc7d] to-[#028d5b] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                    >
                        Login
                    </button>
                </form>

                {/* Bottom Text */}
                <p className="text-center text-gray-600 text-sm mt-6">
                    Don't have an account?{" "}
                    <span className="text-[#00bc7d] font-semibold hover:underline cursor-pointer">
                        Create one
                    </span>
                </p>
            </div>
        </div>

    );
};

export default Login;
