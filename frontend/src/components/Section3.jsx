import React from 'react'

function Section3() {
    return (

        <div className='w-full h-[500px] flex items-center my-5'>
            <div className='absolute  w-1/2 h-[500px] flex'>
                <div className='flex flex-col'>
                    <div className=" w-60 h-72 rounded-3xl ml-16 bg-[url('/pexels-pixabay-462235.jpg')] bg-cover bg-center bg-no-repeat"></div>
                    <div className=" rounded-3xl w-80 h-64 mt-5 ml-7 bg-[url('/pexels-maksgelatin-4352247.jpg')] bg-cover bg-center bg-no-repeat"></div>
                </div>
                <div className="w-64 h-[400px] rounded-3xl ml-8 my-14 bg-[url('/pexels-christa-grover-977018-2121121.jpg')] bg-cover bg-center bg-no-repeat"></div>
            </div>
            <div className='w-full h-[90%] bg-black rounded-3xl flex justify-end ' >
                <div className='w-1/2 flex h-full justify-center items-center italic'>
                    <p className='text-white text-4xl font-bold '>Turn your dream <span className='text-blue-600'>house</span> <br />into reality.</p>
                </div>

            </div>

        </div>

    )
}

export default Section3