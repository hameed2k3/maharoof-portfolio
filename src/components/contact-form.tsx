"use client";

import { FormEvent, useState } from "react";

type SubmissionState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialState: SubmissionState = {
  type: "idle",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialState);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your message.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: payload.message || "Message sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="section-shell-strong rounded-[2.2rem] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <Field label="Phone / WhatsApp" name="phone" placeholder="+91..." />
        <Field label="Company" name="company" placeholder="Company name" />
      </div>

      <Field
        label="Subject"
        name="subject"
        placeholder="Project inquiry"
        required
        className="mt-5"
      />

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-[var(--surface-strong)]">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your requirement, timeline, or role."
          className="field-shell w-full rounded-[1.4rem] px-4 py-3 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-[var(--accent-strong)]"
        />
      </label>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
        <p
          className={`text-sm ${
            status.type === "error"
              ? "text-red-600"
              : status.type === "success"
                ? "text-emerald-700"
                : "text-slate-500"
          }`}
        >
          {status.message ||
            "Messages can be routed to Gmail using environment variables in Vercel."}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
};

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  className = "",
}: FieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-[var(--surface-strong)]">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="field-shell w-full rounded-[1.4rem] px-4 py-3 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-[var(--accent-strong)]"
      />
    </label>
  );
}
