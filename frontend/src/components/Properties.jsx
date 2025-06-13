import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { FiLoader } from "react-icons/fi";

function Properties() {
    const [searchQuery, setSearchQuery] = useState("");
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/property`);
                setProperties(response.data);
            } catch (err) {
                console.error("Error fetching properties:", err);
                setError("Failed to load properties. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredProperties = properties.filter((property) =>
        property.location.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="bg-gray-100 py-16 px-6 rounded-3xl my-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    Featured <span className="text-green-500">Properties</span>
                </h1>
                <p className="text-gray-600 text-center mb-12">
                    Explore our handpicked selection of the best real estate deals.
                </p>

                {/* Search Bar */}
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search by city..."
                        className="p-3 w-1/3 rounded-xl border border-gray-300"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Property Listing */}
                {loading ? (
                    <div className="flex w-full justify-center">
                        <FiLoader className="animate-spin " />
                    </div>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property) => (
                                <PropertyCard key={property._id} property={property} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">
                                No properties found for this city.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Properties;
