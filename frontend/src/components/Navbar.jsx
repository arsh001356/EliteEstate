import { React, useContext, useState } from 'react';
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { BsBuildingsFill, BsBuildingFillAdd } from "react-icons/bs";
import { MdContacts, MdLogin } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthModalContext } from '../context/AuthModalProvider';

function Navbar() {
    const { setIsLoginFormOpen } = useContext(AuthModalContext);
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = localStorage.getItem('user');

    const handleOnLoginClick = () => {
        setIsLoginFormOpen(true);
        setIsMenuOpen(false);
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
        setIsMenuOpen(false);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { path: "/", name: "Home", icon: <FaHome /> },
        { path: "/properties", name: "Properties", icon: <BsBuildingsFill /> },
        { path: "/about", name: "About Us", icon: <MdContacts /> },
        { path: "/addproperty", name: "Add Property", icon: <BsBuildingFillAdd /> },
    ];

    return (
        <div className='w-full border-b-2 border-green-500'>
            {/* Top Bar */}
            <div className='flex justify-between items-center h-20 px-4 sm:px-6'>
                {/* Logo */}
                <div className='text-2xl font-bold italic'>
                    <h1 className='text-gray-700'>elite<span className='text-green-500'>Estate</span></h1>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex bg-gray-100 h-10 justify-center items-center w-[35rem] rounded-full'>
                    <div className='flex space-x-5 font-semibold'>
                        {navItems.map((e) => (
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

                {/* Desktop Auth Button */}
                <div className='hidden md:block'>
                    {user ? (
                        <div className='bg-red-500 px-5 py-1 cursor-pointer rounded-full flex justify-center items-center hover:bg-red-600' onClick={handleLogout}>
                            <span className='font-semibold text-white mx-1'>Logout</span>
                        </div>
                    ) : (
                        <div className='bg-green-500 px-5 py-1 cursor-pointer rounded-full flex justify-center items-center hover:bg-green-600' onClick={handleOnLoginClick}>
                            <MdLogin className='text-white' />
                            <span className='font-semibold text-white mx-1'>Login</span>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden text-gray-700 text-2xl'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className='md:hidden bg-white py-4 px-6 border-t border-gray-200'>
                    <div className='flex flex-col space-y-4'>
                        {navItems.map((e) => (
                            <Link
                                key={e.path}
                                to={e.path}
                                className={`flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${location.pathname === e.path
                                    ? "bg-green-500 text-white"
                                    : "text-gray-700 hover:bg-green-100"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className='mr-3 text-xl'>{e.icon}</div>
                                <div className='font-medium'>{e.name}</div>
                            </Link>
                        ))}

                        {/* Mobile Auth Button */}
                        <div className='pt-4 border-t border-gray-200'>
                            {user ? (
                                <div
                                    className='bg-red-500 w-full text-center py-2 cursor-pointer rounded-lg flex justify-center items-center hover:bg-red-600'
                                    onClick={handleLogout}
                                >
                                    <span className='font-semibold text-white'>Logout</span>
                                </div>
                            ) : (
                                <div
                                    className='bg-green-500 w-full text-center py-2 cursor-pointer rounded-lg flex justify-center items-center hover:bg-green-600'
                                    onClick={handleOnLoginClick}
                                >
                                    <MdLogin className='text-white mr-2' />
                                    <span className='font-semibold text-white'>Login</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
