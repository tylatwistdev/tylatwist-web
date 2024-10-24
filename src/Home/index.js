
import ServicesSection from "../components/ServicesSection"
import AboutSection from "./components/AboutSection"
import BannerSlider from "./components/BannerSlider"
import FaqSection from "./components/FaqSection"
import TestimonialsSection from "./components/TestimonialsSection"

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            <FaqSection />
        </div>
    )
}

export default Home
