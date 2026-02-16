"use client";

import { realtimeComm } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Radio, CheckCircle, MessageCircle, UsersRound, RefreshCcw } from "lucide-react";

const featureIcons = [MessageCircle, UsersRound, RefreshCcw];

export function RealtimeSection() {
  return (
    <SectionWrapper
      id="realtime"
      title="Real-Time Communication"
      subtitle={realtimeComm.description}
    >
      {/* Architecture highlights */}
      <GlassCard
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-4 flex items-center gap-2">
          <Radio className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">
            WebSocket Architecture
          </h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {realtimeComm.architecture.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Feature cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {realtimeComm.features.map((feature, i) => {
          const Icon = featureIcons[i] || Radio;
          return (
            <GlassCard
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15">
                  <Icon className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
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
                    transition={{ delay: 0.15 + j * 0.05, duration: 0.3 }}
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
