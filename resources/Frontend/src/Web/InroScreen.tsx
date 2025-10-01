import Navbar from "./navbar.tsx";
import SliderSection from "./SliderSection.tsx";
import Products from "./Products.tsx";

function IntroScreen() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <SliderSection/>
            <Products/>
        </div>
    );
}

export default IntroScreen;
