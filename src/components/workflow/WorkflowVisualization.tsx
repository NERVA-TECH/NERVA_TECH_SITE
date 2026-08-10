import { useState, useEffect } from "react";
import { WorkflowNode } from "./Node";
import { ConnectionLine } from "./ConnectionLine";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "system" | "process" | "hub";
}

interface ConnectionData {
  from: string;
  to: string;
}

interface WorkflowVisualizationProps {
  className?: string;
}

const nodes: NodeData[] = [
  { id: "pedido", label: "Pedido", x: 60, y: 40, type: "system" },
  { id: "validacao", label: "Validação", x: 180, y: 80, type: "process" },
  { id: "erp", label: "ERP", x: 320, y: 50, type: "system" },
  { id: "financeiro", label: "Financeiro", x: 300, y: 160, type: "system" },
  { id: "logistica", label: "Logística", x: 160, y: 180, type: "system" },
  { id: "concluido", label: "Concluído", x: 380, y: 200, type: "process" },
];

const connections: ConnectionData[] = [
  { from: "pedido", to: "validacao" },
  { from: "validacao", to: "erp" },
  { from: "validacao", to: "financeiro" },
  { from: "erp", to: "logistica" },
  { from: "logistica", to: "concluido" },
];

export function WorkflowVisualization({ className }: WorkflowVisualizationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <svg
      viewBox="0 0 440 240"
      className={cn("w-full h-auto", className)}
      aria-label="Diagrama mostrando um fluxo de pedido sendo processado automaticamente através de validação, ERP, financeiro e logística"
      role="img"
    >
      {/* Connections */}
      {connections.map((conn, i) => {
        const from = getNode(conn.from);
        const to = getNode(conn.to);
        const isActive =
          nodes[activeIndex]?.id === conn.from ||
          nodes[activeIndex]?.id === conn.to;

        return (
          <ConnectionLine
            key={`${conn.from}-${conn.to}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            active={isActive}
            delay={i * 0.6}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <WorkflowNode
          key={node.id}
          x={node.x}
          y={node.y}
          label={node.label}
          active={i === activeIndex}
          size={node.type === "hub" ? 48 : 32}
          type={node.type}
        />
      ))}
    </svg>
  );
}
