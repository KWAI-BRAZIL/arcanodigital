import Link from "next/link";
import { developmentPillars, marketingPillars } from "@/lib/content";

type Pillar = (typeof marketingPillars)[number] | (typeof developmentPillars)[number];

function PillarRow({ item, accent }: { item: Pillar; accent: "brass" | "teal" }) {
  const title = accent === "teal" ? "group-hover:text-teal" : "group-hover:text-gold";

  return (
    <Link
      href={`/solucoes/${item.slug}`}
      className="group grid gap-1 border-b border-white/[0.06] py-5 last:border-0 md:grid-cols-[minmax(140px,0.4fr)_1fr] md:items-baseline md:gap-8"
    >
      <p className={`font-display text-xl text-cream transition ${title} md:text-2xl`}>
        {item.title}
      </p>
      <p className="text-sm leading-relaxed text-muted">{item.summary}</p>
    </Link>
  );
}

export function DualPillars() {
  return (
    <div className="mt-12 grid gap-16 lg:mt-16 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
          Marketing & Psicologia aplicada
        </p>
        <div className="mt-2">
          {marketingPillars.map((item) => (
            <PillarRow key={item.slug} item={item} accent="brass" />
          ))}
        </div>
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-teal">
          Desenvolvimento & Sistemas
        </p>
        <div className="mt-2">
          {developmentPillars.map((item) => (
            <PillarRow key={item.slug} item={item} accent="teal" />
          ))}
        </div>
      </div>
    </div>
  );
}
