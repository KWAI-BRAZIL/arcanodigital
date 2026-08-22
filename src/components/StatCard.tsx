"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function StatCard({
  children,
  className = "",
  alt = false,
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`rounded-lg border border-arcano-line p-6 ${
        alt ? "bg-arcano-surface-alt" : "bg-arcano-surface"
      } hover:border-arcano-gold/40 ${className}`}
    >
      {children}
    </motion.div>
  );
}
