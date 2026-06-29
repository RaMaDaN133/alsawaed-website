"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useT } from "@/components/i18n/LanguageProvider";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const t = useT();
  const f = t.contact.form;
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormState): Errors => {
    const e: Errors = {};
    if (!data.name.trim()) e.name = f.errors.nameRequired;
    else if (data.name.trim().length < 3) e.name = f.errors.nameShort;

    if (!data.phone.trim()) e.phone = f.errors.phoneRequired;
    else if (!/^[+\d\s()-]{8,}$/.test(data.phone))
      e.phone = f.errors.phoneInvalid;

    if (!data.email.trim()) e.email = f.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = f.errors.emailInvalid;

    if (!data.subject.trim()) e.subject = f.errors.subjectRequired;

    if (!data.message.trim()) e.message = f.errors.messageRequired;
    else if (data.message.trim().length < 10)
      e.message = f.errors.messageShort;

    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    // Mock submission — اربط هنا واجهة API الحقيقية لإرسال الرسالة
    setSubmitted(true);
    setForm(initial);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const fieldClass = (name: keyof FormState) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-gold focus:ring-2 focus:ring-gold/30 ${
      errors[name] ? "border-red-400" : "border-navy-200"
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl bg-navy-50/60 p-12 text-center"
      >
        <FaCheckCircle className="text-5xl text-green-500" />
        <h3 className="mt-5 text-2xl font-bold text-navy-900">
          {f.successTitle}
        </h3>
        <p className="mt-3 text-navy-500">{f.successText}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy-700">
            {f.name} <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={f.namePlaceholder}
            className={fieldClass("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-navy-700">
            {f.phone} <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={f.phonePlaceholder}
            dir="ltr"
            className={`${fieldClass("phone")} text-start`}
          />
          {errors.phone && (
            <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy-700">
            {f.email} <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={f.emailPlaceholder}
            dir="ltr"
            className={`${fieldClass("email")} text-start`}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-navy-700">
            {f.subject} <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder={f.subjectPlaceholder}
            className={fieldClass("subject")}
          />
          {errors.subject && (
            <p className="mt-1.5 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-navy-700">
          {f.message} <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={f.messagePlaceholder}
          className={`${fieldClass("message")} resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="btn-gold w-full sm:w-auto">
        {f.submit}
        <FaPaperPlane className="text-sm" />
      </button>
    </form>
  );
}
