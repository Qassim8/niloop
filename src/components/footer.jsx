import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* العمود الأول */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">TechCompany</h2>
          <p className="text-sm leading-relaxed">
            شركة تقنية متخصصة في تطوير المواقع والتطبيقات الرقمية وتقديم حلول
            مبتكرة لعملائنا.
          </p>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white">
                الخدمات
              </Link>
            </li>
            <li>
              <Link href="#works" className="hover:text-white">
                الأعمال
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white">
                الأسئلة الشائعة
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 الخرطوم، السودان</li>
            <li>📞 +249 912 345 678</li>
            <li>📧 info@techcompany.com</li>
          </ul>
        </div>

        {/* العمود الرابع */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">تابعنا</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-white">
              <Linkedin />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>

      {/* الحقوق */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TechCompany. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
