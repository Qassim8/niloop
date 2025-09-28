"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* معلومات التواصل */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">تواصل معنا</h2>

          <div className="space-y-6">
            {/* كارد العنوان */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
              <div className="bg-[#d4b483] p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#d4b483]">
                  العنوان
                </h4>
                <p className="text-gray-200">الخرطوم - السودان</p>
              </div>
            </div>

            {/* كارد الهاتف */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
              <div className="bg-[#d4b483] p-3 rounded-lg">
                <Phone className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#d4b483]">الهاتف</h4>
                <p className="text-gray-200">+249 123 456 789</p>
              </div>
            </div>

            {/* كارد البريد */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition">
              <div className="bg-[#d4b483] p-3 rounded-lg">
                <Mail className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#d4b483]">
                  البريد الإلكتروني
                </h4>
                <p className="text-gray-200">info@nilehub.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* نموذج التواصل */}
        <div className="bg-white text-blue-900 rounded-2xl shadow-lg p-8">
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
              <label className="block text-sm font-medium mb-1">الرسالة</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4b483]"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4b483] text-blue-900 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
