// Layered, gently moving waves used to blend one section into the next.
// The fill color comes from the Tailwind text color on `className`, so pass the color of the
// section that follows (e.g. className="text-white"). Pure CSS animation, no JS.

const PERIOD = 1440;

// A smooth wave that covers x in [0, PERIOD * periods] and closes to the bottom edge.
function wavePath(amp, mid, periods = 3) {
  let d = `M0 ${mid}`;
  for (let i = 0; i < periods; i++) {
    const x = i * PERIOD;
    d += ` C${x + 240} ${mid - amp} ${x + 480} ${mid + amp} ${x + 720} ${mid}`;
    d += ` C${x + 960} ${mid - amp} ${x + 1200} ${mid + amp} ${x + 1440} ${mid}`;
  }
  return `${d} V120 H0 Z`;
}

const layers = [
  { path: wavePath(26, 56), shift: 0, opacity: "opacity-25", motion: "wave-slide wave-slide-slow" },
  { path: wavePath(20, 70), shift: 360, opacity: "opacity-50", motion: "wave-slide wave-slide-rev" },
  { path: wavePath(14, 88), shift: 700, opacity: "opacity-100", motion: "wave-slide" },
];

export default function Wave({
  position = "bottom",
  className = "text-white",
  height = "h-12 md:h-20",
}) {
  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-10 overflow-hidden leading-[0] ${height} ${className} ${
        position === "bottom" ? "bottom-[-1px]" : "top-[-1px] rotate-180"
      }`}
    >
      {layers.map(({ path, shift, opacity, motion }, i) => (
        <svg
          key={i}
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
          className={`absolute left-0 top-0 h-full w-[200%] max-w-none fill-current ${opacity} ${motion}`}
        >
          <path d={path} transform={`translate(${-shift} 0)`} />
        </svg>
      ))}
    </div>
  );
}
