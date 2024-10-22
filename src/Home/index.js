import AboutSection from "./components/AboutSection"
import BannerSlider from "./components/BannerSlider"
import Services from "./components/Services"

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <Services />
            <AboutSection />
            Empowering people with the knowledge, technology, and skills necessary for a better future.
        </div>
    )
}

export default Home
