import { useState } from 'react';
import { FaChevronRight, FaMobile, FaTshirt, FaHome, FaCouch, FaGamepad, FaHeadphones, FaWrench, FaCar } from 'react-icons/fa';

function Category() {
    const [activeCategory, setActiveCategory] = useState('electronics');

    const categories = [
        {
            id: 'electronics',
            name: 'Electronics',
            icon: <FaMobile className="h-6 w-6" />,
            productCount: 1247,
            image: '/headset.png',
            subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Cameras', 'Accessories'],
            featured: true
        },
        {
            id: 'fashion',
            name: 'Fashion',
            icon: <FaTshirt className="h-6 w-6" />,
            productCount: 892,
            image: "/headset.png",
            subcategories: ["Men's Wear", "Women's Wear", 'Kids Fashion', 'Shoes', 'Accessories'],
            featured: true
        },
        {
            id: 'home',
            name: 'Home & Living',
            icon: <FaHome className="h-6 w-6" />,
            productCount: 567,
            image: "/smartwatch.png",
            subcategories: ['Furniture', 'Kitchen', 'Decor', 'Lighting', 'Garden'],
            featured: false
        },
        {
            id: 'appliances',
            name: 'Appliances',
            icon: <FaCouch className="h-6 w-6" />,
            productCount: 334,
            image: 'https://cdn-icons-png.flaticon.com/512/2997/2997898.png',
            subcategories: ['Kitchen', 'Home', 'Personal Care', 'Air Conditioners', 'Refrigerators'],
            featured: true
        },
        {
            id: 'sports',
            name: 'Sports & Outdoors',
            icon: <FaGamepad className="h-6 w-6" />,
            productCount: 445,
            image: 'https://cdn-icons-png.flaticon.com/512/857/857418.png',
            subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Water Sports', 'Cycling'],
            featured: false
        },
        {
            id: 'audio',
            name: 'Audio & Video',
            icon: <FaHeadphones className="h-6 w-6" />,
            productCount: 278,
            image: 'https://cdn-icons-png.flaticon.com/512/2972/2972425.png',
            subcategories: ['Headphones', 'Speakers', 'Home Theater', 'Microphones', 'Accessories'],
            featured: true
        },
        {
            id: 'tools',
            name: 'Tools & DIY',
            icon: <FaWrench className="h-6 w-6" />,
            productCount: 189,
            image: 'https://cdn-icons-png.flaticon.com/512/1995/1995542.png',
            subcategories: ['Power Tools', 'Hand Tools', 'Painting', 'Electrical', 'Plumbing'],
            featured: false
        },
        {
            id: 'automotive',
            name: 'Automotive',
            icon: <FaCar className="h-6 w-6" />,
            productCount: 312,
            image: 'https://cdn-icons-png.flaticon.com/512/3079/3079017.png',
            subcategories: ['Car Care', 'Accessories', 'Tools', 'Electronics', 'Interior'],
            featured: true
        }
    ];

    const categoryProducts : any = {
        electronics: [
            { id: 1, name: 'iPhone 15 Pro', price: 999,   image: "/headset.png", rating: 4.8 },
            { id: 2, name: 'Samsung Galaxy S24', price: 849,   image: "/laptop.png", rating: 4.6 },
            { id: 3, name: 'MacBook Air M2', price: 1199, image: "/laptop.png", rating: 4.9 },
            { id: 4, name: 'iPad Pro', price: 799, image:  "/headset.png", rating: 4.7 }
        ],
        fashion: [
            { id: 1, name: 'Designer T-Shirt', price: 29, image: 'https://cdn-icons-png.flaticon.com/512/1577/1577180.png', rating: 4.3 },
            { id: 2, name: 'Jeans Classic', price: 49, image: 'https://cdn-icons-png.flaticon.com/512/1577/1577180.png', rating: 4.2 },
            { id: 3, name: 'Running Shoes', price: 89, image: 'https://cdn-icons-png.flaticon.com/512/2589/2589906.png', rating: 4.5 },
            { id: 4, name: 'Winter Jacket', price: 129, image: 'https://cdn-icons-png.flaticon.com/512/1577/1577180.png', rating: 4.4 }
        ],
        home: [
            { id: 1, name: 'Modern Sofa', price: 599, image: 'https://cdn-icons-png.flaticon.com/512/3176/3176286.png', rating: 4.6 },
            { id: 2, name: 'Dining Table', price: 299, image: 'https://cdn-icons-png.flaticon.com/512/3176/3176286.png', rating: 4.4 },
            { id: 3, name: 'Bed King Size', price: 459, image: 'https://cdn-icons-png.flaticon.com/512/3176/3176286.png', rating: 4.7 },
            { id: 4, name: 'Bookshelf', price: 149, image: 'https://cdn-icons-png.flaticon.com/512/3176/3176286.png', rating: 4.3 }
        ]
    };

    const currentCategory = categories.find(cat => cat.id === activeCategory);
    const currentProducts = categoryProducts[activeCategory] || [];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">All Categories</h3>
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 group ${
                                        activeCategory === category.id
                                            ? 'bg-orange-50 border border-orange-200 shadow-sm'
                                            : 'hover:bg-gray-50 border border-transparent'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg ${
                                            activeCategory === category.id
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-500'
                                        } transition-colors duration-200`}>
                                            {category.icon}
                                        </div>
                                        <div className="text-left">
                                            <span className={`font-medium block ${
                                                activeCategory === category.id ? 'text-orange-600' : 'text-gray-700'
                                            }`}>
                                                {category.name}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {category.productCount} products
                                            </span>
                                        </div>
                                    </div>
                                    <FaChevronRight className={`h-4 w-4 ${
                                        activeCategory === category.id ? 'text-orange-500' : 'text-gray-400'
                                    }`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                        {currentCategory?.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold">{currentCategory?.name}</h2>
                                </div>
                                <p className="text-orange-100 text-lg">
                                    Explore {currentCategory?.productCount} amazing products
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <img
                                    src={currentCategory?.image}
                                    alt={currentCategory?.name}
                                    className="h-24 w-24 object-contain opacity-90"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular in {currentCategory?.name}</h3>
                        <div className="flex flex-wrap gap-3">
                            {currentCategory?.subcategories.map((subcategory, index) => (
                                <button
                                    key={index}
                                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
                                >
                                    {subcategory}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Featured Products</h3>
                            <button className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center space-x-1">
                                <span>View All</span>
                                <FaChevronRight className="h-3 w-3" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                            {currentProducts.map((product : any) => (
                                <div key={product.id} className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden">
                                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                                        />

                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-amber-600 flex items-center space-x-1">
                                            <span>{product.rating}</span>
                                            <FaChevronRight className="h-3 w-3 text-amber-500" />
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
                                            {product.name}
                                        </h4>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-orange-500">${product.price}</span>
                                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {currentProducts.length === 0 && (
                            <div className="text-center py-12 bg-gray-50 rounded-2xl">
                                <div className="text-gray-400 text-6xl mb-4">📦</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products available</h3>
                                <p className="text-gray-600">Products will be added soon for this category</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
