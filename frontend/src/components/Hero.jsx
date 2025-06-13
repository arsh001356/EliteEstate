import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className="h-[500px] bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex rounded-3xl my-5">
            <div className="h-full flex flex-col justify-center mx-20">
                <p className="text-lg text-gray-700">Welcome to EliteEstate</p>
                <h1 className="text-black text-4xl font-bold capitalize">
                    Discover Exceptional <br />
                    <span className="text-green-500">Homes with EliteEstate</span>
                </h1>
                <p className="mt-4 text-gray-600 text-lg w-[50%]">
                    Find your dream home with EliteEstate. We offer a wide range of properties, from modern apartments to luxurious villas, ensuring comfort, quality, and the perfect living space for you.
                </p>
                <div className='mt-7'>
                    <div className="flex w-72 h-14 rounded-full overflow-hidden">

                        <div className="bg-white w-1/2 flex flex-col items-center justify-center px-3">
                            <p className="font-bold text-black">10% OFF</p>
                            <p className="text-gray-600 text-sm">On All Properties</p>
                        </div>

                        <div className="bg-green-500 hover:bg-green-600 w-1/2 flex items-center justify-center cursor-pointer">
                            <Link to="/properties" className="text-white font-semibold text-lg ">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
