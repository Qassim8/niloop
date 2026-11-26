"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

// Newsletter sign-up: sends the address through the same form service as the contact form.
export default function FooterSubscribe() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const [state, setState] = useState("idle"); // idle | sending | done | failed

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setState("sending");
    try {
      const response = await fetch("https://formsubmit.co/mohamedalgasim123@gmail.com", {
        method: "POST",
        body: new FormData(form),
      });
      if (response.ok) {
        form.reset();
        setState("done");
      } else {
        setState("failed");
      }
    } catch {
      setState("failed");
    }
  }

  return (
    <div>
      <h2 className="mb-2 text-base font-semibold text-white">{t("subscribe_title")}</h2>
      <p className="mb-5 text-sm text-nile-200">{t("subscribe_desc")}</p>
      <form onSubmit={onSubmit} className="flex items-center gap-3 border-b border-white/30 pb-2 focus-within:border-gold-400">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-label={t("subscribe_placeholder")}
          placeholder={t("subscribe_placeholder")}
          className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-nile-300"
        />
        <input type="hidden" name="_subject" value="Newsletter subscription" />
        <input type="hidden" name="_captcha" value="false" />
        <button
          type="submit"
          disabled={state === "sending"}
          aria-label={t("subscribe_button")}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gold-400 text-nile-950 transition hover:bg-gold-300 disabled:opacity-60"
        >
          <Arrow size={16} />
        </button>
      </form>
      <p role="status" className="mt-2 min-h-5 text-sm text-gold-300">
        {state === "done" ? t("subscribed") : state === "failed" ? t("subscribe_failed") : ""}
      </p>
    </div>
  );
}
