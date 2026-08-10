import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

/* Each problem has a mini animated SVG illustration */

function ManualProcessAnim() {
  return (
    <svg viewBox="0 0 160 80" className="w-full h-16 md:h-20" aria-hidden="true">
      <rect x="15" y="20" width="40" height="40" rx="4" className="fill-muted stroke-foreground/30" strokeWidth="1.5" />
      <rect x="105" y="20" width="40" height="40" rx="4" className="fill-muted stroke-foreground/30" strokeWidth="1.5" />
      <line x1="58" y1="40" x2="102" y2="40" className="stroke-foreground/20" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle r="5" className="fill-primary">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 35 40 L 80 30 L 125 40 L 80 50 Z" />
      </circle>
      <line x1="22" y1="32" x2="46" y2="32" className="stroke-foreground/20" strokeWidth="2" />
      <line x1="22" y1="38" x2="42" y2="38" className="stroke-foreground/15" strokeWidth="2" />
      <line x1="22" y1="44" x2="48" y2="44" className="stroke-foreground/20" strokeWidth="2" />
      <line x1="112" y1="32" x2="136" y2="32" className="stroke-foreground/20" strokeWidth="2" />
      <line x1="112" y1="38" x2="132" y2="38" className="stroke-foreground/15" strokeWidth="2" />
      <line x1="112" y1="44" x2="138" y2="44" className="stroke-foreground/20" strokeWidth="2" />
    </svg>
  );
}

function DisconnectedAnim() {
  return (
    <svg viewBox="0 0 160 80" className="w-full h-16 md:h-20" aria-hidden="true">
      <circle cx="30" cy="40" r="14" className="fill-muted stroke-foreground/30" strokeWidth="1.5" />
      <circle cx="80" cy="28" r="14" className="fill-muted stroke-foreground/30" strokeWidth="1.5" />
      <circle cx="130" cy="45" r="14" className="fill-muted stroke-foreground/30" strokeWidth="1.5" />
      <line x1="44" y1="35" x2="66" y2="30" className="stroke-red-500/60" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="94" y1="33" x2="116" y2="40" className="stroke-red-500/60" strokeWidth="1.5" strokeDasharray="3 3" />
      <g className="animate-pulse">
        <line x1="52" y1="28" x2="58" y2="34" className="stroke-red-500" strokeWidth="2" />
        <line x1="58" y1="28" x2="52" y2="34" className="stroke-red-500" strokeWidth="2" />
      </g>
      <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
        <line x1="102" y1="33" x2="108" y2="39" className="stroke-red-500" strokeWidth="2" />
        <line x1="108" y1="33" x2="102" y2="39" className="stroke-red-500" strokeWidth="2" />
      </g>
      <text x="30" y="44" textAnchor="middle" className="fill-foreground/70" style={{ fontSize: "7px", fontWeight: 500 }}>ERP</text>
      <text x="80" y="32" textAnchor="middle" className="fill-foreground/70" style={{ fontSize: "7px", fontWeight: 500 }}>CRM</text>
      <text x="130" y="49" textAnchor="middle" className="fill-foreground/70" style={{ fontSize: "7px", fontWeight: 500 }}>WMS</text>
    </svg>
  );
}

function SpreadsheetAnim() {
  return (
    <svg viewBox="0 0 120 70" className="w-full h-14 md:h-16" aria-hidden="true">
      <rect x="20" y="10" width="80" height="50" rx="4" className="fill-muted stroke-foreground/30" strokeWidth="1.5" />
      <line x1="20" y1="23" x2="100" y2="23" className="stroke-foreground/15" strokeWidth="0.8" />
      <line x1="20" y1="35" x2="100" y2="35" className="stroke-foreground/15" strokeWidth="0.8" />
      <line x1="20" y1="47" x2="100" y2="47" className="stroke-foreground/15" strokeWidth="0.8" />
      <line x1="48" y1="10" x2="48" y2="60" className="stroke-foreground/15" strokeWidth="0.8" />
      <line x1="74" y1="10" x2="74" y2="60" className="stroke-foreground/15" strokeWidth="0.8" />
      <rect x="49" y="24" width="24" height="10" className="fill-yellow-400/40">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="75" y="36" width="24" height="10" className="fill-red-400/40">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
      </rect>
      <g className="animate-pulse">
        <circle cx="108" cy="14" r="6" className="fill-yellow-500/30" />
        <text x="108" y="17" textAnchor="middle" className="fill-yellow-600" style={{ fontSize: "8px", fontWeight: "bold" }}>!</text>
      </g>
    </svg>
  );
}

function ReworkAnim() {
  return (
    <svg viewBox="0 0 120 70" className="w-full h-14 md:h-16" aria-hidden="true">
      <circle cx="60" cy="35" r="20" fill="none" className="stroke-foreground/20" strokeWidth="2" strokeDasharray="4 3" />
      <circle r="5" className="fill-primary">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 15 A 20 20 0 1 1 59.99 15" />
      </circle>
      <line x1="15" y1="35" x2="37" y2="35" className="stroke-foreground/30" strokeWidth="2" />
      <polygon points="35,31 41,35 35,39" className="fill-foreground/30" />
      <text x="60" y="39" textAnchor="middle" className="fill-foreground/40 font-mono" style={{ fontSize: "10px" }}>∞</text>
    </svg>
  );
}

function VisibilityAnim() {
  return (
    <svg viewBox="0 0 160 70" className="w-full h-14 md:h-16" aria-hidden="true">
      <ellipse cx="80" cy="35" rx="28" ry="16" fill="none" className="stroke-foreground/30" strokeWidth="2" />
      <ellipse cx="80" cy="35" rx="28" ry="16" className="fill-background">
        <animate attributeName="ry" values="0;16;16;0" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="80" cy="35" r="7" className="fill-foreground/20">
        <animate attributeName="opacity" values="1;1;0;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="35" r="3.5" className="fill-foreground/40">
        <animate attributeName="opacity" values="1;1;0;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <g>
        <animate attributeName="opacity" values="0;0;1;1" dur="3s" repeatCount="indefinite" />
        <circle cx="120" cy="15" r="8" className="fill-red-500/20" />
        <text x="120" y="19" textAnchor="middle" className="fill-red-500" style={{ fontSize: "10px", fontWeight: "bold" }}>!</text>
      </g>
    </svg>
  );
}

const problems = [
  {
    id: "manual",
    title: "Processos manuais",
    description: "Sua equipe ainda copia informações de uma ferramenta para outra.",
    Anim: ManualProcessAnim,
  },
  {
    id: "disconnected",
    title: "Sistemas desconectados",
    description: "ERP, CRM, e-commerce e sistemas internos não conversam.",
    Anim: DisconnectedAnim,
  },
  {
    id: "spreadsheets",
    title: "Planilhas críticas",
    description: "Processos importantes dependem de arquivos que ninguém controla.",
    Anim: SpreadsheetAnim,
  },
  {
    id: "rework",
    title: "Retrabalho",
    description: "Uma mesma informação precisa ser cadastrada mais de uma vez.",
    Anim: ReworkAnim,
  },
  {
    id: "visibility",
    title: "Falta de visibilidade",
    description: "Os gestores descobrem problemas tarde demais.",
    Anim: VisibilityAnim,
  },
];

export function ProblemsSection() {
  return (
    <SectionContainer id="problemas">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl text-foreground mb-4">
          Onde sua operação trava?
        </h2>
        <p className="font-sans text-base text-muted-foreground max-w-2xl mb-16">
          Situações comuns que impedem sua empresa de operar com eficiência.
        </p>
      </ScrollReveal>

      {/* Asymmetric editorial grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1 — Large (7 cols) */}
        <ScrollReveal delay={0} className="md:col-span-7">
          <div className="group h-full p-8 md:p-10 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40">
            <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
              <ManualProcessAnim />
            </div>
            <h3 className="text-2xl md:text-3xl text-foreground mb-3">{problems[0].title}</h3>
            <p className="text-base text-muted-foreground font-sans max-w-md">{problems[0].description}</p>
          </div>
        </ScrollReveal>

        {/* Card 2 — Medium (5 cols) */}
        <ScrollReveal delay={100} className="md:col-span-5">
          <div className="group h-full p-8 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40">
            <div className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
              <DisconnectedAnim />
            </div>
            <h3 className="text-xl md:text-2xl text-foreground mb-2">{problems[1].title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{problems[1].description}</p>
          </div>
        </ScrollReveal>

        {/* Card 3 — Small (4 cols) */}
        <ScrollReveal delay={200} className="md:col-span-4">
          <div className="group h-full p-6 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40">
            <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <SpreadsheetAnim />
            </div>
            <h3 className="text-lg text-foreground mb-2">{problems[2].title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{problems[2].description}</p>
          </div>
        </ScrollReveal>

        {/* Card 4 — Small (4 cols) */}
        <ScrollReveal delay={300} className="md:col-span-4">
          <div className="group h-full p-6 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40">
            <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <ReworkAnim />
            </div>
            <h3 className="text-lg text-foreground mb-2">{problems[3].title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{problems[3].description}</p>
          </div>
        </ScrollReveal>

        {/* Card 5 — Small (4 cols) */}
        <ScrollReveal delay={400} className="md:col-span-4">
          <div className="group h-full p-6 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 bg-card/40">
            <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <VisibilityAnim />
            </div>
            <h3 className="text-lg text-foreground mb-2">{problems[4].title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{problems[4].description}</p>
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
