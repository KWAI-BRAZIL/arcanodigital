import Image from "next/image";
import Link from "next/link";

const sizes = {
  sm: "w-[108px] md:w-[120px]",
  md: "w-[160px]",
  lg: "w-[240px] md:w-[280px]",
} as const;

export function Logo({
  size = "md",
  href = "/",
  onClick,
}: {
  size?: keyof typeof sizes;
  href?: string | null;
  onClick?: () => void;
  stacked?: boolean;
}) {
  const mark = (
    <Image
      src="/brand/logo.png"
      alt="Arcano Solutions"
      width={1024}
      height={819}
      className={`${sizes[size]} h-auto`}
      priority={size === "sm"}
    />
  );

  if (!href) {
    return mark;
  }

  return (
    <Link href={href} onClick={onClick} className="inline-flex shrink-0" aria-label="Arcano Solutions">
      {mark}
    </Link>
  );
}
