import React from 'react';

function Section2() {
    return (
        <div className='w-ful flex justify-around items-center'>
            <div className="h-[500px] w-[500px] bg-[url('/pexels-expect-best-79873-323705.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-tr-full my-10">
            </div>
            <div className='w-1/2'>
                <p className="uppercase text-green-500 font-semibold">Unveiling Our Journey</p>

                <h1 className="capitalize text-4xl font-bold text-gray-800 leading-tight">
                    Our commitment to crafting extraordinary real estate experiences
                </h1>

                <p className="text-gray-600">
                    At EliteEstate, we strive to bring you the best properties with seamless service.
                    Our mission is to redefine real estate by offering innovative solutions and top-tier properties.
                </p>
                <div className="flex space-x-10 justify-center items-center mt-10">

                    <div className="text-center bg-green-100 px-6 py-4 rounded-lg shadow-md">
                        <p className="text-3xl font-bold text-green-600">12K+</p>
                        <p className="text-gray-700 font-medium">Happy Clients</p>
                    </div>


                    <div className="text-center bg-green-100 px-6 py-4 rounded-lg shadow-md">
                        <p className="text-3xl font-bold text-green-600">3k+</p>
                        <p className="text-gray-700 font-medium">Different Cities</p>
                    </div>


                    <div className="text-center bg-green-100 px-6 py-4 rounded-lg shadow-md">
                        <p className="text-3xl font-bold text-green-600">75k+</p>
                        <p className="text-gray-700 font-medium">Project Completed</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section2;
