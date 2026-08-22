import Link from "next/link";

const sizes = {
  sm: {
    wrap: "leading-none",
    name: "font-display text-[1.05rem] font-semibold tracking-[-0.04em]",
    mark: "mt-0.5 text-[8px] font-medium uppercase tracking-[0.42em] text-arcano-gold",
  },
  md: {
    wrap: "leading-none",
    name: "font-display text-xl font-semibold tracking-[-0.04em]",
    mark: "mt-1 text-[9px] font-medium uppercase tracking-[0.46em] text-arcano-gold",
  },
  lg: {
    wrap: "leading-none",
    name: "font-display text-4xl font-medium tracking-[-0.045em] md:text-5xl",
    mark: "mt-2 text-[11px] font-medium uppercase tracking-[0.52em] text-arcano-gold",
  },
} as const;

export function Logo({
  size = "md",
  href = "/",
  onClick,
}: {
  size?: keyof typeof sizes;
  href?: string | null;
  onClick?: () => void;
}) {
  const s = sizes[size];
  const mark = (
    <span className={`block ${s.wrap}`}>
      <span className={`block text-arcano-text ${s.name}`}>ARCANO</span>
      <span className={`block ${s.mark}`}>DIGITAL</span>
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link href={href} onClick={onClick} className="inline-block" aria-label="Arcano Digital">
      {mark}
    </Link>
  );
}
