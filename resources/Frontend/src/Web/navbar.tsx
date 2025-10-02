import { IoIosRocket } from "react-icons/io";
import {  FaShoppingBag, FaUser, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY > 10);
        });
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-orange-100/50 border-b border-orange-50'
                : 'bg-white/80 backdrop-blur-lg border-b border-orange-50/80'
        }`}>
            <div className="container mx-auto px-6 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200/60 transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-300/60">
                            <IoIosRocket className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                            eSupport
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-1">
                        {['Home', 'Products', 'Categories', 'Deals', 'About'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 relative group"
                            >
                                <span className="relative z-10">{item}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 rounded-xl transition-all duration-300 group-hover:from-orange-500/5 group-hover:to-amber-500/5"></div>
                                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></div>
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex flex-1 max-w-md mx-6">
                        <div className="relative w-full group">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2.5 bg-white/70 border border-orange-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300/50 focus:border-orange-300 text-gray-700 placeholder-gray-400 transition-all duration-300 group-hover:border-orange-200 group-hover:shadow-lg group-hover:shadow-orange-100/50"
                            />
                            <HiOutlineSparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-500" />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-3">
                        <button className="p-2.5 text-gray-500 hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group">
                            <FaHeart className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="p-2.5 text-gray-500 hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group">
                            <FaShoppingBag className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center shadow-sm shadow-orange-300 font-medium">
                                3
                            </span>
                        </button>

                        <div className="w-px h-6 bg-gray-200 mx-1"></div>

                        <button className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105">
                            Login
                        </button>

                        <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-medium shadow-lg shadow-orange-200 hover:shadow-orange-300/50 transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-amber-700 flex items-center space-x-2 group">
                            <FaUser className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
                            <span>Sign Up</span>
                        </button>
                    </div>

                    <div className="md:hidden flex items-center space-x-2">
                        <button className="p-2.5 text-gray-500 hover:text-orange-500 transition-all duration-300 relative">
                            <FaShoppingBag className="h-4 w-4" />
                            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center shadow-sm shadow-orange-300 font-medium">
                                3
                            </span>
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-300"
                        >
                            {isMenuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-orange-50 animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-6 space-y-4">

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-3 bg-white border border-orange-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300/50 text-gray-700 placeholder-gray-400 transition-all duration-300"
                            />
                            <HiOutlineSparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4" />
                        </div>

                        <div className="space-y-2">
                            {['Home', 'Products', 'Categories', 'Deals', 'About'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-300 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="flex space-x-3 pt-4 border-t border-orange-50">
                            <button
                                className="flex-1 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </button>
                            <button
                                className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium rounded-xl shadow-lg shadow-orange-200 transition-all duration-300 hover:shadow-orange-300/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
