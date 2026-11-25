import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function WorkCard({ href, image, title, label, tag, priority = false }) {
  return (
    <Link
      href={href}
      data-spotlight
      className="group block rounded-[var(--radius-media)] border border-line bg-white p-3 shadow-[var(--shadow-card)] transition duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-nile-600/30 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-nile-50">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
        {tag && (
          <span className="absolute start-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-nile-700 backdrop-blur-sm">
            {tag}
          </span>
        )}
        <span className="absolute bottom-3 end-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-nile-950 opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} className="rtl:-scale-x-100" />
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-3 pb-3 pt-4">
        <h3 className="line-clamp-2 min-h-[3rem] text-lg font-semibold leading-snug text-nile-950">
          {title}
        </h3>
        <span className="sr-only">{label}</span>
      </div>
    </Link>
  );
}

export default WorkCard;
