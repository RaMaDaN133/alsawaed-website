import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import WhyUs from "@/components/sections/WhyUs";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرّف على مكتب السواعد للمحاماة والاستشارات القانونية والتحكيم، رؤيتنا ورسالتنا وقيمنا وفريقنا المتخصص.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="من نحن"
        subtitle="مكتب قانوني رائد يجمع بين الخبرة العميقة والالتزام الراسخ بحماية حقوق موكليه."
        breadcrumbs={[{ label: "من نحن" }]}
      />
      <AboutSection />
      <StatsSection />
      <WhyUs />
      <TeamSection />
      <CTA />
    </>
  );
}
