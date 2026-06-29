"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { stagger } from "@/lib/motion";
import { useT } from "@/components/i18n/LanguageProvider";

export default function TeamSection() {
  const t = useT();
  const team = t.team.members;
  return (
    <section className="section-padding bg-navy-50/40">
      <div className="container-section">
        <SectionHeading
          eyebrow={t.team.eyebrow}
          title={t.team.title}
          subtitle={t.team.subtitle}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.slice(0, 6).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/team" className="btn-navy">
            {t.common.viewFullTeam}
            <FaArrowLeft />
          </Link>
        </div>
      </div>
    </section>
  );
}
