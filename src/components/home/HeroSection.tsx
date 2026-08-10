import { WorkflowVisualization } from "@/components/workflow/WorkflowVisualization";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Sentinel for sticky header */}
      <div id="hero-sentinel" className="absolute top-0 h-1 w-full" />

      <div className="container mx-auto px-6 py-section-mobile lg:py-section">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Left column: text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.05] text-foreground">
              Sua operação não precisa funcionar no braço.
            </h1>

            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Automatizamos processos, conectamos sistemas e desenvolvemos
              software para tornar sua operação mais eficiente, integrada e
              inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/automatizar"
                className="inline-flex items-center justify-center px-7 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Automatizar minha operação
              </a>
              <a
                href="#processo"
                className="inline-flex items-center justify-center px-7 py-3 border border-foreground/30 text-foreground font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:border-foreground hover:bg-foreground/5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Right column: workflow */}
          <div className="lg:pl-8">
            <WorkflowVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}
