"use client";

import Image from "next/image";
import { useState } from "react";
import { proofs } from "@/lib/content";

type Proof = (typeof proofs)[number];

export function ProofGallery({
  compact = false,
  items,
}: {
  compact?: boolean;
  items?: readonly Proof[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const list = items ?? proofs;
  const selected = active !== null ? list[active] : null;

  return (
    <>
      <div
        className={
          compact
            ? "-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
            : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {list.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className={
              compact
                ? "w-[85vw] shrink-0 snap-start overflow-hidden rounded-lg border bg-arcano-surface text-left shadow-lg shadow-black/40 sm:w-[380px] " +
                    (i % 2 ? "border-arcano-tech/25" : "border-gold/20")
                : "overflow-hidden rounded-lg border bg-arcano-surface text-left shadow-lg shadow-black/40 " +
                    (i % 2 ? "border-arcano-tech/25" : "border-gold/20")
            }
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-arcano-bg sm:aspect-[3/4]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                unoptimized
                sizes="(min-width: 1024px) 360px, 85vw"
                className="rounded-md object-contain object-top"
              />
            </div>
            <div className="p-4">
              <p className={`font-sans text-[11px] font-medium uppercase tracking-[0.22em] ${i % 2 ? "text-arcano-tech" : "text-gold"}`}>
                {item.metric}
              </p>
              <p className="mt-1 font-display text-xl font-medium tracking-[-0.03em] text-cream">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          </button>
        ))}
      </div>
      {selected ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.src}
              alt={selected.title}
              width={1600}
              height={2000}
              unoptimized
              className="max-h-[80vh] w-full rounded-md object-contain shadow-lg shadow-black/40"
            />
            <p className="mt-3 text-center text-sm text-muted">{selected.detail}</p>
            <button
              type="button"
              className="gold-btn mt-4 w-full rounded-lg py-2 text-[11px] uppercase tracking-[0.2em]"
              onClick={() => setActive(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
