"use client";

import { security } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { motion } from "framer-motion";

export function SecuritySection() {
  return (
    <SectionWrapper
      id="security"
      title="Security & Scalability"
      subtitle="How UniMind ensures data protection, access control, and growth-readiness"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {security.items.map((item, i) => (
          <GlassCard
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group"
          >
            <motion.div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/15 to-orange-500/15 transition-colors group-hover:from-red-500/25 group-hover:to-orange-500/25"
              whileHover={{ rotate: 10 }}
            >
              <DynamicIcon
                name={item.icon}
                className="h-5 w-5 text-red-400"
              />
            </motion.div>
            <h3 className="mb-2 text-base font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
