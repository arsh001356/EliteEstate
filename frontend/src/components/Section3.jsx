import React from 'react';

function Section3() {
    return (
        <div className='w-full h-[250px] sm:h-[400px] lg:h-[500px] flex items-center my-5'>
            {/* Image Grid - Hidden on mobile, shown on tablet+ */}
            <div className='hidden sm:absolute sm:flex sm:w-1/2 sm:h-[400px] lg:h-[500px]'>
                <div className='flex flex-col'>
                    <div className="w-40 h-48 md:w-60 md:h-72 rounded-3xl md:ml-16 bg-[url('/pexels-pixabay-462235.jpg')] bg-cover bg-center bg-no-repeat"></div>
                    <div className="w-52 h-40 md:w-80 md:h-64 rounded-3xl mt-4 md:mt-5 md:ml-7 bg-[url('/pexels-maksgelatin-4352247.jpg')] bg-cover bg-center bg-no-repeat"></div>
                </div>
                <div className="w-44 h-56 md:w-64 md:h-[400px] rounded-3xl md:ml-8 my-8 md:my-14 bg-[url('/pexels-christa-grover-977018-2121121.jpg')] bg-cover bg-center bg-no-repeat"></div>
            </div>

            {/* Black Content Section - Full width on mobile */}
            <div className='w-full h-[250px] sm:h-[90%] bg-black rounded-2xl sm:rounded-3xl flex justify-center sm:justify-end'>
                <div className='w-full sm:w-1/2 flex h-full justify-center items-center italic px-4 sm:px-0'>
                    <p className='text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left'>
                        Turn your dream <span className='text-blue-600'>house</span> <br />into reality.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section3;
