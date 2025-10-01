import Navbar from "./navbar.tsx";
import SliderSection from "./SliderSection.tsx";

function IntroScreen() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <SliderSection/>
        </div>
    );
}

export default IntroScreen;
