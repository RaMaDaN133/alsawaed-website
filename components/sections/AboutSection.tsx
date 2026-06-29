"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaGem, FaArrowLeft } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/i18n/LanguageProvider";

const pillarIcons = [FaBullseye, FaEye, FaGem];

export default function AboutSection() {
  const t = useT();
  const pillars = t.about.pillars.map((p, i) => ({
    ...p,
    icon: pillarIcons[i] ?? FaGem,
  }));
  return (
    <section className="section-padding bg-navy-50/40">
      <div className="container-section">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-lg leading-relaxed text-navy-600">
              <span className="font-bold text-navy-900">{t.about.p1Lead}</span>{" "}
              {t.about.p1}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              {t.about.p2}
            </p>
            <Link href="/about" className="btn-navy mt-8">
              {t.common.learnMore}
              <FaArrowLeft />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="card group flex gap-5 hover:-translate-y-1 hover:shadow-gold"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-xl text-gold transition-colors group-hover:bg-gold group-hover:text-navy-900">
                  <p.icon />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-navy-500">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
