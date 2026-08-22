"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { DeviceFrame } from "@/components/DeviceFrame";
import { iconSlugForSegment, ServiceIcon } from "@/components/ServiceIcon";
import { cases, resultOps, segments } from "@/lib/content";

export function CasesBoard() {
  const [segment, setSegment] = useState<(typeof segments)[number]>("Todos");

  const ops = useMemo(
    () => resultOps.filter((item) => segment === "Todos" || item.segment === segment),
    [segment],
  );
  const brands = useMemo(
    () => cases.filter((item) => segment === "Todos" || item.segment === segment),
    [segment],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {segments.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setSegment(item)}
            className={`rounded-sm border px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] ${
              segment === item
                ? "border-gold bg-gold/10 text-gold-bright"
                : "border-line text-muted hover:text-cream"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {ops.length > 0 ? (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {ops.map((item) => (
            <article key={item.slug} className="group panel overflow-hidden transition duration-300 ease-out hover:-translate-y-1">
              <DeviceFrame>
              <div className="relative h-80 overflow-hidden rounded-[1rem] bg-white">
                <Image
                  src={item.proof}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-contain object-top"
                />
              </div>
              </DeviceFrame>
              <div className="space-y-3 p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{item.segment}</p>
                <h3 className="font-display text-2xl text-cream">{item.title}</h3>
                <p className="text-sm text-muted">
                  <span className="text-cream">Desafio. </span>
                  {item.challenge}
                </p>
                <p className="text-sm text-muted">
                  <span className="text-cream">Ação. </span>
                  {item.action}
                </p>
                <p className="text-sm text-gold-bright">
                  <span className="text-cream">Resultado. </span>
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {brands.length > 0 ? (
        <div className="mt-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Marcas atendidas neste recorte</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {brands.map((item) => (
              <article key={item.slug} className="panel overflow-hidden p-0 transition duration-300 ease-out hover:-translate-y-1">
                <div className="flex h-28 items-center justify-center bg-paper-2">
                  <ServiceIcon slug={iconSlugForSegment(item.segment)} size="lg" />
                </div>
                <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{item.segment}</p>
                <h3 className="mt-2 font-display text-2xl text-cream">{item.client}</h3>
                <p className="mt-3 text-sm text-muted">
                  <span className="text-cream">Desafio. </span>
                  {item.challenge}
                </p>
                <p className="mt-2 text-sm text-muted">
                  <span className="text-cream">Ação. </span>
                  {item.action}
                </p>
                <p className="mt-2 text-sm text-gold-bright">
                  <span className="text-cream">Resultado. </span>
                  {item.result}
                </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-10 text-sm text-muted">Nenhum case neste segmento ainda. Fale com a gente no WhatsApp.</p>
      )}
    </div>
  );
}
