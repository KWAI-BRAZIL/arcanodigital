import Link from "next/link";
import { developmentPillars, marketingPillars } from "@/lib/content";

type Pillar = (typeof marketingPillars)[number] | (typeof developmentPillars)[number];

function PillarCard({ item, accent }: { item: Pillar; accent: "brass" | "teal" }) {
  const border =
    accent === "teal" ? "panel panel-teal hover:border-teal/50" : "panel hover:border-gold/50";
  const kicker = accent === "teal" ? "text-teal" : "text-gold";

  return (
    <Link href={`/solucoes/${item.slug}`} className={`${border} p-6`}>
      <p className={`font-mono text-[11px] uppercase tracking-[0.22em] ${kicker}`}>{item.kicker}</p>
      <h3 className="mt-3 font-display text-2xl text-cream">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
      <ul className="mt-4 space-y-1">
        {item.bullets.map((line) => (
          <li key={line} className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            — {line}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export function DualPillars() {
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">Marketing</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {marketingPillars.map((item) => (
            <PillarCard key={item.slug} item={item} accent="brass" />
          ))}
        </div>
      </div>
      <div
        className="hidden w-px bg-gradient-to-b from-gold via-line to-teal lg:block"
        aria-hidden
      />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-teal">
          Desenvolvimento
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {developmentPillars.map((item) => (
            <PillarCard key={item.slug} item={item} accent="teal" />
          ))}
        </div>
      </div>
    </div>
  );
}
