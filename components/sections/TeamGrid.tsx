"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/ui/TeamCard";
import { stagger } from "@/lib/motion";
import { useT } from "@/components/i18n/LanguageProvider";

export default function TeamGrid() {
  const team = useT().team.members;
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
