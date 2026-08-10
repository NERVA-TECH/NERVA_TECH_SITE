import { SectionContainer } from "@/components/shared/SectionContainer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

/* Each problem has a mini animated SVG illustration */

function ManualProcessAnim() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* Two boxes with a dot bouncing between them — manual copy/paste */}
      <rect x="10" y="25" width="35" height="30" rx="4" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="75" y="25" width="35" height="30" rx="4" className="fill-card stroke-border" strokeWidth="1.5" />
      {/* Arrow */}
      <line x1="48" y1="40" x2="72" y2="40" className="stroke-muted-foreground/40" strokeWidth="1" strokeDasharray="3 2" />
      {/* Bouncing dot */}
      <circle r="4" className="fill-red-400/80">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 27 40 L 60 30 L 92 40 L 60 50 Z" />
      </circle>
      {/* Little lines inside boxes = data */}
      <line x1="16" y1="35" x2="36" y2="35" className="stroke-muted-foreground/30" strokeWidth="1.5" />
      <line x1="16" y1="40" x2="32" y2="40" className="stroke-muted-foreground/30" strokeWidth="1.5" />
      <line x1="16" y1="45" x2="38" y2="45" className="stroke-muted-foreground/30" strokeWidth="1.5" />
      <line x1="81" y1="35" x2="101" y2="35" className="stroke-muted-foreground/30" strokeWidth="1.5" />
      <line x1="81" y1="40" x2="97" y2="40" className="stroke-muted-foreground/30" strokeWidth="1.5" />
      <line x1="81" y1="45" x2="103" y2="45" className="stroke-muted-foreground/30" strokeWidth="1.5" />
    </svg>
  );
}

function DisconnectedAnim() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* Three nodes trying to connect but failing — broken lines */}
      <circle cx="25" cy="40" r="12" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="12" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="95" cy="45" r="12" className="fill-card stroke-border" strokeWidth="1.5" />
      {/* Broken connections — dashed with X */}
      <line x1="37" y1="35" x2="48" y2="28" className="stroke-red-400/60" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="72" y1="30" x2="83" y2="38" className="stroke-red-400/60" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Pulsing X marks */}
      <g className="animate-pulse">
        <line x1="40" y1="28" x2="46" y2="34" className="stroke-red-400" strokeWidth="1.5" />
        <line x1="46" y1="28" x2="40" y2="34" className="stroke-red-400" strokeWidth="1.5" />
      </g>
      <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
        <line x1="75" y1="31" x2="81" y2="37" className="stroke-red-400" strokeWidth="1.5" />
        <line x1="81" y1="31" x2="75" y2="37" className="stroke-red-400" strokeWidth="1.5" />
      </g>
      {/* Labels */}
      <text x="25" y="44" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: "6px" }}>ERP</text>
      <text x="60" y="29" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: "6px" }}>CRM</text>
      <text x="95" y="49" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: "6px" }}>WMS</text>
    </svg>
  );
}

function SpreadsheetAnim() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* Spreadsheet with cells flickering — unstable */}
      <rect x="20" y="15" width="80" height="50" rx="4" className="fill-card stroke-border" strokeWidth="1.5" />
      {/* Grid lines */}
      <line x1="20" y1="28" x2="100" y2="28" className="stroke-border" strokeWidth="0.5" />
      <line x1="20" y1="40" x2="100" y2="40" className="stroke-border" strokeWidth="0.5" />
      <line x1="20" y1="52" x2="100" y2="52" className="stroke-border" strokeWidth="0.5" />
      <line x1="45" y1="15" x2="45" y2="65" className="stroke-border" strokeWidth="0.5" />
      <line x1="72" y1="15" x2="72" y2="65" className="stroke-border" strokeWidth="0.5" />
      {/* Flickering cells — opacity animation */}
      <rect x="46" y="29" width="25" height="10" className="fill-yellow-400/20">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="73" y="41" width="26" height="10" className="fill-red-400/20">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="21" y="53" width="23" height="10" className="fill-yellow-400/20">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
      </rect>
      {/* Warning icon */}
      <g className="animate-pulse">
        <circle cx="108" cy="18" r="6" className="fill-yellow-400/20" />
        <text x="108" y="21" textAnchor="middle" className="fill-yellow-400" style={{ fontSize: "8px", fontWeight: "bold" }}>!</text>
      </g>
    </svg>
  );
}

function ReworkAnim() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* Circular loop — data going in circles */}
      <circle cx="60" cy="40" r="22" fill="none" className="stroke-border" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Orbiting dot — infinite loop */}
      <circle r="4" className="fill-orange-400/80">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 18 A 22 22 0 1 1 59.99 18" />
      </circle>
      {/* Entry arrow that goes nowhere */}
      <line x1="10" y1="40" x2="35" y2="40" className="stroke-muted-foreground/40" strokeWidth="1.5" />
      <polygon points="33,37 38,40 33,43" className="fill-muted-foreground/40" />
      {/* Loop symbol */}
      <text x="60" y="44" textAnchor="middle" className="fill-muted-foreground/60 font-mono" style={{ fontSize: "8px" }}>∞</text>
    </svg>
  );
}

function VisibilityAnim() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* Eye that keeps blinking/closing — can't see */}
      <ellipse cx="60" cy="40" rx="25" ry="16" fill="none" className="stroke-muted-foreground/40" strokeWidth="1.5" />
      {/* Eyelid closing animation */}
      <ellipse cx="60" cy="40" rx="25" ry="16" className="fill-background">
        <animate attributeName="ry" values="0;16;16;0" dur="3s" repeatCount="indefinite" />
      </ellipse>
      {/* Pupil */}
      <circle cx="60" cy="40" r="6" className="fill-muted-foreground/30">
        <animate attributeName="opacity" values="1;1;0;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="40" r="3" className="fill-muted-foreground/50">
        <animate attributeName="opacity" values="1;1;0;0" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Alert that appears when eye closes */}
      <g>
        <animate attributeName="opacity" values="0;0;1;1" dur="3s" repeatCount="indefinite" />
        <circle cx="95" cy="20" r="7" className="fill-red-400/20" />
        <text x="95" y="23" textAnchor="middle" className="fill-red-400" style={{ fontSize: "9px", fontWeight: "bold" }}>!</text>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <ScrollReveal key={problem.id} delay={index * 120}>
            <div className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-300 bg-card/30">
              {/* Animated illustration */}
              <div className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                <problem.Anim />
              </div>

              {/* Text */}
              <h3 className="text-xl text-foreground mb-2 font-sans font-medium">{problem.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{problem.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
