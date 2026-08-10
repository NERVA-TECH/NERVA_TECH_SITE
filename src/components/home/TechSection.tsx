import { technologies } from "@/data/technologies";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function TechSection() {
  return (
    <SectionContainer id="tecnologia" className="py-16 lg:py-24">
      <ScrollReveal>
        <p className="text-2xl md:text-3xl text-center text-muted-foreground mb-16 font-serif italic">
          Tecnologia é a infraestrutura. A operação é o objetivo.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="text-center py-3 font-mono text-xs text-muted-foreground/70 uppercase tracking-wider"
            >
              {tech}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
