"use client";

import Image from "next/image";
import { useState } from "react";
import { proofs } from "@/lib/content";

export function ProofGallery({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const items = compact ? proofs.slice(0, 6) : proofs;
  const selected = active !== null ? items[active] : null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className="panel group overflow-hidden text-left"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{item.metric}</p>
              <p className="mt-1 font-display text-xl text-cream">{item.title}</p>
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
              width={1200}
              height={1600}
              className="max-h-[80vh] w-full object-contain"
            />
            <p className="mt-3 text-center text-sm text-muted">{selected.detail}</p>
            <button
              type="button"
              className="gold-btn mt-4 w-full rounded-sm py-2 text-[11px] uppercase tracking-[0.2em]"
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
