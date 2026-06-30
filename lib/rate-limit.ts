/**
 * محدّد معدّل بسيط في الذاكرة (بدون قاعدة بيانات).
 * ملاحظة: الحالة لكل نسخة خادم — مناسب للحماية الأساسية على خادم واحد.
 * لبيئات serverless متعددة النسخ يُفضّل لاحقًا حل مشترك (مثل Upstash Redis).
 */
const hits = new Map<string, number[]>();

interface RateLimitResult {
  limited: boolean;
  remaining: number;
  retryAfterSec: number;
}

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((ts) => now - ts < windowMs);

  if (recent.length >= limit) {
    const retryAfterSec = Math.ceil((windowMs - (now - recent[0])) / 1000);
    hits.set(key, recent);
    return { limited: true, remaining: 0, retryAfterSec };
  }

  recent.push(now);
  hits.set(key, recent);

  // تنظيف دوري بسيط لتفادي نمو الذاكرة.
  if (hits.size > 5000) {
    for (const [k, arr] of hits) {
      const live = arr.filter((ts) => now - ts < windowMs);
      if (live.length === 0) hits.delete(k);
      else hits.set(k, live);
    }
  }

  return { limited: false, remaining: limit - recent.length, retryAfterSec: 0 };
}
