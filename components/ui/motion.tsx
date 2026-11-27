import type { ReactNode } from "react";

// The design system has no entrance animations (DESIGN.md › Motion). These wrappers keep the
// existing imports working as plain containers; remove them as pages are rewritten in Phase 2.

interface WrapperProps {
  children: ReactNode;
  className?: string;
  /** Ignored. Kept so existing call sites still type-check. */
  delay?: number;
}

export function AnimatedSection({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerContainer({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export function AnimatedItem({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export const FadeIn = AnimatedSection;
export const StaggerItem = AnimatedItem;
