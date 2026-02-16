"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { ObjectivesSection } from "@/components/sections/objectives-section";
import { SystemOverviewSection } from "@/components/sections/system-overview-section";
import { UserManagementSection } from "@/components/sections/user-management-section";
import { AIEngineSection } from "@/components/sections/ai-engine-section";
import { RealtimeSection } from "@/components/sections/realtime-section";
import { NotesAISection } from "@/components/sections/notes-ai-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { SecuritySection } from "@/components/sections/security-section";
import { OutcomesSection } from "@/components/sections/outcomes-section";
import { FutureSection } from "@/components/sections/future-section";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-64">
        <HeroSection />
        <IntroductionSection />
        <ObjectivesSection />
        <SystemOverviewSection />
        <UserManagementSection />
        <AIEngineSection />
        <RealtimeSection />
        <NotesAISection />
        <ArchitectureSection />
        <TechStackSection />
        <SecuritySection />
        <OutcomesSection />
        <FutureSection />
      </main>
    </>
  );
}
