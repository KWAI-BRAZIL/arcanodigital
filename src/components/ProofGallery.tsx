"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { proofs } from "@/lib/content";

type Proof = (typeof proofs)[number];

const LOOP_MS = 48000;
const DRAG_CLICK_PX = 8;

export function ProofGallery({
  compact = false,
  items,
}: {
  compact?: boolean;
  items?: readonly Proof[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const list = items ?? proofs;
  const selected = active !== null ? list[active] : null;
  const track = compact ? [...list, ...list] : list;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const suppressClickRef = useRef(false);
  const dragRef = useRef<{
    active: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    startOffset: number;
    axis: "h" | "v" | null;
  }>({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startOffset: 0,
    axis: null,
  });

  pausedRef.current = paused || selected !== null;

  useEffect(() => {
    if (!compact) return;
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min(40, now - last);
      last = now;
      const loopW = trackEl.scrollWidth / 2;
      const dragging = dragRef.current.active && dragRef.current.axis === "h";

      if (loopW > 0 && !reduce && !dragging && !pausedRef.current) {
        offsetRef.current += (loopW / LOOP_MS) * dt;
      }
      if (loopW > 0) {
        offsetRef.current = ((offsetRef.current % loopW) + loopW) % loopW;
      }
      trackEl.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [compact, list.length]);

  const endDrag = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    if (drag.pointerId !== null) {
      try {
        viewportRef.current?.releasePointerCapture(drag.pointerId);
      } catch {
        /* already released */
      }
    }
    if (drag.axis === "h") {
      const moved = Math.abs(e.clientX - drag.startX);
      if (moved > DRAG_CLICK_PX) suppressClickRef.current = true;
    }
    drag.active = false;
    drag.pointerId = null;
    drag.axis = null;
    setGrabbing(false);
  };

  return (
    <>
      <div
        ref={viewportRef}
        className={
          compact
            ? `group/proofs -mx-4 touch-pan-y overflow-hidden px-4 pb-2 select-none ${
                grabbing ? "cursor-grabbing" : "cursor-grab"
              }`
            : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        }
        onPointerDown={(e) => {
          if (!compact || e.button !== 0) return;
          dragRef.current = {
            active: true,
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            startOffset: offsetRef.current,
            axis: null,
          };
          viewportRef.current?.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!compact) return;
          const drag = dragRef.current;
          if (!drag.active) return;
          const dx = e.clientX - drag.startX;
          const dy = e.clientY - drag.startY;
          if (!drag.axis) {
            if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
            drag.axis = Math.abs(dx) >= Math.abs(dy) ? "h" : "v";
            if (drag.axis === "h") setGrabbing(true);
          }
          if (drag.axis !== "h") return;
          e.preventDefault();
          offsetRef.current = drag.startOffset - dx;
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          ref={trackRef}
          className={compact ? "flex w-max gap-5 will-change-transform" : "contents"}
        >
          {track.map((item, i) => {
            const origin = i % list.length;
            const alt = origin % 2 === 1;
            return (
              <button
                key={`${item.src}-${i}`}
                type="button"
                onClick={() => {
                  if (suppressClickRef.current) {
                    suppressClickRef.current = false;
                    return;
                  }
                  setActive(origin);
                }}
                onFocus={() => compact && setPaused(true)}
                onBlur={() => compact && setPaused(false)}
                className={
                  compact
                    ? "w-[85vw] shrink-0 cursor-grab text-left select-none sm:w-[340px]"
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
                      draggable={false}
                      sizes="(min-width: 1024px) 340px, 85vw"
                      className="pointer-events-none object-contain object-top"
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
