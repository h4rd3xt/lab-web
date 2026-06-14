import Link from "next/link";
import type { ReactNode } from "react";

// Las únicas variantes permitidas. Si escribes otra, TypeScript te avisa.
type Variante = "primario" | "secundario";

// Mapa variante -> clases de Tailwind. Añadir una variante = añadir una línea.
const estilos: Record<Variante, string> = {
  primario: "bg-brand text-surface hover:opacity-60",
  secundario: "border border-line text-ink-soft hover:text-ink",
};

// Renderiza un <Link> de Next con el estilo de la variante elegida.
export default function Boton({
  href,
  variante = "primario", // valor por defecto si no se indica
  children,
}: {
  href: string;
  variante?: Variante;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-6 py-3 font-medium transition ${estilos[variante]}`}
    >
      {children}
    </Link>
  );
}
