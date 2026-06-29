"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowLeft } from "react-icons/fa";
import { useT } from "@/components/i18n/LanguageProvider";

export default function CTA() {
  const t = useT();
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-center md:px-16"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl text-balance">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-200">
              {t.cta.description}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">
                <FaPhoneAlt className="text-sm" />
                {t.common.bookConsultation}
              </Link>
              <Link href="/services" className="btn-outline">
                {t.common.exploreServices}
                <FaArrowLeft />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
