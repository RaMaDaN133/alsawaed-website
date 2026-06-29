"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaRegCommentDots, FaCheckCircle } from "react-icons/fa";
import { useT } from "@/components/i18n/LanguageProvider";

export default function Hero() {
  const t = useT();
  const highlights = t.hero.highlights;
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-hero-pattern bg-cover bg-center">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-section relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold"
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl text-balance"
          >
            {t.hero.titleLead}{" "}
            <span className="text-gold">{t.hero.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-gold">
              <FaPhoneAlt className="text-sm" />
              {t.common.bookConsultation}
            </Link>
            <Link href="/contact" className="btn-outline">
              <FaRegCommentDots />
              {t.common.contactUs}
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-navy-100">
                <FaCheckCircle className="text-gold" />
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold/60 p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
