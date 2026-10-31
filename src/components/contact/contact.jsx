"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "../sections-header";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Contact() {
  const t = useTranslations("Contact");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [load, setLoad] = useState(false);

  // Hide the toast a few seconds after it appears.
  useEffect(() => {
    if (!success && !failed) return;
    const timer = setTimeout(() => {
      setSuccess(false);
      setFailed(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [success, failed]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      setLoad(true);
      setFailed(false);
      const response = await fetch(
        "https://formsubmit.co/mohamedalgasim123@gmail.com",
        {
          method: "POST",
          body: formData,
        }
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

  return (
    <section
      className="py-20 relative bg-cover bg-[url('/images/pattern.svg')]
      before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/95 before:z-20"
    >
      <div className="relative z-30">
        {success && (
          <div
            className="fixed top-32 left-1/2 -translate-x-1/2 
    bg-green-600/90 backdrop-blur-md text-white 
    py-3 px-6 rounded-xl shadow-xl 
    flex items-center gap-3 
    animate-slideDown z-[9999]"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span className="font-medium">{t("success")}</span>
          </div>
        )}

        {failed && (
          <div
            role="alert"
            className="fixed top-32 left-1/2 -translate-x-1/2 bg-red-600/90 backdrop-blur-md text-white py-3 px-6 rounded-xl shadow-xl animate-slideDown z-[9999]"
          >
            {t("sending_failed")}
          </div>
        )}

        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* معلومات التواصل */}
          <div className="z-30">
            <div className="space-y-6">
              {/* كارد العنوان */}
              <div className="bg-blue-800/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
                <div className="bg-alt p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-main" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-alt">
                    {t("title_one")}
                  </h4>
                  <p className="text-slate-500">{t("desc_one")}</p>
                </div>
              </div>

              {/* كارد الهاتف */}
              <div className="bg-blue-800/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
                <div className="bg-alt p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-main" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-alt">
                    {t("title_two")}
                  </h4>
                  <Link
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500"
                  >
                    <span dir="ltr" className="unicode-bidi plaintext">
                      {siteConfig.phoneDisplay}
                    </span>
                  </Link>
                </div>
              </div>

              {/* كارد البريد */}
              <div className="bg-blue-800/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
                <div className="bg-alt p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-main" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-alt">
                    {t("title_three")}
                  </h4>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-500"
                  >
                    {siteConfig.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div className="bg-white text-main rounded-2xl shadow-lg p-8 z-30">
            <h3 className="text-2xl font-semibold mb-6">{t("form_title")}</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
                  {t("name")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4b483]"
                  placeholder={t("name_placeholder")}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
                  {t("title_three")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4b483]"
                  placeholder="example@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
                  {t("message")}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  name="message"
                  required
                  className="resize-none w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4b483]"
                  placeholder={t("message_placeholder")}
                ></textarea>
              </div>

              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {load ? (
                <button
                  type="submit"
                  disabled
                  className={`w-full bg-alt text-main py-3 rounded-lg cursor-pointer font-semibold outline-0 opacity-70 transition`}
                >
                  {t("loading")}
                </button>
              ) : (
                <button
                  type="submit"
                  className={`w-full bg-alt text-main py-3 rounded-lg cursor-pointer font-semibold outline-0 hover:opacity-90 transition`}
                >
                  {t("send")}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
