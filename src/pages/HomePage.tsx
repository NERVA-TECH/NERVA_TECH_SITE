import { HeroSection } from "@/components/home/HeroSection";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { TransformSection } from "@/components/home/TransformSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CasesSection } from "@/components/home/CasesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechSection } from "@/components/home/TechSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <TransformSection />
      <ServicesSection />
      <CasesSection />
      <ProcessSection />
      <TechSection />
    </>
  );
}
