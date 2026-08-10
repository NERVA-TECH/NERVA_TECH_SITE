import { technologies } from "@/data/technologies";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function TechWorkflow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 800 100" className="w-full h-auto opacity-60" aria-hidden="true">
      {/* A horizontal pipeline with data flowing through */}
      {technologies.map((tech, i) => {
        const x = 40 + i * 65;
        return (
          <g key={tech}>
            <circle cx={x} cy={50} r={8} fill="none" stroke="hsl(80, 68%, 44%)" strokeWidth={1} opacity={0.4} />
            <text x={x} y={75} textAnchor="middle" fill="hsl(0, 0%, 60%)" style={{ fontSize: "7px", fontFamily: "JetBrains Mono" }}>
              {tech}
            </text>
            {i < technologies.length - 1 && (
              <line x1={x + 10} y1={50} x2={x + 55} y2={50} stroke="hsl(0, 0%, 30%)" strokeWidth={1} />
            )}
          </g>
        );
      })}
      {/* Animated pulse traveling the pipeline */}
      {!prefersReducedMotion && (
        <circle r="4" fill="hsl(80, 68%, 44%)" opacity="0.8">
          <animateMotion dur="6s" repeatCount="indefinite" path={`M 40 50 L ${40 + 11 * 65} 50`} />
          <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  );
}

export function TechSection() {
  return (
    <section id="tecnologia" className="bg-[hsl(260,30%,8%)] text-white py-section-mobile lg:py-section">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-3xl md:text-5xl text-center text-white/90 mb-6 font-serif italic leading-tight">
            Tecnologia é a infraestrutura.<br />
            <span className="text-white/60">A operação é o objetivo.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-16 max-w-4xl mx-auto">
            <TechWorkflow />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4 max-w-3xl mx-auto">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="text-center py-2 font-mono text-xs text-white/40 uppercase tracking-wider"
              >
                {tech}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
