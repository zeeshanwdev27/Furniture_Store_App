import "./App.css";
import MainNavbar from "./components/Navbar/MainNavbar"
import HeroSection from "./pages/Home/HeroSection";
import SpecialOffers from "./pages/Home/SpecialOffers";
import FeatureList from "./pages/Home/FeatureList";
import ServiceSection from "./pages/Home/ServiceSection";
import PopularProducts from "./pages/Home/PopularProducts";
import CutomerFeedback from "./pages/Home/CutomerFeedback";

function App() {
  return (
    <>
    <div>
    <MainNavbar/>
    <HeroSection/>
    <SpecialOffers/>
    <FeatureList/>
    <ServiceSection/>
    <PopularProducts/>
    <CutomerFeedback/>
    </div>
    </>
  );
}

export default App;
