//https://github.com/hiteshchoudhary/Music-school-hindi/commits/main/

import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <div className="text-white text-center">MUSICNEST</div>
     <HeroSection />
     <FeaturedCourses />
      </main>
  );
}
