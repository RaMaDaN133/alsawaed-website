import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "الخدمات",
  description:
    "خدمات قانونية متكاملة: القضايا المدنية والتجارية والجنائية والأحوال الشخصية، التحكيم، التنفيذ، العقود، والاستشارات القانونية.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="خدماتنا القانونية"
        subtitle="باقة شاملة من الخدمات القانونية المصممة لتلبية مختلف احتياجاتكم بأعلى معايير الجودة والاحترافية."
        breadcrumbs={[{ label: "الخدمات" }]}
      />
      <ServicesDetailed />
      <WhyUs />
      <CTA />
    </>
  );
}
