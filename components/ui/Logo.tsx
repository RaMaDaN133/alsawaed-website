"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBalanceScale } from "react-icons/fa";
import { useT } from "@/components/i18n/LanguageProvider";

export default function Logo({ light = false }: { light?: boolean }) {
  const t = useT();
  const [imgOk, setImgOk] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  // Catch images that already failed to load before hydration attached onError.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setImgOk(false);
  }, []);

  return (
    <Link href="/" className="flex min-w-0 items-center gap-3 group">
      {imgOk ? (
        <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gold-gradient p-1.5 shadow-gold transition-transform group-hover:scale-105">
          {/* الشعار من public/logo.png — استبدل الملف لتغيير اللوجو */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src="/logo.png"
            alt={t.brand.name}
            className="h-full w-full object-contain"
            onError={() => setImgOk(false)}
          />
        </span>
      ) : (
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-navy-900 shadow-gold transition-transform group-hover:scale-105">
          <FaBalanceScale className="text-xl" />
        </span>
      )}
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`font-heading text-lg font-extrabold truncate ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {t.brand.name}
        </span>
        <span className="truncate text-[11px] font-medium text-gold tracking-wide">
          {t.brand.tagline}
        </span>
      </span>
    </Link>
  );
}
