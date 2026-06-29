import { FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/data";

export default function MapPlaceholder() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-section">
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-navy-100 shadow-card">
          {/*
            خريطة Google Maps — Placeholder
            استبدل هذا العنصر بـ <iframe> الخاص بموقعك من Google Maps:
            <iframe src="https://www.google.com/maps/embed?..." className="h-full w-full" />
          */}
          <iframe
            title="موقع المكتب على الخريطة"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d434.6097486148519!2d51.4486655!3d25.2559303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db8468c4c907%3A0x6501745f95b86c81!2z2KfZhNiz2YjYp9i52K8g2YTZhNmF2K3Yp9mF2KfYqSDZiNin2YTYp9iz2KrYtNin2LHYp9iqINin2YTZgtin2YbZiNmG2YrYqSDZiNin2YTYqtit2YPZitmF!5e1!3m2!1sen!2sqa!4v1782295506201!5m2!1sen!2sqa"
            className="h-full w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-3 rounded-xl bg-navy-900/95 px-5 py-3 text-white shadow-lg">
            <FaMapMarkerAlt className="text-gold" />
            <span className="text-sm font-medium">{siteConfig.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
