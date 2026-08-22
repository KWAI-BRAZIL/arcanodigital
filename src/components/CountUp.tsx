"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const compact = value.replace(/\s/g, "");
  if (compact.startsWith("R$") && compact.toLowerCase().includes("mil")) {
    const n = Number(compact.replace(/[^\d]/g, ""));
    return { kind: "moneyMil" as const, n };
  }
  if (value.includes(",")) {
    return { kind: "decimal" as const, n: Number(value.replace(".", "").replace(",", ".")) };
  }
  if (/^\d{1,3}(\.\d{3})+$/.test(value)) {
    return { kind: "int" as const, n: Number(value.replace(/\./g, "")) };
  }
  if (value.endsWith("+")) {
    return { kind: "plus" as const, n: Number(value.replace("+", "").replace(/\./g, "")) };
  }
  return { kind: "int" as const, n: Number(value.replace(/\./g, "").replace(/[^\d]/g, "")) };
}

function formatStat(kind: ReturnType<typeof parseStat>["kind"], n: number, original: string) {
  if (kind === "moneyMil") return `R$ ${Math.round(n)} mil`;
  if (kind === "decimal") return n.toFixed(2).replace(".", ",");
  if (kind === "plus") return `${Math.round(n)}+`;
  if (Number.isNaN(n)) return original;
  return Math.round(n).toLocaleString("pt-BR");
}

export function CountUp({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseStat(value);
  const [shown, setShown] = useState(reduce ? value : formatStat(parsed.kind, 0, value));

  useEffect(() => {
    if (!inView) return;
    if (reduce || Number.isNaN(parsed.n)) {
      setShown(value);
      return;
    }
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - (1 - t) ** 3;
      setShown(formatStat(parsed.kind, parsed.n * eased, value));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setShown(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed.n, parsed.kind, reduce, value]);

  return <span ref={ref}>{shown}</span>;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroEntrance({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
