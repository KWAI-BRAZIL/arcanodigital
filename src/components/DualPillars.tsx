"use client";

import Image from "next/image";
import Link from "next/link";
import { developmentPillars, marketingPillars } from "@/lib/content";
import { ServiceIcon } from "@/components/ServiceIcon";
import { StatCard } from "@/components/StatCard";

type Pillar = (typeof marketingPillars)[number] | (typeof developmentPillars)[number];

function DualFrontsDiagram() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      <figure className="overflow-hidden rounded-md border border-line">
        <div className="relative aspect-[4/3]">
          <Image src="/photos/photo-marketing-v2.png" alt="Equipe de marketing Arcano Solutions" fill className="object-cover" sizes="50vw" />
        </div>
        <figcaption className="border-t border-line bg-paper px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Marketing & Psicologia aplicada
        </figcaption>
      </figure>
      <figure className="overflow-hidden rounded-md border border-line">
        <div className="relative aspect-[4/3]">
          <Image src="/photos/photo-dev.png" alt="" fill className="object-cover" sizes="50vw" />
        </div>
        <figcaption className="border-t border-line bg-paper px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Desenvolvimento & Sistemas
        </figcaption>
      </figure>
    </div>
  );
}

function PillarCard({ item, tech }: { item: Pillar; tech?: boolean }) {
  return (
    <Link href={`/solucoes/${item.slug}`} className="block h-full">
      <StatCard className="h-full" alt={tech} accent={tech ? "tech" : "gold"}>
        <ServiceIcon slug={item.slug} tech={tech} />
        <p
          className={`mt-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] ${
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
    <div className="mt-10">
      <DualFrontsDiagram />
      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
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
    </div>
  );
}
