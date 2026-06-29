import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import TeamGrid from "@/components/sections/TeamGrid";
import StatsSection from "@/components/sections/StatsSection";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "فريق العمل",
  description:
    "تعرّف على فريق مكتب السواعد من المحامين والمستشارين القانونيين المتخصصين في مختلف المجالات.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="فريق العمل"
        subtitle="نخبة من المحامين والمستشارين القانونيين المتخصصين، يضعون خبرتهم وكفاءتهم في خدمتكم."
        breadcrumbs={[{ label: "فريق العمل" }]}
      />
      <TeamGrid />
      <StatsSection />
      <CTA />
    </>
  );
}
