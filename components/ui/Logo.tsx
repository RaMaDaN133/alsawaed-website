"use client";

import Link from "next/link";
import { FaBalanceScale } from "react-icons/fa";
import { useT } from "@/components/i18n/LanguageProvider";

export default function Logo({ light = false }: { light?: boolean }) {
  const t = useT();
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-navy-900 shadow-gold transition-transform group-hover:scale-105">
        <FaBalanceScale className="text-xl" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-heading text-lg font-extrabold ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {t.brand.name}
        </span>
        <span className="text-[11px] font-medium text-gold tracking-wide">
          {t.brand.tagline}
        </span>
      </span>
    </Link>
  );
}
