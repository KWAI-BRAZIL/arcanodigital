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
  const [paused, setPaused] = useState(false);
  const list = items ?? proofs;
  const selected = active !== null ? list[active] : null;
  const track = compact ? [...list, ...list] : list;

  return (
    <>
      <div
        className={
          compact
            ? "group/proofs -mx-4 overflow-hidden px-4 pb-2"
            : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        }
        onMouseEnter={() => compact && setPaused(true)}
        onMouseLeave={() => compact && setPaused(false)}
      >
        <div
          className={
            compact
              ? `proof-marquee flex gap-5 ${paused || selected ? "is-paused" : ""}`
              : "contents"
          }
        >
        {track.map((item, i) => {
          const origin = i % list.length;
          const alt = origin % 2 === 1;
          return (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActive(origin)}
            onFocus={() => compact && setPaused(true)}
            onBlur={() => compact && setPaused(false)}
            className={
              compact
                ? "w-[85vw] shrink-0 text-left sm:w-[340px]"
                : "text-left"
            }
          >
            <div
              className={`rounded-[1.35rem] border p-2.5 shadow-[0_18px_40px_rgba(26,26,31,0.1)] transition duration-300 ease-out hover:-translate-y-1 ${
                alt ? "border-lilac/30 bg-paper-2" : "border-gold/30 bg-paper-2"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem] bg-white">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 340px, 85vw"
                  className="object-contain object-top"
                />
              </div>
            </div>
            <div className="mt-4 px-1">
              <p
                className={`font-sans text-[11px] font-medium uppercase tracking-[0.22em] ${
                  alt ? "text-lilac" : "text-gold"
                }`}
              >
                {item.metric}
              </p>
              <p className="mt-1 font-display text-xl font-medium tracking-[-0.03em] text-cream">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          </button>
          );
        })}
        </div>
      </div>
      {selected ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#05080f]/90 p-4"
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
            <p className="mt-3 text-center text-sm text-mist">{selected.detail}</p>
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
