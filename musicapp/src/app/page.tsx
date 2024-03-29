import FeaturedCourse from "@/components/featuredCourses";
import HeroSection from "@/components/heroSection";
import Testmonial from "@/components/testmonialCard";
import WhyChooseUs from "@/components/whychooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Chai</h1> */}
      <HeroSection/>
      <FeaturedCourse/>
      <WhyChooseUs/>
      <Testmonial/>
    </main>
  );
}
