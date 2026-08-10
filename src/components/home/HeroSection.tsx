import { useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/*
  Organic network visualization — "nervous system" of an operation.
  NOT a workflow builder, BPMN, dashboard, or editable tool.
  This is an editorial illustration of signals traveling through connected systems.
*/

interface NodeDef {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface ConnectionDef {
  from: string;
  to: string;
}

// Organic, non-grid distribution — like a neural network map
const nodes: NodeDef[] = [
  { id: "pedido", label: "Pedido", x: 55, y: 65 },
  { id: "validacao", label: "Validação", x: 175, y: 38 },
  { id: "estoque", label: "Estoque", x: 290, y: 72 },
  { id: "erp", label: "ERP", x: 380, y: 28 },
  { id: "financeiro", label: "Financeiro", x: 440, y: 110 },
  { id: "logistica", label: "Logística", x: 320, y: 155 },
  { id: "cliente", label: "Cliente", x: 170, y: 148 },
];

const connections: ConnectionDef[] = [
  { from: "pedido", to: "validacao" },
  { from: "validacao", to: "estoque" },
  { from: "estoque", to: "erp" },
  { from: "estoque", to: "financeiro" },
  { from: "financeiro", to: "logistica" },
  { from: "logistica", to: "cliente" },
  { from: "validacao", to: "cliente" }, // secondary subtle connection
];

// The signal path through the network
const signalPath = ["pedido", "validacao", "estoque", "erp", "financeiro", "logistica", "cliente"];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

function HeroNetwork() {
  const prefersReducedMotion = useReducedMotion();
  const [activeNodes, setActiveNodes] = useState<string[]>([signalPath[0]]);
  const [completedCycle, setCompletedCycle] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        const next = prev + 1;

        if (next >= signalPath.length) {
          // Show check, pause, then restart
          setCompletedCycle(true);
          setTimeout(() => {
            setCompletedCycle(false);
            setActiveNodes([signalPath[0]]);
            setStepIndex(0);
          }, 2000);
          return prev;
        }

        // Only 1-2 nodes active at a time
        const active = [signalPath[next]];
        if (next > 0) active.unshift(signalPath[next - 1]);
        setActiveNodes(active.slice(-2));
        return next;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <svg
      viewBox="0 0 500 190"
      className="w-full h-auto"
      aria-label="Representação visual de uma operação conectada: pedido percorrendo validação, ERP, financeiro, logística até o cliente"
      role="img"
    >
      {/* Connections — thin, subtle curves */}
      {connections.map((conn, i) => {
        const from = getNode(conn.from);
        const to = getNode(conn.to);
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        // Subtle curve offset
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const offsetX = -dy * 0.12;
        const offsetY = dx * 0.12;
        const ctrlX = midX + offsetX;
        const ctrlY = midY + offsetY;
        const pathD = `M ${from.x} ${from.y} Q ${ctrlX} ${ctrlY} ${to.x} ${to.y}`;
        const pathId = `conn-${i}`;

        const isOnSignalPath =
          signalPath.includes(conn.from) &&
          signalPath.includes(conn.to) &&
          Math.abs(signalPath.indexOf(conn.from) - signalPath.indexOf(conn.to)) === 1;

        const isActive =
          activeNodes.includes(conn.from) || activeNodes.includes(conn.to);

        return (
          <g key={pathId}>
            <defs>
              <path id={pathId} d={pathD} />
            </defs>
            {/* Connection line */}
            <path
              d={pathD}
              fill="none"
              stroke={isActive ? "hsl(80, 68%, 44%)" : "hsl(260, 15%, 78%)"}
              strokeWidth={isActive ? 1.2 : 0.8}
              opacity={isActive ? 0.6 : 0.35}
              className="transition-all duration-700"
            />
            {/* Signal pulse — only on active signal-path connections */}
            {isOnSignalPath && isActive && !prefersReducedMotion && !completedCycle && (
              <circle r="3" fill="hsl(80, 68%, 44%)" opacity="0.9">
                <animateMotion dur="1.5s" repeatCount="1" fill="freeze">
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.5s" repeatCount="1" fill="freeze" />
              </circle>
            )}
          </g>
        );
      })}

      {/* Nodes — small circles, off-white, very subtle */}
      {nodes.map((node) => {
        const isActive = activeNodes.includes(node.id);
        const isCompleted = completedCycle && node.id === "cliente";

        return (
          <g key={node.id}>
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={isActive ? 10 : 8}
              fill={isActive ? "hsl(80, 68%, 44%)" : "hsl(260, 10%, 95%)"}
              stroke={isActive ? "hsl(80, 68%, 38%)" : "hsl(260, 10%, 82%)"}
              strokeWidth={isActive ? 1.5 : 0.8}
              opacity={isActive ? 1 : 0.8}
              className="transition-all duration-500"
            />

            {/* Check mark on completion */}
            {isCompleted && (
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill="hsl(80, 68%, 38%)"
                style={{ fontSize: "10px" }}
              >
                ✓
              </text>
            )}

            {/* Label — sans-serif, close to node */}
            <text
              x={node.x}
              y={node.y + (node.y < 100 ? -16 : 22)}
              textAnchor="middle"
              fill={isActive ? "hsl(260, 40%, 16%)" : "hsl(260, 10%, 55%)"}
              style={{
                fontSize: "10px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: isActive ? 500 : 400,
              }}
              className="transition-all duration-500"
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative">
      <div id="hero-sentinel" className="absolute top-0 h-1 w-full" />

      <div className="container mx-auto px-6 py-12 lg:py-section">
        {/* Text */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-[84px] leading-[1.05] text-foreground mb-8">
            Sua operação não precisa funcionar no braço.
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            Automatizamos processos, conectamos sistemas e desenvolvemos
            software para tornar sua operação mais eficiente, integrada e
            inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/automatizar"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Mostre onde sua operação trava
            </a>
            <a
              href="/#processo"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:border-foreground hover:bg-foreground/5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        {/* Network visualization — large, editorial, organic */}
        <div className="max-w-4xl mx-auto lg:mx-0">
          <HeroNetwork />
        </div>
      </div>
    </section>
  );
}
