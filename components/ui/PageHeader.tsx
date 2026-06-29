import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

interface Crumb {
  label: string;
  href?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [],
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-section relative text-center">
        <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="gold-line mx-auto mt-5" />
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">
            {subtitle}
          </p>
        )}

        <nav className="mt-7 flex items-center justify-center gap-2 text-sm">
          <Link href="/" className="text-navy-300 transition-colors hover:text-gold">
            الرئيسية
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <FaChevronLeft className="text-[10px] text-gold" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-navy-300 transition-colors hover:text-gold"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
