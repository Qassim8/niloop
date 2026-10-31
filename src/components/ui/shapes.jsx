// Decorative, non-interactive background shapes: morphing blobs and water ripples.

export function Blobs({ tone = "light" }) {
  const gold = tone === "light" ? "bg-[#dda853]/15" : "bg-[#dda853]/25";
  const blue = tone === "light" ? "bg-[#1e549f]/10" : "bg-white/10";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`blob float-y absolute -top-24 -start-24 h-72 w-72 ${gold}`} />
      <div className={`blob float-y-delay absolute -bottom-32 -end-20 h-96 w-96 ${blue}`} />
    </div>
  );
}

export function Ripples({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <span className="ripple inset-0" />
      <span className="ripple inset-0" />
      <span className="ripple inset-0" />
    </div>
  );
}
