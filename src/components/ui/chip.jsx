// Small rounded pill with an icon, set inline inside a headline (e.g. "Explore [icon] our work").
const tones = {
  blue: "bg-nile-600 text-white",
  gold: "bg-gold-400 text-nile-950",
  dark: "bg-nile-950 text-gold-400",
  light: "bg-nile-100 text-nile-700",
};

export default function Chip({ icon: Icon, tone = "blue" }) {
  return (
    <span
      aria-hidden="true"
      className={`mx-[0.25em] inline-flex h-[0.8em] w-[1.45em] translate-y-[0.06em] items-center justify-center rounded-full align-baseline ${tones[tone]}`}
    >
      <Icon className="h-[0.5em] w-[0.5em]" strokeWidth={2.2} />
    </span>
  );
}
