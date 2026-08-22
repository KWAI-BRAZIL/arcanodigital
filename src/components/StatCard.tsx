"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function StatCard({
  children,
  className = "",
  alt = false,
  accent = "gold",
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  accent?: "gold" | "tech";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-lg border p-6 ${
        alt ? "bg-arcano-surface-alt" : "bg-arcano-surface"
      } ${
        accent === "tech"
          ? "border-arcano-tech/20 hover:border-arcano-tech/50"
          : "border-arcano-line hover:border-arcano-gold/40"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
