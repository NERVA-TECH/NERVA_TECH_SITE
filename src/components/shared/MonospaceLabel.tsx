import { cn } from "@/lib/utils";

interface MonospaceLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function MonospaceLabel({ children, className }: MonospaceLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-mono uppercase tracking-wider text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
