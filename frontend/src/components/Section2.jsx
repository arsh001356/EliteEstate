import React from 'react';

function Section2() {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-10'>
            {/* Image Section */}
            <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full sm:w-[350px] md:w-[400px] lg:w-[500px] bg-[url('/pexels-expect-best-79873-323705.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-tr-none lg:rounded-tr-full my-5 lg:my-10">
            </div>

            {/* Content Section */}
            <div className='w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-10 mt-8 lg:mt-0'>
                <p className="uppercase text-green-500 font-semibold text-sm md:text-base">Unveiling Our Journey</p>

                <h1 className="capitalize text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight mt-2">
                    Our commitment to crafting extraordinary real estate experiences
                </h1>

                <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-[16px]">
                    At EliteEstate, we strive to bring you the best properties with seamless service.
                    Our mission is to redefine real estate by offering innovative solutions and top-tier properties.
                </p>

                {/* Stats Section */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 mt-8 sm:mt-10">
                    <div className="text-center bg-green-100 px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%]">
                        <p className="text-2xl sm:text-3xl font-bold text-green-600">12K+</p>
                        <p className="text-gray-700 font-medium text-sm sm:text-base">Happy Clients</p>
                    </div>

                    <div className="text-center bg-green-100 px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%]">
                        <p className="text-2xl sm:text-3xl font-bold text-green-600">3k+</p>
                        <p className="text-gray-700 font-medium text-sm sm:text-base">Different Cities</p>
                    </div>

                    <div className="text-center bg-green-100 px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-lg shadow-md w-full sm:w-[45%] md:w-[30%]">
                        <p className="text-2xl sm:text-3xl font-bold text-green-600">75k+</p>
                        <p className="text-gray-700 font-medium text-sm sm:text-base">Project Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;
