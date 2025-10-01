import { useState } from 'react';
import { FaSearch,  FaStar, FaShoppingCart } from 'react-icons/fa';

function Products() {
    const [sortBy, setSortBy] = useState('featured');
    const [filterCategory, setFilterCategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');


    const products = [
        {
            id: 1,
            name: "Wireless Earbuds Pro Bluetooth 5.0",
            price: 129.99,
            originalPrice: 179.99,
            rating: 4.5,
            reviewCount: 128,
            image: "https://cdn-icons-png.flaticon.com/512/2972/2972425.png",
            category: "electronics",
            discount: 28,
            isFreeShipping: true
        },
        {
            id: 2,
            name: "Smart Watch Fitness Tracker",
            price: 45.99,
            originalPrice: 89.99,
            rating: 4.2,
            reviewCount: 342,
            image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
            category: "electronics",
            discount: 49,
            isFreeShipping: true
        },
        {
            id: 3,
            name: "USB-C Fast Charger 20W",
            price: 15.99,
            originalPrice: 29.99,
            rating: 4.3,
            reviewCount: 89,
            image: "https://cdn-icons-png.flaticon.com/512/3103/3103445.png",
            category: "electronics",
            discount: 47,
            isFreeShipping: false
        },
        {
            id: 4,
            name: "Wireless Mouse Optical",
            price: 12.99,
            originalPrice: 19.99,
            rating: 4.1,
            reviewCount: 156,
            image: "https://cdn-icons-png.flaticon.com/512/2553/2553786.png",
            category: "electronics",
            discount: 35,
            isFreeShipping: true
        },
        {
            id: 5,
            name: "Phone Case Premium Cover",
            price: 8.99,
            originalPrice: 14.99,
            rating: 4.6,
            reviewCount: 289,
            image: "https://cdn-icons-png.flaticon.com/512/3103/3103445.png",
            category: "accessories",
            discount: 40,
            isFreeShipping: true
        },
        {
            id: 6,
            name: "Laptop Stand Aluminum",
            price: 24.99,
            originalPrice: 39.99,
            rating: 4.4,
            reviewCount: 78,
            image: "https://cdn-icons-png.flaticon.com/512/3176/3176286.png",
            category: "accessories",
            discount: 38,
            isFreeShipping: true
        },
        {
            id: 7,
            name: "Power Bank 10000mAh",
            price: 19.99,
            originalPrice: 34.99,
            rating: 4.5,
            reviewCount: 203,
            image: "https://cdn-icons-png.flaticon.com/512/2972/2972425.png",
            category: "electronics",
            discount: 43,
            isFreeShipping: true
        },
        {
            id: 8,
            name: "Bluetooth Speaker Portable",
            price: 22.99,
            originalPrice: 39.99,
            rating: 4.2,
            reviewCount: 167,
            image: "https://cdn-icons-png.flaticon.com/512/2972/2972425.png",
            category: "electronics",
            discount: 43,
            isFreeShipping: false
        },
        {
            id: 9,
            name: "Gaming Mouse Pad Large",
            price: 6.99,
            originalPrice: 12.99,
            rating: 4.3,
            reviewCount: 89,
            image: "https://cdn-icons-png.flaticon.com/512/702/702814.png",
            category: "accessories",
            discount: 46,
            isFreeShipping: true
        },
        {
            id: 10,
            name: "USB Flash Drive 64GB",
            price: 9.99,
            originalPrice: 16.99,
            rating: 4.4,
            reviewCount: 234,
            image: "https://cdn-icons-png.flaticon.com/512/2972/2972425.png",
            category: "electronics",
            discount: 41,
            isFreeShipping: true
        },
        {
            id: 11,
            name: "Wireless Keyboard Compact",
            price: 28.99,
            originalPrice: 49.99,
            rating: 4.3,
            reviewCount: 156,
            image: "https://cdn-icons-png.flaticon.com/512/702/702814.png",
            category: "electronics",
            discount: 42,
            isFreeShipping: true
        },
        {
            id: 12,
            name: "Phone Holder Car Mount",
            price: 7.99,
            originalPrice: 14.99,
            rating: 4.1,
            reviewCount: 189,
            image: "https://cdn-icons-png.flaticon.com/512/3103/3103445.png",
            category: "accessories",
            discount: 47,
            isFreeShipping: true
        }
    ];

    const filteredProducts = products
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
            const matchesPrice =
                priceRange === 'all' ||
                (priceRange === 'under20' && product.price < 20) ||
                (priceRange === '20-50' && product.price >= 20 && product.price <= 50) ||
                (priceRange === 'over50' && product.price > 50);

            return matchesSearch && matchesCategory && matchesPrice;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'discount':
                    return b.discount - a.discount;
                default:
                    return b.rating - a.rating;
            }
        });

    return (
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex-1 w-full sm:max-w-xs">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 bg-white"
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 bg-white"
                        >
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="accessories">Accessories</option>
                        </select>

                        <select
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 bg-white"
                        >
                            <option value="all">All Prices</option>
                            <option value="under20">Under $20</option>
                            <option value="20-50">$20 - $50</option>
                            <option value="over50">Over $50</option>
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 bg-white"
                        >
                            <option value="featured">Featured</option>
                            <option value="rating">Top Rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="discount">Best Discount</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-orange-300 transition-all duration-200 overflow-hidden">

                        <div className="relative bg-gray-50 p-3">
                            <div className="absolute top-2 left-2">
                                <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">
                                    -{product.discount}%
                                </span>
                            </div>

                            {product.isFreeShipping && (
                                <div className="absolute top-2 right-2">
                                    <span className="bg-green-500 text-white px-1 py-0.5 rounded text-[10px] font-medium">
                                        Free Shipping
                                    </span>
                                </div>
                            )}

                            <div className="flex justify-center items-center h-28">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                                />
                            </div>
                        </div>

                        <div className="p-3">
                            <h3 className="text-xs text-gray-800 mb-1 line-clamp-2 leading-tight min-h-[2rem] group-hover:text-orange-600">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-1">
                                <div className="flex items-center space-x-0.5">
                                    <FaStar className="h-2.5 w-2.5 text-amber-500" />
                                    <span className="text-xs text-gray-700 font-medium">{product.rating}</span>
                                </div>
                                <span className="text-xs text-gray-500">({product.reviewCount})</span>
                            </div>

                            <div className="mb-2">
                                <div className="flex items-center space-x-1">
                                    <span className="text-sm font-bold text-orange-600">${product.price}</span>
                                    <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                                </div>
                            </div>

                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-1.5 rounded flex items-center justify-center space-x-1 transition-colors duration-200">
                                <FaShoppingCart className="h-2.5 w-2.5" />
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-8">
                    <div className="text-gray-400 text-4xl mb-3">🔍</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                    <p className="text-gray-600 text-sm">Try adjusting your search or filters</p>
                </div>
            )}

            {filteredProducts.length > 0 && (
                <div className="flex justify-center mt-8">
                    <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        Load More Products
                    </button>
                </div>
            )}
        </div>
    );
}

export default Products;
