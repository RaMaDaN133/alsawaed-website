"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/i18n/LanguageProvider";

export default function StatsSection() {
  const stats = useT().stats;
  return (
    <section className="relative bg-gold-gradient py-16">
      <div className="container-section">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-heading text-4xl font-extrabold text-navy-900 sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 font-semibold text-navy-800">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
