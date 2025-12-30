import Business from "@/components/Business";
import FastService from "@/components/FastService";
import Feature from "@/components/Feature";
import { HeroSection } from "@/components/modules/Home/HeroSection";
import Solution from "@/components/Solution";
import WhyChooseUs from "@/components/WhyChooseUs";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <Feature/>
            <Solution/>
            <WhyChooseUs/>
            <Business/>
            <FastService/>
        </div>
    );
};

export default HomePage;