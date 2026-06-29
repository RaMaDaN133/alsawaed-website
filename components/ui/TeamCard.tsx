"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TeamMember } from "@/lib/types";
import { fadeUp } from "@/lib/motion";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group overflow-hidden rounded-2xl bg-white shadow-card border border-navy-100/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold"
    >
      {/* Image placeholder — استبدل member.image في lib/data.ts بسهولة */}
      <div className="relative aspect-square overflow-hidden bg-navy-900">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/10 to-transparent" />

        {/* Socials */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0">
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              aria-label="لينكدإن"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-900 transition-colors hover:bg-gold"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          )}
          {member.socials?.twitter && (
            <a
              href={member.socials.twitter}
              aria-label="تويتر"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-900 transition-colors hover:bg-gold"
            >
              <FaTwitter className="text-sm" />
            </a>
          )}
          {member.socials?.email && (
            <a
              href={`mailto:${member.socials.email}`}
              aria-label="البريد الإلكتروني"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-900 transition-colors hover:bg-gold"
            >
              <FaEnvelope className="text-sm" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-gold">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-navy-500">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}
