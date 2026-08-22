"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function ScrollImmersion() {
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollY, [0, 2400], [0, 220]);
  const yFast = useTransform(scrollY, [0, 2400], [0, -160]);
  const glow = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.12, 0.06, 0.1, 0.04]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-24 top-[12%] h-[42vw] max-h-[520px] w-[42vw] max-w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,165,55,0.16),transparent_68%)]"
        style={{ y: ySlow, opacity: glow }}
      />
      <motion.div
        className="absolute -right-32 top-[48%] h-[36vw] max-h-[440px] w-[36vw] max-w-[440px] rounded-full bg-[radial-gradient(circle,rgba(138,114,48,0.18),transparent_70%)]"
        style={{ y: yFast, opacity: glow }}
      />
    </div>
  );
}

export function HeroParallax({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.18], [0, 72]);
  const opacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.55]);
  const scale = useTransform(scrollYProgress, [0, 0.18], [1, 0.97]);

  if (reduce) {
    return <div className="relative z-[1]">{children}</div>;
  }

  return (
    <motion.div className="relative z-[1]" style={{ y, opacity, scale }}>
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
