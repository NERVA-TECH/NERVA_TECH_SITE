import { useState, useEffect } from "react";
import { processSteps } from "@/data/process";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MonospaceLabel } from "@/components/shared/MonospaceLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <SectionContainer id="processo">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl text-foreground mb-4">
          Como trabalhamos.
        </h2>
        <p className="font-sans text-base text-muted-foreground max-w-2xl mb-20">
          Um processo contínuo de entendimento, construção e evolução.
        </p>
      </ScrollReveal>

      {/* Desktop: horizontal animated flow */}
      <div className="hidden md:block">
        <ScrollReveal>
          {/* SVG flow with animated pulses */}
          <div className="relative">
            <svg viewBox="0 0 1000 120" className="w-full h-auto" aria-label="Fluxo de 5 etapas do processo de trabalho da Nerva" role="img">
              {/* Connection lines between nodes */}
              {processSteps.slice(0, -1).map((_, i) => {
                const x1 = 100 + i * 200 + 30;
                const x2 = 100 + (i + 1) * 200 - 30;
                const isActive = i === activeStep || i === activeStep - 1;

                return (
                  <g key={`line-${i}`}>
                    {/* Base line */}
                    <line
                      x1={x1} y1={50} x2={x2} y2={50}
                      className={cn(
                        "transition-all duration-500",
                        isActive ? "stroke-primary/60" : "stroke-border"
                      )}
                      strokeWidth={2}
                    />
                    {/* Animated pulse dot */}
                    {!prefersReducedMotion && (
                      <circle r="4" className="fill-primary">
                        <animate
                          attributeName="opacity"
                          values="0;1;1;0"
                          dur="3s"
                          begin={`${i * 0.6}s`}
                          repeatCount="indefinite"
                        />
                        <animateMotion
                          dur="3s"
                          begin={`${i * 0.6}s`}
                          repeatCount="indefinite"
                          path={`M ${x1} 50 L ${x2} 50`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {processSteps.map((step, i) => {
                const cx = 100 + i * 200;
                const isActive = i === activeStep;

                return (
                  <g key={step.number}>
                    {/* Glow ring when active */}
                    {isActive && !prefersReducedMotion && (
                      <circle cx={cx} cy={50} r={32} className="fill-primary/5 stroke-primary/20" strokeWidth={1}>
                        <animate attributeName="r" values="28;34;28" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Node circle */}
                    <circle
                      cx={cx} cy={50} r={24}
                      className={cn(
                        "transition-all duration-500",
                        isActive
                          ? "fill-primary/15 stroke-primary"
                          : "fill-card stroke-border"
                      )}
                      strokeWidth={isActive ? 2 : 1.5}
                    />

                    {/* Number label */}
                    <text
                      x={cx} y={55}
                      textAnchor="middle"
                      className={cn(
                        "font-mono transition-all duration-500",
                        isActive ? "fill-primary" : "fill-muted-foreground"
                      )}
                      style={{ fontSize: "11px", fontWeight: 500 }}
                    >
                      {step.number}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Labels below */}
            <div className="grid grid-cols-5 gap-4 mt-8">
              {processSteps.map((step, i) => {
                const isActive = i === activeStep;

                return (
                  <div
                    key={step.number}
                    className={cn(
                      "text-center transition-all duration-500",
                      isActive ? "opacity-100" : "opacity-60"
                    )}
                  >
                    <h3 className={cn(
                      "text-lg mb-2 transition-colors duration-500",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile: vertical animated flow */}
      <div className="md:hidden space-y-0">
        {processSteps.map((step, i) => {
          const isActive = i === activeStep;

          return (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="flex gap-5">
                {/* Vertical line + node */}
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 flex-shrink-0",
                    isActive
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  )}>
                    <MonospaceLabel className={cn(
                      "transition-colors duration-500",
                      isActive ? "text-primary" : ""
                    )}>
                      {step.number}
                    </MonospaceLabel>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px h-12 bg-border relative overflow-hidden">
                      {!prefersReducedMotion && (
                        <div className="absolute w-px h-4 bg-primary animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 pt-2">
                  <h3 className={cn(
                    "text-lg mb-1 transition-colors duration-500",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
