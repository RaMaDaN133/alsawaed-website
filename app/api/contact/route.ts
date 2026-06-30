import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

// الحد الأدنى للوقت (مللي ثانية) بين تحميل النموذج وإرساله — أقل منه يُعتبر بوت.
const MIN_FILL_TIME_MS = 1500;

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  // حقول مكافحة السبام (لا تظهر للمستخدم):
  company?: string; // honeypot — يجب أن يبقى فارغًا
  renderedAt?: number; // طابع زمني للحظة عرض النموذج
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Server-side validation — mirrors the client rules and is the source of truth. */
function validate(data: Partial<ContactPayload>): string[] {
  const invalid: string[] = [];
  const name = data.name?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const subject = data.subject?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (name.length < 3) invalid.push("name");
  if (!/^[+\d\s()-]{8,}$/.test(phone)) invalid.push("phone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) invalid.push("email");
  if (subject.length < 1) invalid.push("subject");
  if (message.length < 10) invalid.push("message");

  return invalid;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: ContactPayload): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;background:#f4f6fb;font-weight:700;color:#0F172A;white-space:nowrap;">${label}</td>
      <td style="padding:10px 16px;color:#243558;">${value}</td>
    </tr>`;

  return `
  <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;background:#0F172A;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <div style="background:#0F172A;padding:20px 24px;border-bottom:3px solid #C9A227;">
        <h1 style="margin:0;color:#C9A227;font-size:18px;">رسالة جديدة من نموذج التواصل</h1>
        <p style="margin:6px 0 0;color:#c5cee2;font-size:13px;">مكتب السواعد للمحاماة والاستشارات القانونية والتحكيم</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("الاسم", escapeHtml(data.name))}
        ${row("الهاتف", escapeHtml(data.phone))}
        ${row("البريد الإلكتروني", escapeHtml(data.email))}
        ${row("الموضوع", escapeHtml(data.subject))}
      </table>
      <div style="padding:16px 24px;">
        <p style="margin:0 0 8px;font-weight:700;color:#0F172A;">نص الرسالة:</p>
        <p style="margin:0;color:#243558;line-height:1.8;white-space:pre-wrap;">${escapeHtml(
          data.message
        )}</p>
      </div>
    </div>
  </div>`;
}

function buildEmailText(data: ContactPayload): string {
  return [
    "رسالة جديدة من نموذج التواصل",
    "",
    `الاسم: ${data.name}`,
    `الهاتف: ${data.phone}`,
    `البريد الإلكتروني: ${data.email}`,
    `الموضوع: ${data.subject}`,
    "",
    "نص الرسالة:",
    data.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "invalid_request" },
      { status: 400 }
    );
  }

  // 1) تحديد المعدّل لكل IP — حماية من الإغراق.
  const ip = getClientIp(request);
  const limit = rateLimit(`contact:${ip}`);
  if (limit.limited) {
    return NextResponse.json(
      { success: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } }
    );
  }

  // 2) فخ العسل (honeypot): البوتات تملأ الحقل المخفي. نتجاهل بصمت بنجاح ظاهري.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  // 3) فخ الوقت: إرسال أسرع من اللازم = بوت. نتجاهل بصمت.
  if (
    typeof body.renderedAt === "number" &&
    Date.now() - body.renderedAt < MIN_FILL_TIME_MS
  ) {
    return NextResponse.json({ success: true });
  }

  const invalidFields = validate(body);
  if (invalidFields.length > 0) {
    return NextResponse.json(
      { success: false, error: "validation", fields: invalidFields },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  // العنوان المُرسِل: استخدم نطاقك الموثّق في Resend، أو نطاق الاختبار افتراضيًا.
  // نستخدم || (وليس ??) ليشمل القيمة الفارغة "" في ملف البيئة.
  const from =
    process.env.CONTACT_FROM?.trim() || "Sawaaed Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "[contact] Missing env: RESEND_API_KEY and/or CONTACT_EMAIL are required."
    );
    return NextResponse.json(
      { success: false, error: "configuration" },
      { status: 500 }
    );
  }

  const data = body as ContactPayload;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `رسالة جديدة من الموقع: ${data.subject}`,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { success: false, error: "send_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
