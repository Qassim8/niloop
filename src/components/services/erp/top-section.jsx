import { useTranslations } from "next-intl";
import { Calculator, Boxes, BarChart3, Users } from "lucide-react";

const tiles = [Calculator, Boxes, BarChart3, Users];

export default function ErpTopSection() {
  const t = useTranslations("ERP");

  return (
    <section className="py-20 bg-white">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-main mb-6">
            {t("advantages_title")}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t("advantages_desc")}
          </p>

          <ul className="space-y-4 text-slate-500">
            {["ad_one", "ad_two", "ad_three"].map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-alt text-main font-bold">
                  ✓
                </span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-br from-[#1e549f] to-[#0b2a57] p-8"
        >
          {tiles.map((Icon, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-xl bg-white/10"
            >
              <Icon className="h-16 w-16 text-alt" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
