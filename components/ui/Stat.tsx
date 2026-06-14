import type { ReactNode } from "react";

// Stat: métrica de prueba social (número grande + descripción).
// `valor` admite texto o un componente (p. ej. <NumeroAnimado />).
export default function Stat({
  valor,
  descripcion,
}: {
  valor: ReactNode;
  descripcion: string;
}) {
  return (
    <div>
      <p className="text-4xl font-bold text-brand md:text-5xl">{valor}</p>
      <p className="mt-2 text-sm text-ink-soft">{descripcion}</p>
    </div>
  );
}
