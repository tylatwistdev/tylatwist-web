import AboutSection from "./components/AboutSection"
import BannerSlider from "./components/BannerSlider"
import ServicesSection from "./components/ServicesSection"
import TestimonialsSection from "./components/TestimonialsSection"

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
        </div>
    )
}

export default Home
