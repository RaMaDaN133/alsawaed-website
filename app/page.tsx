import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <StatsSection />
      <TeamSection />
      <FAQ />
      <CTA />
      <ContactSection />
    </>
  );
}
