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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 100}>
            <div className="p-8 border border-border rounded-lg hover:border-primary/50 transition-colors duration-300 bg-card/50 h-full">
              <MonospaceLabel className="mb-5 block text-primary">{service.number}</MonospaceLabel>
              <h3 className="text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
