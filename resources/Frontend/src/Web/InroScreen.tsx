import Navbar from "./navbar.tsx";
import SliderSection from "./SliderSection.tsx";
import Products from "./Products.tsx";
import Category from "./Category.tsx";

function IntroScreen() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <SliderSection/>
            <Products/>
            <Category/>
        </div>
    );
}

export default IntroScreen;
