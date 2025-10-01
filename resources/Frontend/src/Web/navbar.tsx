import {IoIosFlash} from "react-icons/io";
import {FaBars, FaHeart, FaSearch, FaShoppingCart, FaTimes, FaUser} from "react-icons/fa";
import {useState} from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-white/90 backdrop-blur-lg border-b border-orange-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                            <IoIosFlash className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                eShop
                            </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#products" className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                            Products
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#categories" className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                            Categories
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#deals" className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                            Deals
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-4 pr-12 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-300"
                            />
                            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4" />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-110">
                            <FaHeart className="h-5 w-5" />
                        </button>
                        <button className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-110 relative">
                            <FaShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-sm shadow-orange-300">
                                    3
                                </span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-all duration-300 group">
                            <div className="p-2 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors border border-orange-100">
                                <FaUser className="h-4 w-4" />
                            </div>
                            <span className="font-medium">Login</span>
                        </button>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button className="text-gray-600 p-2 rounded-xl bg-orange-50 border border-orange-100">
                            <FaShoppingCart className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 p-2 rounded-xl bg-orange-50 border border-orange-100"
                        >
                            {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-orange-100">
                    <div className="px-4 py-4 space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-4 pr-12 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 bg-white/70"
                            />
                            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4" />
                        </div>
                        <div className="space-y-2">
                            <a href="#home" className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-300 border border-transparent hover:border-orange-100">Home</a>
                            <a href="#products" className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-300 border border-transparent hover:border-orange-100">Products</a>
                            <a href="#categories" className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-300 border border-transparent hover:border-orange-100">Categories</a>
                            <a href="#deals" className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-300 border border-transparent hover:border-orange-100">Deals</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
