import { FaBalanceScale } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-900">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-gold-gradient text-2xl text-navy-900">
          <FaBalanceScale />
        </span>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[float_1.2s_ease-in-out_infinite] bg-gold" />
        </div>
        <p className="text-sm text-navy-200">جارٍ التحميل...</p>
      </div>
    </div>
  );
}
