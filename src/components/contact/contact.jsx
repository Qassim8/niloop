"use client";

import { MapPin, Phone, Mail, MessageCircle, Check } from "lucide-react";
import SectionHeader from "../sections-header";
import Reveal from "../ui/reveal";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { isPlanId, items } from "@/data/pricing";

const groupKeys = ["web", "erp", "graphic", "marketing", "content"];

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink transition placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30";

export default function Contact() {
  const t = useTranslations("Contact");
  const pricing = useTranslations("Pricing");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [load, setLoad] = useState(false);
  const [plan, setPlan] = useState("");
  const [service, setService] = useState("");
  const messageRef = useRef(null);

  // Hide the toast a few seconds after it appears.
  useEffect(() => {
    if (!success && !failed) return;
    const timer = setTimeout(() => {
      setSuccess(false);
      setFailed(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [success, failed]);

  // Arriving from a pricing card or the "what do you need" selector (?plan=<id>):
  // pre-select the service and pre-fill the message.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("plan");
    if (!id || !isPlanId(id)) return;
    const name = pricing.has(`offers.${id}.title`)
      ? pricing(`offers.${id}.title`)
      : pricing(`items.${id}.title`);
    setPlan(name);
    if (items[id]) setService(items[id].group);
    if (messageRef.current && !messageRef.current.value) {
      messageRef.current.value = t("plan_prefill", { name });
    }
  }, [pricing, t]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      setLoad(true);
      setFailed(false);
      const response = await fetch(
        "https://formsubmit.co/mohamedalgasim123@gmail.com",
        { method: "POST", body: formData }
      );
      if (response.ok) {
        e.target.reset();
        setSuccess(true);
      } else {
        setFailed(true);
      }
    } catch {
      setSuccess(false);
      setFailed(true);
    } finally {
      setLoad(false);
    }
  }

  const info = [
    { Icon: MapPin, title: t("title_one"), content: t("desc_one") },
    {
      Icon: Phone,
      title: t("title_two"),
      content: (
        <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-nile-600">
          <span dir="ltr">{siteConfig.phoneDisplay}</span>
        </a>
      ),
    },
    {
      Icon: Mail,
      title: t("title_three"),
      content: (
        <a href={`mailto:${siteConfig.email}`} className="hover:text-nile-600">
          {siteConfig.email}
        </a>
      ),
    },
  ];

  return (
    <section className="section relative bg-sand">
      {success && (
        <div className="animate-slideDown fixed left-1/2 top-28 z-[9999] flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3 text-white shadow-xl">
          <Check size={18} />
          <span className="font-medium">{t("success")}</span>
        </div>
      )}
      {failed && (
        <div
          role="alert"
          className="animate-slideDown fixed left-1/2 top-28 z-[9999] rounded-full bg-red-600 px-6 py-3 text-white shadow-xl"
        >
          {t("sending_failed")}
        </div>
      )}

      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-5">
            {info.map(({ Icon, title, content }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card flex items-center gap-4 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-nile-950">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-nile-950">{title}</h3>
                    <p className="text-slate-600">{content}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full"
              >
                <MessageCircle size={20} />
                {t("whatsapp")}
              </a>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="card rounded-[var(--radius-media)] p-6 md:p-10">
              <h3 className="mb-6 text-2xl font-semibold text-nile-950">{t("form_title")}</h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-nile-950">
                      {t("name")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      className={fieldClass}
                      placeholder={t("name_placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-nile-950">
                      {t("title_three")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className={fieldClass}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-nile-950">
                    {t("service")}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={fieldClass}
                  >
                    <option value="">{t("service_placeholder")}</option>
                    {groupKeys.map((g) => (
                      <option key={g} value={g}>
                        {pricing(`groups.${g}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-nile-950">
                    {t("message")}
                  </label>
                  <textarea
                    id="contact-message"
                    ref={messageRef}
                    rows={5}
                    name="message"
                    required
                    className={`${fieldClass} resize-none`}
                    placeholder={t("message_placeholder")}
                  />
                </div>

                <input type="hidden" name="_captcha" value="false" />
                {plan && <input type="hidden" name="plan" value={plan} />}

                <button type="submit" disabled={load} className="btn-blue w-full disabled:opacity-70">
                  {load ? t("loading") : t("send")}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
