import Link from "next/link";

const sizes = {
  sm: {
    wrap: "leading-none",
    name: "font-display text-[0.92rem] font-bold tracking-[-0.04em] md:text-[1.05rem]",
        mark: "mt-0.5 text-[7px] font-medium uppercase tracking-[0.2em] text-muted md:text-[8px]",
  },
  md: {
    wrap: "leading-none",
    name: "font-display text-xl font-bold tracking-[-0.04em]",
        mark: "mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-muted",
  },
  lg: {
    wrap: "leading-none",
    name: "font-display text-4xl font-bold tracking-[-0.045em] md:text-5xl",
        mark: "mt-2 text-[11px] font-medium uppercase tracking-[0.32em] text-muted",
  },
} as const;

export function Logo({
  size = "md",
  href = "/",
  onClick,
  onLight = false,
}: {
  size?: keyof typeof sizes;
  href?: string | null;
  onClick?: () => void;
  onLight?: boolean;
}) {
  const s = sizes[size];
  const mark = (
    <span className={`block ${s.wrap}`}>
      <span className={`block ${onLight ? "text-cream" : "text-ivory"} ${s.name}`}>ARCANO</span>
      <span className={`block ${s.mark}`}>SOLUTIONS</span>
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link href={href} onClick={onClick} className="inline-block" aria-label="Arcano Solutions">
      {mark}
    </Link>
  );
}
