import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="h-[400px] md:h-[500px] bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex rounded-none md:rounded-3xl my-0 md:my-5">
            <div className="h-full flex flex-col justify-center mx-4 md:mx-10 lg:mx-20 px-4 md:px-0">
                <p className="text-base md:text-lg text-gray-700">Welcome to EliteEstate</p>
                <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold capitalize">
                    Discover Exceptional <br />
                    <span className="text-green-500">Homes with EliteEstate</span>
                </h1>
                <p className="mt-3 md:mt-4 text-gray-600 text-sm sm:text-base md:text-lg w-full md:w-[80%] lg:w-[50%]">
                    Find your dream home with EliteEstate. We offer a wide range of properties, from modern apartments to luxurious villas, ensuring comfort, quality, and the perfect living space for you.
                </p>
                <div className='mt-5 md:mt-7'>
                    <div className="flex w-56 sm:w-64 md:w-72 h-12 sm:h-14 rounded-full overflow-hidden">

                        <div className="bg-white w-1/2 flex flex-col items-center justify-center px-2 sm:px-3">
                            <p className="font-bold text-black text-sm sm:text-base">10% OFF</p>
                            <p className="text-gray-600 text-xs sm:text-sm">On All Properties</p>
                        </div>

                        <div className="bg-green-500 hover:bg-green-600 w-1/2 flex items-center justify-center cursor-pointer">
                            <Link
                                to="/properties"
                                className="text-white font-semibold text-sm sm:text-base md:text-lg"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
