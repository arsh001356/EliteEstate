import { React, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthModalContext } from "../context/AuthModalProvider";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

function LoginPopUp() {
    const { isLoginFormOpen, setIsLoginFormOpen, setIsSignUpOpen } = useContext(AuthModalContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, data);
            // Store user in localStorage
            localStorage.setItem('user', JSON.stringify(response.data.user));
            toast.success(response.data.msg, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,

            });
            reset()
            setIsLoginFormOpen(false);
        } catch (error) {
            toast.error(error.response?.data?.msg || "Login failed", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    };

    const onClose = () => {
        reset()
        setIsLoginFormOpen(false);
    };

    const openSignUp = () => {
        setIsSignUpOpen(true);
    };

    return (
        <div>
            {isLoginFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative animate-fadeIn"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            aria-label="Close login form"
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                        >
                            &times;
                        </button>

                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Welcome Back!
                        </h1>

                        <form
                            onSubmit={handleSubmit((data, e) => {
                                e.preventDefault();
                                onSubmit(data);
                            })}
                            className="space-y-5"
                        >
                            {/* Email */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-gray-700 font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email",
                                        },
                                    })}
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-gray-700 font-medium">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                    })}
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
                                disabled={loading}
                            >
                                {loading ? (
                                    <FaSpinner className="animate-spin mr-2" />
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </form>

                        {/* Sign Up Link */}
                        <div className="text-gray-600 mt-4 flex space-x-2">
                            <p>Don't have an account?</p>
                            <button onClick={openSignUp} className="text-green-500 hover:underline">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPopUp;
