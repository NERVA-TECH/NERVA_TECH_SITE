import { WorkflowNode } from "./Node";
import { ConnectionLine } from "./ConnectionLine";
import { cn } from "@/lib/utils";

interface TransformHubProps {
  className?: string;
}

const peripheralSystems = [
  { id: "crm", label: "CRM", angle: 0 },
  { id: "erp", label: "ERP", angle: 60 },
  { id: "ecommerce", label: "E-commerce", angle: 120 },
  { id: "financeiro", label: "Financeiro", angle: 180 },
  { id: "logistica", label: "Logística", angle: 240 },
  { id: "planilhas", label: "Planilhas", angle: 300 },
];

const centerX = 220;
const centerY = 140;
const radius = 110;

function getPosition(angle: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: centerX + radius * Math.cos(rad),
    y: centerY + radius * Math.sin(rad),
  };
}

export function TransformHub({ className }: TransformHubProps) {
  return (
    <svg
      viewBox="0 0 440 280"
      className={cn("w-full h-auto max-w-xl mx-auto", className)}
      aria-label="Diagrama mostrando CRM, ERP, E-commerce, Financeiro, Logística e Planilhas conectados a um hub central Nerva"
      role="img"
    >
      {/* Connections from peripherals to center */}
      {peripheralSystems.map((system, i) => {
        const pos = getPosition(system.angle);
        return (
          <ConnectionLine
            key={system.id}
            x1={pos.x}
            y1={pos.y}
            x2={centerX}
            y2={centerY}
            active={true}
            delay={i * 0.5}
          />
        );
      })}

      {/* Peripheral nodes */}
      {peripheralSystems.map((system) => {
        const pos = getPosition(system.angle);
        return (
          <WorkflowNode
            key={system.id}
            x={pos.x}
            y={pos.y}
            label={system.label}
            size={28}
            type="system"
          />
        );
      })}

      {/* Central NERVA node */}
      <WorkflowNode
        x={centerX}
        y={centerY}
        label="NERVA"
        active={true}
        size={48}
        type="hub"
      />
    </svg>
  );
}
