import React from "react";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { BiRuler } from "react-icons/bi";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">{property.title}</h2>
                <p className="text-gray-500">{property.location}</p>
                <div className="flex items-center gap-3 flex-wrap text-gray-700 mt-2">
                    <div className="flex items-center space-x-2 border-r-[1px] border-gray-500 px-2">
                        <IoBedSharp className="text-gray-500" /> <span className="text-sm text-gray-500">{property.bedRoom}</span>
                    </div>
                    <div className="flex items-center space-x-2 border-r-[1px] border-gray-500 px-2">
                        <FaBath className="text-gray-500" /> <span className="text-sm text-gray-500">{property.bathRoom}</span>
                    </div>
                    <div className="flex items-center space-x-2 border-r-[1px] border-gray-500 px-2">
                        <FaCar className="text-gray-500" /> <span className="text-sm text-gray-500">{property.car}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiRuler className="text-gray-500" /> <span className="text-sm text-gray-500">{property.carpetArea}</span>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-gray-600">{property.description.slice(0, 130)}...</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-green-500 font-bold text-lg">₹{property.price}</span>
                    <Link to={`/properties/${property._id}`} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
