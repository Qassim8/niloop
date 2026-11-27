// Two-column editorial layout: a small dotted label on one side and the content on the other.
// On phones the label sits above the content. Works in both reading directions.
// tone="dark" is for dark sections.
export default function Editorial({ label, children, className = "", tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className={`grid gap-6 md:grid-cols-12 md:gap-10 ${className}`}>
      <div className="md:col-span-3">
        <span
          className={`inline-flex items-center gap-2 text-sm font-medium ${
            dark ? "text-nile-200" : "text-slate-600"
          }`}
        >
          <i
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-gold-400" : "bg-nile-950"}`}
          />
          {label}
        </span>
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}
