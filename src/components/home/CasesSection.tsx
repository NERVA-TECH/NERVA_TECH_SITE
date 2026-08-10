import { cases } from "@/data/cases";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonospaceLabel } from "@/components/shared/MonospaceLabel";

export function CasesSection() {
  return (
    <SectionContainer id="cases">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl text-foreground mb-4">
          Transformações reais.
        </h2>
        <p className="font-sans text-base text-muted-foreground max-w-2xl mb-16">
          Veja como a Nerva transformou operações de ponta a ponta.
        </p>
      </ScrollReveal>

      <div className="space-y-8">
        {cases.map((caseStudy, index) => (
          <ScrollReveal key={caseStudy.id} delay={index * 150}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <MonospaceLabel className="mb-8 block text-primary">{caseStudy.industry}</MonospaceLabel>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                {/* Before */}
                <div className="md:pr-8 md:border-r md:border-border">
                  <MonospaceLabel className="text-red-400/80 mb-3 block">ANTES</MonospaceLabel>
                  <h4 className="font-sans font-medium text-foreground mb-2 text-lg">{caseStudy.before.title}</h4>
                  <p className="text-sm text-muted-foreground font-sans">{caseStudy.before.description}</p>
                </div>

                {/* Arrow (mobile) */}
                <div className="flex md:hidden justify-center text-muted-foreground/50 text-xl">↓</div>

                {/* Nerva */}
                <div className="md:px-8 md:border-r md:border-border">
                  <MonospaceLabel className="text-primary mb-3 block">NERVA</MonospaceLabel>
                  <h4 className="font-sans font-medium text-foreground mb-2 text-lg">{caseStudy.nerva.title}</h4>
                  <p className="text-sm text-muted-foreground font-sans">{caseStudy.nerva.description}</p>
                </div>

                {/* Arrow (mobile) */}
                <div className="flex md:hidden justify-center text-muted-foreground/50 text-xl">↓</div>

                {/* After */}
                <div className="md:pl-8">
                  <MonospaceLabel className="text-primary mb-3 block">DEPOIS</MonospaceLabel>
                  <h4 className="font-sans font-medium text-foreground mb-2 text-lg">{caseStudy.after.title}</h4>
                  <p className="text-sm text-muted-foreground font-sans">{caseStudy.after.description}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
