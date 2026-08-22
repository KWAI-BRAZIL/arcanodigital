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
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`glass rounded-sm p-6 ${
        accent === "tech" ? "hover:border-lilac/50" : "hover:border-gold/45"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
