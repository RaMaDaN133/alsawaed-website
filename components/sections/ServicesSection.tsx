"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/i18n/LanguageProvider";

export default function ServicesSection() {
  const t = useT();
  const services = t.services.items;
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link
                href="/services"
                className="card group block h-full hover:-translate-y-2 hover:border-gold/60 hover:shadow-gold"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-2xl text-navy-900 transition-all duration-300 group-hover:bg-gold group-hover:text-navy-900 group-hover:scale-110">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy-900 transition-colors group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold/80 transition-all group-hover:gap-3 group-hover:text-gold">
                  {t.common.readMore}
                  <FaArrowLeft className="text-xs" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-gold">
            {t.common.allServices}
            <FaArrowLeft />
          </Link>
        </div>
      </div>
    </section>
  );
}
