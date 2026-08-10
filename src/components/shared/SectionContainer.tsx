import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto px-6 py-section-mobile lg:py-section",
        className
      )}
    >
      {children}
    </section>
  );
}
