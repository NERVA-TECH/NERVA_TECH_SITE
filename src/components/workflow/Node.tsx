import { cn } from "@/lib/utils";

interface NodeProps {
  x: number;
  y: number;
  label?: string;
  active?: boolean;
  size?: number;
  type?: "system" | "process" | "hub";
}

export function WorkflowNode({ x, y, label, active = false, size = 32, type = "system" }: NodeProps) {
  const radius = size / 2;

  return (
    <g>
      {/* Glow effect when active */}
      {active && (
        <circle
          cx={x}
          cy={y}
          r={radius + 6}
          className="fill-primary/20"
          style={{ filter: "blur(4px)" }}
        />
      )}

      {/* Node circle */}
      <circle
        cx={x}
        cy={y}
        r={radius}
        className={cn(
          "transition-all duration-500",
          active
            ? "fill-primary/10 stroke-primary"
            : "fill-card stroke-border"
        )}
        strokeWidth={1.5}
      />

      {/* Label */}
      {label && (
        <text
          x={x}
          y={y + radius + 18}
          textAnchor="middle"
          className="fill-muted-foreground font-mono"
          style={{ fontSize: "10px" }}
        >
          {label}
        </text>
      )}
    </g>
  );
}
