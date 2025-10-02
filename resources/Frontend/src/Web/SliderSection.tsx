import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function SliderSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay] = useState(true);
    const autoPlayRef: any = useRef(null);

    const heroSlides = [
        {
            id: 1,
            title: "Smart Watch Series 7",
            description:
                "Stay connected with the latest smartwatch featuring health monitoring and premium design.",
            price: "$299.99",
            originalPrice: "$374.99",
            image: "/smartwatch.png",
        },
        {
            id: 2,
            title: "Wireless Headphones Pro",
            description:
                "Experience crystal-clear audio with noise cancellation technology.",
            price: "$199.99",
            originalPrice: "$249.99",
            image: "/headset.png",
        },
        {
            id: 3,
            title: "Gaming Laptop Pro",
            description:
                "Dominate the gaming world with superior performance and stunning graphics.",
            price: "$1,299.99",
            originalPrice: "$1,599.99",
            image: "/laptop.png",
        },
    ];

    useEffect(() => {
        if (isAutoPlay) {
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 5000);
        }

        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlay, heroSlides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
        );
    };

    const goToSlide = (index: any) => {
        setCurrentSlide(index);
    };

    return (
        <section
            id="home"
            className="py-8 md:py-16 mt-16 bg-gradient-to-br from-orange-50 via-orange-25 to-orange-50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 border border-orange-400 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-500">
                    <div className="relative">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {heroSlides.map((slide) => (
                                <div
                                    key={slide.id}
                                    className="w-full flex-shrink-0"
                                >
                                    <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-20">
                                        <div className="space-y-6 text-center md:text-left px-4 md:px-6">
                                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                                <span className="text-xs font-semibold text-white uppercase tracking-wide">
                                                    Hot Deal
                                                </span>
                                            </div>

                                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                                {slide.title}
                                            </h1>

                                            <p className="text-orange-100 leading-relaxed max-w-lg text-lg md:text-xl">
                                                {slide.description}
                                            </p>

                                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                                <span className="text-3xl font-bold text-white">
                                                    {slide.price}
                                                </span>
                                                <span className="text-xl text-orange-200 line-through">
                                                    {slide.originalPrice}
                                                </span>
                                                <span className="px-3 py-1 bg-white text-orange-600 text-sm font-medium rounded-lg shadow-lg">
                                                    Save 20%
                                                </span>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                                <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-medium hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group border border-orange-200">
                                                    <FaShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                                    <span className="font-semibold">Add to Cart</span>
                                                </button>
                                                <button className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-medium hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                                    <span className="font-semibold">View Details</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex justify-center px-4 md:px-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/70 rounded-2xl transform rotate-3 scale-105 opacity-60"></div>
                                                <img
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    className="w-full max-w-sm h-48 md:h-72 object-contain relative z-10 transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-orange-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 hover:scale-110 md:left-6"
                        >
                            <FaChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-orange-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 hover:scale-110 md:right-6"
                        >
                            <FaChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? "bg-white w-8 shadow-lg shadow-white/50"
                                        : "bg-orange-300 hover:bg-orange-200"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderSection;
