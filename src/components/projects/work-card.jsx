import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function WorkCard({ href, image, title, label, tag }) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[2rem] border border-[#1e549f]/10 bg-white shadow-[0_10px_40px_-15px_rgba(30,84,159,0.25)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-15px_rgba(30,84,159,0.4)]"
    >
      <div className="relative m-3 h-52 overflow-hidden rounded-[1.5rem]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a57]/80 via-[#1e549f]/20 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

        {tag && (
          <span className="absolute start-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-main backdrop-blur-sm">
            {tag}
          </span>
        )}

        <span className="absolute inset-x-0 bottom-3 flex translate-y-4 items-center justify-center gap-1 font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {label}
          <ArrowUpRight size={16} className="rtl:-scale-x-100" />
        </span>
      </div>
      <h3 className="min-h-[3.5rem] px-5 pb-5 pt-1 text-base font-bold leading-snug text-main line-clamp-2">
        {title}
      </h3>
    </Link>
  );
}

export default WorkCard;
