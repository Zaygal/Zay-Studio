import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import WhatWeBuild from "@/components/WhatWeBuild";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import FeaturedProject from "@/components/FeaturedProject";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <WhatWeBuild />
      <ProblemsWeSolve />
      <FeaturedProject />
      <About />
      <WhyUs />
      <TechStack />
      <CTA />
    </main>
  );
}
