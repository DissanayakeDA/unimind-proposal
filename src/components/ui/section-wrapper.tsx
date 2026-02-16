"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const sectionVariants: any = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative scroll-mt-20 px-4 py-20 md:px-8 lg:px-16", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-12 text-center">
            <motion.h2
              className="mb-3 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              initial={{ opacity: 0, y: 20 } as any}
              whileInView={{ opacity: 1, y: 0 } as any}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 } as any}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                className="mx-auto max-w-2xl text-slate-400"
                initial={{ opacity: 0, y: 10 } as any}
                whileInView={{ opacity: 1, y: 0 } as any}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 } as any}
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
              initial={{ scaleX: 0 } as any}
              whileInView={{ scaleX: 1 } as any}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 } as any}
            />
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
