import { services } from "@/data/services";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonospaceLabel } from "@/components/shared/MonospaceLabel";

export function ServicesSection() {
  return (
    <SectionContainer id="servicos">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl text-foreground mb-4">
          O que mudamos na sua operação.
        </h2>
        <p className="font-sans text-base text-muted-foreground max-w-2xl mb-16">
          Quatro frentes de atuação para transformar como sua empresa opera.
        </p>
      </ScrollReveal>

      {/* Asymmetric layout: 2 large + 2 medium */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1 — Automatizamos (large, 8 cols) */}
        <ScrollReveal delay={0} className="md:col-span-8">
          <div className="h-full p-8 md:p-10 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40 relative overflow-hidden">
            <MonospaceLabel className="text-primary mb-4 block">{services[0].number}</MonospaceLabel>
            <h3 className="text-3xl md:text-4xl text-foreground mb-4">{services[0].title}</h3>
            <p className="text-base text-muted-foreground font-sans max-w-md">{services[0].description}</p>
            {/* Subtle decorative element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border border-primary/10" />
            <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full border border-primary/5" />
          </div>
        </ScrollReveal>

        {/* Card 2 — Integramos (medium, 4 cols) */}
        <ScrollReveal delay={100} className="md:col-span-4">
          <div className="h-full p-6 md:p-8 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40">
            <MonospaceLabel className="text-primary mb-4 block">{services[1].number}</MonospaceLabel>
            <h3 className="text-2xl text-foreground mb-3">{services[1].title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{services[1].description}</p>
          </div>
        </ScrollReveal>

        {/* Card 3 — Construímos (medium, 5 cols) */}
        <ScrollReveal delay={200} className="md:col-span-5">
          <div className="h-full p-6 md:p-8 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40">
            <MonospaceLabel className="text-primary mb-4 block">{services[2].number}</MonospaceLabel>
            <h3 className="text-2xl text-foreground mb-3">{services[2].title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{services[2].description}</p>
          </div>
        </ScrollReveal>

        {/* Card 4 — Tornamos inteligente (large, 7 cols) */}
        <ScrollReveal delay={300} className="md:col-span-7">
          <div className="h-full p-8 md:p-10 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40 relative overflow-hidden">
            <MonospaceLabel className="text-primary mb-4 block">{services[3].number}</MonospaceLabel>
            <h3 className="text-3xl md:text-4xl text-foreground mb-4">{services[3].title}</h3>
            <p className="text-base text-muted-foreground font-sans max-w-md">{services[3].description}</p>
            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-primary/10" />
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
