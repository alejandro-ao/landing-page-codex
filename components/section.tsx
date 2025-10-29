import type { ReactNode } from "react";
import { Container } from "./container";
import { cn } from "./utils";

export function Section({
  id,
  title,
  description,
  className,
  children
}: {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <Container>
        {(title || description) && (
          <div className="mb-12 flex flex-col gap-4 text-center">
            {title && <h2 className="section-heading mx-auto max-w-3xl">{title}</h2>}
            {description && <p className="section-subheading mx-auto">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
