import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

function AddProperty() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {

            const user = JSON.parse(localStorage.getItem('user'));
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            if (imageFile) {
                formData.append('image', imageFile);
            }
            if (user) {
                formData.append('createdBy', user._id);
            }
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/property/addproperty`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
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
            reset();
            setImageFile(null);
        } catch (error) {
            toast.error(error.response?.data?.msg || "Failed to add property", {
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

    return (
        <div className="bg-gray-100 py-16 px-6 rounded-3xl my-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    Add New <span className="text-green-500">Property</span>
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Property Name */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Property Name</label>
                        <input
                            {...register("title", { required: "Property name is required" })}
                            className="p-3 rounded-xl border border-gray-300"
                        />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Location</label>
                        <input
                            {...register("location", { required: "Location is required" })}
                            className="p-3 rounded-xl border border-gray-300"
                        />
                        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                    </div>

                    {/* Bedrooms */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Number of Bedrooms</label>
                        <select
                            {...register("bedRoom", { required: "Select bedrooms" })}
                            className="p-3 rounded-xl border border-gray-300"
                        >
                            <option value="">Select Bedrooms</option>
                            {[1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                        {errors.bedRoom && <p className="text-red-500">{errors.bedRoom.message}</p>}
                    </div>

                    {/* Bathrooms */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Number of Bathrooms</label>
                        <select
                            {...register("bathRoom", { required: "Select bathrooms" })}
                            className="p-3 rounded-xl border border-gray-300"
                        >
                            <option value="">Select Bathrooms</option>
                            {[1, 2, 3, 4].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                        {errors.bathRoom && <p className="text-red-500">{errors.bathRoom.message}</p>}
                    </div>

                    {/* Cars */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Number of Cars</label>
                        <select
                            {...register("car", { required: "Select cars" })}
                            className="p-3 rounded-xl border border-gray-300"
                        >
                            <option value="">Select Cars</option>
                            {[1, 2, 3, 4].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                        {errors.car && <p className="text-red-500">{errors.car.message}</p>}
                    </div>

                    {/* Carpet Area */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Carpet Area</label>
                        <input
                            type="number"
                            {...register("carpetArea", { required: "Carpet area is required" })}
                            className="p-3 rounded-xl border border-gray-300"
                        />
                        {errors.carpetArea && <p className="text-red-500">{errors.carpetArea.message}</p>}
                    </div>

                    {/* Price */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Price</label>
                        <input
                            type="number"
                            {...register("price", { required: "Price is required" })}
                            className="p-3 rounded-xl border border-gray-300"
                        />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Description</label>
                        <textarea
                            {...register("description", { required: "Description is required" })}
                            className="p-3 rounded-xl border border-gray-300"
                            rows="4"
                        ></textarea>
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                    </div>

                    {/* Contact Phone Number */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Contact Phone Number</label>
                        <input
                            type="number"
                            maxLength={10}
                            inputMode="numeric"
                            pattern="\d*"
                            {...register("contactPhone", {
                                required: "Contact phone number is required",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: "Enter a valid 10-digit phone number"
                                }
                            })}
                            className="p-3 rounded-xl border border-gray-300"
                        />
                        {errors.contactPhone && (
                            <p className="text-red-500">{errors.contactPhone.message}</p>
                        )}
                    </div>


                    {/* Image File Upload */}
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-semibold">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="p-3 rounded-xl border border-gray-300"
                        />
                        {!imageFile && <p className="text-red-500">Image is required</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                        disabled={loading}
                    >
                        {loading ? "Adding..." : "Add Property"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProperty;