import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

function SystemNode({ x, y, size, pattern, delay }: { x: number; y: number; size: number; pattern: number; delay: number }) {
  const colors = ["hsl(80, 68%, 52%)", "hsl(280, 60%, 65%)", "hsl(200, 70%, 60%)", "hsl(340, 60%, 60%)", "hsl(45, 80%, 60%)"];
  const color = colors[pattern % colors.length];

  return (
    <g style={{ animationDelay: `${delay}ms` }}>
      {/* Stand */}
      <rect x={x + size/2 - 3} y={y + size} width={6} height={14} rx={3} className="fill-border" />
      <rect x={x + size/2 - 10} y={y + size + 12} width={20} height={4} rx={2} className="fill-border" />

      {/* Monitor frame */}
      <rect
        x={x}
        y={y}
        width={size}
        height={size}
        rx={8}
        className="fill-card stroke-primary/30"
        strokeWidth={2}
      />

      {/* Inner screen */}
      <rect
        x={x + 6}
        y={y + 6}
        width={size - 12}
        height={size - 12}
        rx={4}
        className="fill-background"
      />

      {/* Abstract pattern inside */}
      <circle cx={x + size/2} cy={y + size/2} r={size/5} fill="none" stroke={color} strokeWidth={1.5} opacity={0.8} />
      <circle cx={x + size/2} cy={y + size/2} r={size/8} fill="none" stroke={color} strokeWidth={1} opacity={0.5} />
      {pattern % 2 === 0 && (
        <>
          <line x1={x + size/4} y1={y + size/2} x2={x + size*3/4} y2={y + size/2} stroke={color} strokeWidth={1} opacity={0.4} />
          <line x1={x + size/2} y1={y + size/4} x2={x + size/2} y2={y + size*3/4} stroke={color} strokeWidth={1} opacity={0.4} />
        </>
      )}
      {pattern % 3 === 0 && (
        <rect x={x + size/3} y={y + size/3} width={size/3} height={size/3} fill="none" stroke={color} strokeWidth={1} opacity={0.5} rx={2} transform={`rotate(45, ${x + size/2}, ${y + size/2})`} />
      )}
    </g>
  );
}

function ConnectionWire({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const ctrlY = midY + 20;

  return (
    <path
      d={`M ${x1} ${y1} Q ${midX} ${ctrlY} ${x2} ${y2}`}
      fill="none"
      className="stroke-border"
      strokeWidth={2}
      strokeLinecap="round"
    />
  );
}

export function TransformSection() {
  return (
    <section className="relative overflow-hidden py-section-mobile lg:py-section">
      {/* Left SVG illustration */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 hidden lg:block opacity-80">
        <svg viewBox="0 0 200 500" className="w-full h-full" aria-hidden="true">
          <SystemNode x={20} y={30} size={60} pattern={0} delay={0} />
          <SystemNode x={80} y={140} size={50} pattern={1} delay={200} />
          <SystemNode x={30} y={260} size={55} pattern={2} delay={400} />
          <SystemNode x={90} y={370} size={48} pattern={3} delay={600} />

          <ConnectionWire x1={50} y1={90} x2={105} y2={140} />
          <ConnectionWire x1={105} y1={190} x2={57} y2={260} />
          <ConnectionWire x1={57} y1={315} x2={114} y2={370} />
        </svg>
      </div>

      {/* Right SVG illustration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 hidden lg:block opacity-80">
        <svg viewBox="0 0 200 500" className="w-full h-full" aria-hidden="true">
          <SystemNode x={100} y={50} size={55} pattern={4} delay={100} />
          <SystemNode x={40} y={170} size={48} pattern={2} delay={300} />
          <SystemNode x={110} y={280} size={58} pattern={0} delay={500} />
          <SystemNode x={50} y={400} size={50} pattern={1} delay={700} />

          <ConnectionWire x1={127} y1={105} x2={64} y2={170} />
          <ConnectionWire x1={64} y1={218} x2={139} y2={280} />
          <ConnectionWire x1={139} y1={338} x2={75} y2={400} />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            A camada que conecta sua operação
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[1.1]">
            Sistemas isolados.<br />
            <span className="font-bold">A Nerva conecta<br />tudo isso.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* Central icon/symbol */}
          <div className="w-16 h-16 mx-auto mb-10 relative">
            <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
              <circle cx="32" cy="32" r="12" fill="none" className="stroke-primary" strokeWidth={2} />
              <circle cx="32" cy="32" r="6" className="fill-primary/20" />
              <circle cx="32" cy="32" r="3" className="fill-primary" />
              <line x1="20" y1="32" x2="12" y2="32" className="stroke-primary/60" strokeWidth={1.5} />
              <line x1="44" y1="32" x2="52" y2="32" className="stroke-primary/60" strokeWidth={1.5} />
              <line x1="32" y1="20" x2="32" y2="12" className="stroke-primary/60" strokeWidth={1.5} />
              <line x1="32" y1="44" x2="32" y2="52" className="stroke-primary/60" strokeWidth={1.5} />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
            CRM, ERP, e-commerce, financeiro, logística e planilhas
            conectados por uma camada de engenharia e automação.
            Sem plataforma genérica. Sob medida para sua operação.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <a
            href="#servicos"
            className="inline-flex items-center px-7 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Explorar soluções
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
