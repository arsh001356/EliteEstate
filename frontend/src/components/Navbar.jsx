import { React, useContext } from 'react';
import { FaHome } from "react-icons/fa";
import { BsBuildingsFill, BsBuildingFillAdd } from "react-icons/bs";
import { MdContacts, MdLogin } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthModalContext } from '../context/AuthModalProvider';


function Navbar() {
    const { setIsLoginFormOpen } = useContext(AuthModalContext)
    const location = useLocation();
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    const handleOnLoginClick = () => {
        setIsLoginFormOpen(true)
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (

        <div className='w-full flex h-20 justify-between items-center border-b-2 border-green-500'>

            <div className='mx-10 text-2xl font-bold italic'>
                <h1 className='text-gray-700'>elite<span className='text-green-500'>Estate</span></h1>
            </div>

            <div className='bg-gray-100 h-10 flex justify-center items-center w-[35rem] rounded-full'>
                <div className='flex space-x-5 font-semibold'>
                    {[
                        { path: "/", name: "Home", icon: <FaHome /> },
                        { path: "/properties", name: "Properties", icon: <BsBuildingsFill /> },
                        { path: "/about", name: "About Us", icon: <MdContacts /> },
                        { path: "/addproperty", name: "Add Property", icon: <BsBuildingFillAdd /> },
                    ].map((e) => (
                        <Link
                            key={e.path}
                            to={e.path}
                            className={`flex items-center px-3 py-1 rounded-full transition-all duration-300 ${location.pathname === e.path
                                ? "bg-green-500 text-white"
                                : "text-gray-700 hover:bg-green-200"
                                }`}
                        >
                            <div className='mx-1'>{e.icon}</div>
                            <div>{e.name}</div>
                        </Link>
                    ))}
                </div>
            </div>

            {user ? (
                <div className='mx-10 bg-red-500 px-5 py-1 cursor-pointer rounded-full flex justify-center items-center hover:bg-red-600' onClick={handleLogout}>
                    <span className='font-semibold text-white mx-1'>Logout</span>
                </div>
            ) : (
                <div className='mx-10 bg-green-500 px-5 py-1 cursor-pointer rounded-full flex justify-center items-center hover:bg-green-600' onClick={handleOnLoginClick}>
                    <MdLogin className='text-white' />
                    <span className='font-semibold text-white mx-1'>Login</span>
                </div>
            )}

        </div>
    );
}

export default Navbar;
