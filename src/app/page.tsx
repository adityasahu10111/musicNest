//https://github.com/hiteshchoudhary/Music-school-hindi/commits/main/


import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcominWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <div className="text-white text-center">MUSICNEST</div>
     <HeroSection />
     <FeaturedCourses />
     <WhyChooseUs />
     <MusicSchoolTestimonials />
   <UpcomingWebinars/>
   <Instructors/>
      </main>
  );
}
