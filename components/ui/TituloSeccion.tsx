import type { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

// Cabecera de sección reutilizable: eyebrow (opcional) + título + subtítulo (opcional).
export default function TituloSeccion({
  eyebrow,
  titulo,
  children,
}: {
  eyebrow?: string;
  titulo: string;
  children?: ReactNode; // el subtítulo, si lo hay
}) {
  return (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {titulo}
      </h2>
      {children && (
        <p className="mt-4 max-w-xl text-lg text-ink-soft text-pretty">{children}</p>
      )}
    </div>
  );
}
