"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/i18n/LanguageProvider";

export default function ContactSection() {
  const t = useT();
  const info = [
    {
      icon: FaPhoneAlt,
      label: t.contact.labels.call,
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      ltr: true,
    },
    {
      icon: FaEnvelope,
      label: t.contact.labels.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      ltr: true,
    },
    {
      icon: FaMapMarkerAlt,
      label: t.contact.labels.address,
      value: siteConfig.address,
    },
    {
      icon: FaClock,
      label: t.contact.labels.hours,
      value: siteConfig.workingHours,
    },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5 lg:col-span-2"
          >
            {info.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="card flex items-start gap-4 hover:-translate-y-1 hover:shadow-gold"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
                  <item.icon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      dir={item.ltr ? "ltr" : undefined}
                      className={`mt-1 block font-bold text-navy-900 transition-colors hover:text-gold ${
                        item.ltr ? "text-right" : ""
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-bold text-navy-900 leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
