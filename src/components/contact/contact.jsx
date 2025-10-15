"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "../sections-header";

export default function Contact() {
  return (
    <section
      className="py-20 relative bg-cover bg-[url('/images/pattern.svg')]
      before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/95 before:z-20"
    >
      <div className="relative z-30">
        <SectionHeader title="التواصل" subtitle="نحن في انتظارك" />
        <div className="container mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-12 items-center">
          {/* معلومات التواصل */}
          <div className="z-30">
            <div className="space-y-6">
              {/* كارد العنوان */}
              <div className="bg-blue-800/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
                <div className="bg-alt p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-main" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-alt">العنوان</h4>
                  <p className="text-slate-500">الخرطوم - السودان</p>
                </div>
              </div>

              {/* كارد الهاتف */}
              <div className="bg-blue-800/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
                <div className="bg-alt p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-main" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-alt">الهاتف</h4>
                  <p className="text-slate-500">+249 123 456 789</p>
                </div>
              </div>

              {/* كارد البريد */}
              <div className="bg-blue-800/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
                <div className="bg-alt p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-main" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-alt">
                    البريد الإلكتروني
                  </h4>
                  <p className="text-slate-500">info@nilehub.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div className="bg-white text-main rounded-2xl shadow-lg p-8 z-30">
            <h3 className="text-2xl font-semibold mb-6">أرسل رسالة</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الاسم</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4b483]"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4b483]"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  الرسالة
                </label>
                <textarea
                  rows={4}
                  className="resize-none w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4b483]"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-alt text-main py-3 rounded-lg cursor-pointer font-semibold hover:opacity-90 transition"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
