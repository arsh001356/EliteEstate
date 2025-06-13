import React from "react";

function AboutUs() {
    return (
        <div className="bg-gray-100 py-16  my-5 rounded-3xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">About <span className="text-green-500">EliteEstate</span></h1>
                    <p className="text-gray-600 mt-3">
                        Delivering exceptional real estate experiences with trust and innovation.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <img src="/pexels-binyaminmellish-106399.jpg" alt="Our Story" className="w-full rounded-xl shadow-lg" />
                        <div className="absolute -bottom-5 -right-5 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                            <h2 className="text-lg font-bold">12K+</h2>
                            <p className="text-sm">Happy Clients</p>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Our Journey</h2>
                        <p className="text-gray-600 mt-4">
                            Founded in 2010, EliteEstate has grown into a trusted name in real estate, helping thousands
                            of clients find their dream homes. We believe in integrity, transparency, and innovation.
                        </p>
                        <p className="text-gray-600 mt-3">
                            Our team of experts ensures that every client gets the best property solutions tailored to their needs.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Our Mission & Vision</h2>
                        <p className="text-gray-600 mt-4">
                            Our mission is to redefine real estate by providing innovative solutions and creating seamless experiences
                            for our clients. We envision a future where finding the perfect home is effortless and enjoyable.
                        </p>
                        <div className="flex space-x-6 mt-6">
                            <div className="bg-green-500 text-white p-4 rounded-xl shadow-lg text-center w-32">
                                <h2 className="text-xl font-bold">500+</h2>
                                <p className="text-sm">Properties Sold</p>
                            </div>
                            <div className="bg-green-500 text-white p-4 rounded-xl shadow-lg text-center w-32">
                                <h2 className="text-xl font-bold">50+</h2>
                                <p className="text-sm">Expert Agents</p>
                            </div>
                        </div>
                    </div>


                    <div className="relative">
                        <img src="/pexels-jovydas-2462015.jpg" alt="Mission & Vision" className="w-full rounded-xl shadow-lg" />
                        <div className="absolute -top-5 -left-5 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                            <h2 className="text-lg font-bold">10+</h2>
                            <p className="text-sm">Years of Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
