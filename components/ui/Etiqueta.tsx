import type { ReactNode } from "react";

// Etiqueta (badge/tag): para categorías, tecnologías, estados...
export default function Etiqueta({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-ink-soft">
      {children}
    </span>
  );
}
