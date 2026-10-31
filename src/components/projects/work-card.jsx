import Image from "next/image";
import Link from "next/link";

function WorkCard({ href, image, title, label }) {
  return (
    <Link
      href={href}
      className="group block rounded-md overflow-hidden bg-white shadow-xl border-[10px] border-[#fffdf9]"
    >
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/0 md:opacity-0 group-hover:opacity-100 transition duration-500 flex items-start justify-center p-4">
          <span className="text-white font-semibold">{label}</span>
        </div>
      </div>
      <h3 className="px-2 pt-3 pb-2 text-main font-bold text-base leading-snug line-clamp-2 min-h-[3.25rem]">
        {title}
      </h3>
    </Link>
  );
}

export default WorkCard;
