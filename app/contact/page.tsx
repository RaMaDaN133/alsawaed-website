import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/ContactSection";
import MapPlaceholder from "@/components/sections/MapPlaceholder";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع مكتب السواعد للمحاماة. احجز استشارتك القانونية عبر نموذج التواصل أو الهاتف أو البريد الإلكتروني.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="تواصل معنا"
        subtitle="نحن هنا لمساعدتك. تواصل معنا واحجز استشارتك القانونية، وسنرد عليك في أقرب وقت ممكن."
        breadcrumbs={[{ label: "تواصل معنا" }]}
      />
      <ContactSection />
      <MapPlaceholder />
    </>
  );
}
