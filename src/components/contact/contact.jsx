"use client";

import { MapPin, Phone, Mail, MessageCircle, Check } from "lucide-react";
import Editorial from "../ui/editorial";
import Reveal from "../ui/reveal";
import SplitReveal from "../ui/split-reveal";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { isPlanId, items } from "@/data/pricing";

const interestKeys = ["web", "store", "erp", "identity", "content", "marketing", "other"];
const budgetKeys = ["b1", "b2", "b3", "b4", "b5"];

// Which interest chip to pre-select for a catalog item / bundle id coming from ?plan=
const interestFor = (id) => {
  if (id === "web_store" || id === "store") return "store";
  const group = items[id]?.group;
  if (group === "graphic") return "identity";
  if (["web", "erp", "content", "marketing"].includes(group)) return group;
  return null;
};

const underline =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink transition placeholder:text-slate-400 focus:border-nile-950 focus:outline-none";

const chip = (on) =>
  `cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
    on
      ? "border-nile-950 bg-nile-950 text-white"
      : "border-line bg-white text-nile-950 hover:border-nile-950"
  }`;

export default function Contact() {
  const t = useTranslations("Contact");
  const pricing = useTranslations("Pricing");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [load, setLoad] = useState(false);
  const [plan, setPlan] = useState("");
  const [interests, setInterests] = useState([]);
  const [budget, setBudget] = useState("");
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
  // pre-select the interest and pre-fill the message.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("plan");
    if (!id || !isPlanId(id)) return;
    const name = pricing.has(`offers.${id}.title`)
      ? pricing(`offers.${id}.title`)
      : pricing(`items.${id}.title`);
    setPlan(name);
    const interest = interestFor(id);
    if (interest) setInterests([interest]);
    if (messageRef.current && !messageRef.current.value) {
      messageRef.current.value = t("plan_prefill", { name });
    }
  }, [pricing, t]);

  const toggleInterest = (key) =>
    setInterests((list) => (list.includes(key) ? list.filter((k) => k !== key) : [...list, key]));

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    try {
      setLoad(true);
      setFailed(false);
      const response = await fetch("https://formsubmit.co/mohamedalgasim123@gmail.com", {
        method: "POST",
        body: new FormData(form),
      });
      if (response.ok) {
        form.reset();
        setInterests([]);
        setBudget("");
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
    <section className="section bg-sand">
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
        <Editorial label={t("title")} className="mb-10 md:mb-14">
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.3] text-nile-950 md:text-5xl md:leading-[1.2]">
            <SplitReveal text={t("lead_desc")} />
          </h2>
        </Editorial>

        <Reveal>
          <div className="rounded-[var(--radius-media)] bg-white p-6 shadow-[var(--shadow-card)] md:rounded-[2rem] md:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="inline-flex rounded-full border border-line px-4 py-1.5 text-sm text-slate-600">
                  {t("label")}
                </span>
                <h3 className="mt-6 text-3xl font-semibold leading-[1.25] text-nile-950 md:text-4xl">
                  {t("lead_title")}
                </h3>

                <ul className="mt-10 space-y-5">
                  {info.map(({ Icon, title, content }) => (
                    <li key={title} className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-nile-600">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-sm text-slate-500">{title}</span>
                        <span className="block font-medium text-nile-950">{content}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-8"
                >
                  <MessageCircle size={20} />
                  {t("whatsapp")}
                </a>
              </div>

              <form className="space-y-8 lg:col-span-7" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-sm text-slate-500">
                      {t("name")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      className={underline}
                      placeholder={t("name_placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm text-slate-500">
                      {t("email_label")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className={underline}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm text-slate-500">{t("interested")}</legend>
                  <div className="flex flex-wrap gap-2">
                    {interestKeys.map((key) => (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={interests.includes(key)}
                        onClick={() => toggleInterest(key)}
                        className={chip(interests.includes(key))}
                      >
                        {t(`interests.${key}`)}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="interested_in" value={interests.map((k) => t(`interests.${k}`)).join(", ")} />
                </fieldset>

                <fieldset>
                  <legend className="mb-3 text-sm text-slate-500">{t("budget")}</legend>
                  <div className="flex flex-wrap gap-2">
                    {budgetKeys.map((key) => (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={budget === key}
                        onClick={() => setBudget(budget === key ? "" : key)}
                        className={chip(budget === key)}
                      >
                        <bdi>{t(`budgets.${key}`)}</bdi>
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="budget" value={budget ? t(`budgets.${budget}`) : ""} />
                </fieldset>

                <div>
                  <label htmlFor="contact-message" className="text-sm text-slate-500">
                    {t("message")}
                  </label>
                  <textarea
                    id="contact-message"
                    ref={messageRef}
                    rows={3}
                    name="message"
                    required
                    className={`${underline} resize-none`}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
