"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/i18n/LanguageProvider";

export default function WhyUs() {
  const t = useT();
  const features = t.whyUs.items;
  return (
    <section className="section-padding relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-section relative">
        <SectionHeading
          eyebrow={t.whyUs.eyebrow}
          title={t.whyUs.title}
          subtitle={t.whyUs.subtitle}
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:bg-white/[0.07]"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-2xl text-navy-900 shadow-gold transition-transform group-hover:scale-110">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-6 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
