import Image from "next/image";
import HeroSection from "@/component/home/HeroSection";
import ServiceSection from "@/component/home/Service";
import Navbar from "@/component/home/navbar";
import BuildSection from "@/component/home/build";
import FeaturedSection from "@/component/home/featured";
import TestimonialSection from "@/component/home/testimonial";
import FooterSection from "@/component/home/footer";


export default function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <HeroSection />
            <ServiceSection />
            <BuildSection />
            <FeaturedSection />
            <TestimonialSection />
            <FooterSection />

        </div>
    );
}
