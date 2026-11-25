import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { imageSlots } from "@/data/image-slots";

// Files found in public/images/slots at build time (see next.config.js).
const files = JSON.parse(process.env.NEXT_PUBLIC_IMAGE_SLOTS || "[]");

// Recommendation labels are shown while developing, or when NEXT_PUBLIC_IMAGE_HINTS=true.
// On the live site they stay hidden so visitors never see them.
const showHints =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_IMAGE_HINTS === "true";

const findFile = (id) => files.find((f) => f.replace(/\.[^.]+$/, "") === id);

export const hasSlotImage = (id) => Boolean(findFile(id));
export const slotHintsVisible = showHints;

/**
 * A reserved picture area.
 *  - If public/images/slots/<id>.* exists, that image is shown.
 *  - Otherwise `fallback` (an existing image) is shown, if given.
 *  - Otherwise, while developing, a labelled placeholder explains which picture to add;
 *    on the live site it renders `empty` (nothing by default).
 *
 * `className` sizes the frame (aspect ratio, radius...); the image fills it.
 */
export default function ImageSlot({
  id,
  alt = "",
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  quality = 75,
  fallback,
  empty = null,
}) {
  const spec = imageSlots[id];
  const style = spec ? { aspectRatio: spec.ratio } : undefined;
  const file = findFile(id);
  const src = file ? `/images/slots/${file}` : fallback;

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={style}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={quality} className="object-cover" />
        {!file && showHints && spec && (
          <span className="absolute bottom-2 start-2 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
            ↻ {spec.title} · {id}
          </span>
        )}
      </div>
    );
  }

  if (!showHints) return empty;

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden border-2 border-dashed border-nile-300 bg-nile-50 p-4 text-center ${className}`}
      style={style}
    >
      <ImageIcon size={32} className="text-nile-400" />
      {spec && (
        <>
          <p className="text-sm font-semibold text-nile-700">{spec.title}</p>
          <p className="text-xs leading-relaxed text-slate-500">{spec.note}</p>
          <p dir="ltr" className="rounded-full bg-white px-3 py-1 text-[11px] text-nile-600">
            {spec.size} · {spec.ratio.replace(" / ", ":")} · slots/{id}.webp
          </p>
        </>
      )}
    </div>
  );
}
