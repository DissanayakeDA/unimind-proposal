"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  initial?: any;
  whileInView?: any;
  animate?: any;
  viewport?: any;
  transition?: any;
  whileHover?: any;
}

export function GlassCard({
  children,
  className,
  hoverGlow = true,
  initial,
  whileInView,
  animate,
  viewport,
  transition,
  whileHover,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        hoverGlow &&
          "transition-shadow duration-500 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:border-purple-500/30",
        className
      )}
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      viewport={viewport}
      transition={transition}
      whileHover={whileHover}
    >
      {children}
    </motion.div>
  );
}
