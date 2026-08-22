"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Particles,
  ParticlesProvider,
  useParticlesProvider,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

function TechMesh() {
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
      fpsLimit: 48,
      detectRetina: true,
      particles: {
        number: { value: dense ? 88 : 36, density: { enable: true, width: 1100, height: 760 } },
        color: { value: ["#6B8CA8", "#8AA8BC", "#C9A24A"] },
        shape: { type: "circle" },
        links: {
          enable: true,
          color: "#5A7A94",
          distance: dense ? 92 : 72,
          opacity: 0.22,
          width: 0.45,
        },
        move: {
          enable: true,
          speed: dense ? 1.15 : 0.75,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
        },
        opacity: { value: { min: 0.25, max: 0.55 } },
        size: { value: { min: 0.8, max: 1.6 } },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: dense ? 140 : 100, links: { opacity: 0.5 } },
        },
      },
    }),
    [dense],
  );

  if (!loaded) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen" aria-hidden>
      <Particles id="arcano-mesh" className="h-full w-full" options={options} />
    </div>
  );
}

export function ParticleField() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOk(true);
  }, []);

  if (!ok) return null;

  return (
    <ParticlesProvider init={loadSlim}>
      <TechMesh />
    </ParticlesProvider>
  );
}
