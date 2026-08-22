"use client";

import Link from "next/link";
import { developmentPillars, marketingPillars } from "@/lib/content";
import { StatCard } from "@/components/StatCard";

type Pillar = (typeof marketingPillars)[number] | (typeof developmentPillars)[number];

function PillarCard({ item, tech }: { item: Pillar; tech?: boolean }) {
  return (
    <Link href={`/solucoes/${item.slug}`} className="block h-full">
      <StatCard className="h-full" alt={tech} accent={tech ? "tech" : "gold"}>
        <p
          className={`font-sans text-[11px] font-medium uppercase tracking-[0.22em] ${
            tech ? "text-lilac" : "text-gold"
          }`}
        >
          {item.kicker}
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
      </StatCard>
    </Link>
  );
}

export function DualPillars() {
  return (
    <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-10">
      <div>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
          Marketing & Psicologia aplicada
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {marketingPillars.map((item) => (
            <PillarCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
      <div>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-lilac">
          Desenvolvimento & Sistemas
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {developmentPillars.map((item) => (
            <PillarCard key={item.slug} item={item} tech />
          ))}
        </div>
      </div>
    </div>
  );
}
