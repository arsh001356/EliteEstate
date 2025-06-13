import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/property/${id}`);
                setProperty(response.data);
            } catch (err) {
                setError("Failed to load property details.");
            } finally {
                setLoading(false);
            }
        };
        fetchProperty();
    }, [id]);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
    if (!property) return null;

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 my-10">
            <img src={property.image} alt={property.title} className="w-full h-80 object-cover rounded-xl mb-6" />
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <div className="flex gap-6 mb-4">
                <span>🛏 {property.bedRoom} Bedrooms</span>
                <span>🛁 {property.bathRoom} Bathrooms</span>
                <span>🚗 {property.car} Cars</span>
                <span>📏 {property.carpetArea} sqft</span>
            </div>
            <p className="text-green-600 font-bold text-xl mb-4">₹{property.price}</p>
            <p className="mb-6">{property.description}</p>
            {property.contactPhone && (
                <p className="mb-6 font-semibold text-gray-700">Contact Phone:+91 <a href={`tel:${property.contactPhone}`} className="text-blue-600 underline">{property.contactPhone}</a></p>
            )}
            {property.createdBy && (
                <div className="bg-gray-100 p-4 rounded-xl mt-6">
                    <h2 className="text-lg font-semibold mb-1">Listed By:</h2>
                    <p><span className="font-semibold">Username:</span> {property.createdBy.username}</p>
                    <p><span className="font-semibold">Email:</span> <a href={`mailto:${property.createdBy.email}`} className="text-blue-600 underline">{property.createdBy.email}</a></p>
                </div>
            )}
        </div>
    );
}

export default PropertyDetails; 