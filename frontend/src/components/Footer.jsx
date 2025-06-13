import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 rounded-xl my-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h1 className="text-2xl font-bold italic text-green-500">EliteEstate</h1>
                        <p className="mt-3 text-gray-400">
                            Your dream home is just a step away. Find the best properties with us.
                        </p>
                    </div>


                    <div className="flex flex-col space-y-3">
                        <h2 className="text-xl font-semibold text-green-400">Quick Links</h2>
                        <Link to="/" className="text-gray-400 hover:text-green-500 transition">Home</Link>
                        <Link to="/properties" className="text-gray-400 hover:text-green-500 transition">Properties</Link>
                        <Link to="/about" className="text-gray-400 hover:text-green-500 transition">About Us</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-green-500 transition">Contact</Link>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h2 className="text-xl font-semibold text-green-400">Contact</h2>
                        <p className="text-gray-400">📍 123 Real Estate St, City, Country</p>
                        <p className="text-gray-400">📞 +123 456 7890</p>
                        <p className="text-gray-400">✉ support@eliteestate.com</p>
                        <div className="flex space-x-4 mt-3">
                            <a href="#" className="text-gray-400 hover:text-blue-500 text-lg"><FaFacebookF /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 text-lg"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-pink-500 text-lg"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 text-lg"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-8 pt-4">
                    &copy; 2025 EliteEstate. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
