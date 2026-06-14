import type { ReactNode } from "react";

// Tarjeta: contenedor con borde y fondo de panel. La caja base de la web.
export default function Tarjeta({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-line bg-surface-soft p-6 ${className}`}>
      {children}
    </div>
  );
}
