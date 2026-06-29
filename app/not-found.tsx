import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-navy-900 px-4 text-center">
      <div>
        <p className="font-heading text-8xl font-extrabold text-gold md:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
          الصفحة غير موجودة
        </h1>
        <p className="mx-auto mt-4 max-w-md text-navy-200">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة إلى
          الصفحة الرئيسية.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-gold">
            <FaHome />
            الصفحة الرئيسية
          </Link>
          <Link href="/contact" className="btn-outline">
            تواصل معنا
            <FaArrowLeft />
          </Link>
        </div>
      </div>
    </section>
  );
}
