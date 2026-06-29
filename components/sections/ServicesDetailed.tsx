"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import Icon from "@/components/ui/Icon";
import { services } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export default function ServicesDetailed() {
  return (
    <section className="section-padding bg-white">
      <div className="container-section space-y-16">
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            id={service.slug}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className={`grid items-center gap-10 scroll-mt-28 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Visual */}
            <div className="relative">
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-navy-900">
                <Icon
                  name={service.icon}
                  className="text-8xl text-gold/80"
                />
                <span className="absolute right-6 top-6 font-heading text-7xl font-extrabold text-white/5">
                  0{i + 1}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="eyebrow">خدمة قانونية</span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900">
                {service.title}
              </h2>
              <div className="gold-line mt-4" />
              <p className="mt-5 text-lg leading-relaxed text-navy-600">
                {service.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-navy-700">
                    <FaCheckCircle className="mt-1 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-navy mt-8">
                اطلب هذه الخدمة
                <FaArrowLeft />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
