"use client";

import { userManagement } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { KeyRound, User, ShieldCheck, Lock } from "lucide-react";
import { CheckCircle } from "lucide-react";

const featureIcons = [KeyRound, User, ShieldCheck, Lock];

export function UserManagementSection() {
  return (
    <SectionWrapper
      id="user-management"
      title="User Management Module"
      subtitle={userManagement.description}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {userManagement.features.map((feature, i) => {
          const Icon = featureIcons[i] || KeyRound;
          return (
            <GlassCard
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/15">
                  <Icon className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {feature.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
