import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthModalContext } from "../context/AuthModalProvider";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

function SignUp() {
    const { isSignUpOpen, setIsSignUpOpen, setIsLoginFormOpen } = useContext(AuthModalContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, data);
            console.log(response.data);

            toast.success(response.data.msg || "Signup successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,
            });

            reset();
            setIsSignUpOpen(false);
        } catch (error) {
            toast.error(error.response?.data?.msg || "Signup failed!", {
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
        reset();
        setIsSignUpOpen(false);
    };

    const openLogin = () => {
        setIsLoginFormOpen(true);
        setIsSignUpOpen(false);
    };

    return (
        <>
            {isSignUpOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative animate-fadeIn">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                        >
                            &times;
                        </button>

                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Create an Account
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Username */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium">Username</label>
                                <input
                                    type="text"
                                    {...register("username", {
                                        required: "Username is required",
                                        minLength: {
                                            value: 3,
                                            message: "Username must be at least 3 characters"
                                        }
                                    })}
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email"
                                        }
                                    })}
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            {/* Password */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium">Password</label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
                                disabled={loading}
                            >
                                {loading ? <FaSpinner className="animate-spin mr-2" /> : "Sign Up"}
                            </button>
                        </form>

                        {/* Already have an account? */}
                        <div className="text-gray-600 mt-4 flex space-x-2">
                            <p>Already have an account?</p>
                            <button onClick={openLogin} className="text-green-500 hover:underline">
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignUp;
