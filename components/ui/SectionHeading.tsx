"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center mx-auto" : "text-right"}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-3 section-title ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      <div
        className={`gold-line mt-5 ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`section-subtitle ${
            light ? "text-navy-100" : "text-navy-500"
          } ${align === "right" ? "mr-0 ml-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
