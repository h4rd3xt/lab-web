import type { ReactNode } from "react";

// Eyebrow: la etiqueta pequeña en mayúsculas que va encima de los títulos.
// `className` opcional permite ajustarla puntualmente sin tocar el componente.
export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-mono text-sm tracking-widest text-brand uppercase ${className}`}>
      {children}
    </p>
  );
}
