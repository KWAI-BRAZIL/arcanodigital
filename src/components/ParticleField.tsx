"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Particles,
  ParticlesProvider,
  useParticlesProvider,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

function TechMesh({ id }: { id: string }) {
  const { loaded } = useParticlesProvider();
  const [dense, setDense] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setDense(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const options = useMemo(
    (): ISourceOptions => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 45,
      detectRetina: true,
      particles: {
        number: { value: dense ? 56 : 24, density: { enable: true, width: 1100, height: 760 } },
        color: { value: ["#D4A017", "#E8D5F5"] },
        shape: { type: "circle" },
        links: {
          enable: true,
          color: "#C4B5E0",
          distance: dense ? 110 : 80,
          opacity: 0.12,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: dense ? 0.7 : 0.45,
          direction: "none",
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.15, max: 0.4 } },
        size: { value: { min: 0.8, max: 1.8 } },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: dense ? 150 : 110, links: { opacity: 0.35 } },
        },
      },
    }),
    [dense],
  );

  if (!loaded) return null;

  return <Particles id={id} className="h-full w-full" options={options} />;
}

export function ParticleField({ id = "arcano-mesh" }: { id?: string }) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOk(true);
  }, []);

  if (!ok) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <ParticlesProvider init={loadSlim}>
        <TechMesh id={id} />
      </ParticlesProvider>
    </div>
  );
}
