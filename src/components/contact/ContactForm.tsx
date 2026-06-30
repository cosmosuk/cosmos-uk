"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New contact form message from ${name}`,
          name,
          email,
          message,
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.success) {
        throw new Error(body.message || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[var(--color-border)] rounded-[10px] bg-white p-8 text-center">
        <p className="text-[15px] font-medium text-navy mb-1.5">
          Message sent
        </p>
        <p className="text-[13.5px] text-muted">
          Thank you for reaching out — we&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-[12.5px] font-medium text-gold hover:text-gold-light transition-colors duration-150"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--color-border)] rounded-[10px] bg-white p-6 md:p-8 flex flex-col gap-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-[12px] font-medium text-navy mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={status === "submitting"}
          className="w-full px-3.5 py-2.5 rounded-md border border-[var(--color-border)] text-[14px] text-navy outline-none focus:border-gold transition-colors duration-150"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[12px] font-medium text-navy mb-1.5"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === "submitting"}
          className="w-full px-3.5 py-2.5 rounded-md border border-[var(--color-border)] text-[14px] text-navy outline-none focus:border-gold transition-colors duration-150"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[12px] font-medium text-navy mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={status === "submitting"}
          className="w-full px-3.5 py-2.5 rounded-md border border-[var(--color-border)] text-[14px] text-navy outline-none focus:border-gold transition-colors duration-150 resize-none"
          placeholder="How can we help?"
        />
      </div>

      {status === "error" && (
        <p className="text-[12.5px] text-red-600">{errorMessage}</p>
      )}

      <div>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
