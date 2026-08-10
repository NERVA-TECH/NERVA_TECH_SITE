import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ConnectionLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  active?: boolean;
  delay?: number;
}

export function ConnectionLine({ x1, y1, x2, y2, active = false, delay = 0 }: ConnectionLineProps) {
  const prefersReducedMotion = useReducedMotion();

  // Create a curved path between two points
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  // Slight curve offset
  const offsetX = -dy * 0.15;
  const offsetY = dx * 0.15;
  const ctrlX = midX + offsetX;
  const ctrlY = midY + offsetY;

  const pathD = `M ${x1} ${y1} Q ${ctrlX} ${ctrlY} ${x2} ${y2}`;
  const pathId = `path-${x1}-${y1}-${x2}-${y2}`;

  return (
    <g>
      <defs>
        <path id={pathId} d={pathD} />
      </defs>

      {/* Connection line */}
      <path
        d={pathD}
        fill="none"
        strokeWidth={1.5}
        className={active ? "stroke-primary/60" : "stroke-border"}
      />

      {/* Signal pulse */}
      {active && !prefersReducedMotion && (
        <circle r="3" className="fill-primary">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="3s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </circle>
      )}
    </g>
  );
}
