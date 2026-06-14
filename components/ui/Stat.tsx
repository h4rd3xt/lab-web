// Stat: métrica de prueba social (número grande + descripción).
export default function Stat({
  valor,
  descripcion,
}: {
  valor: string;
  descripcion: string;
}) {
  return (
    <div>
      <p className="text-4xl font-bold text-brand md:text-5xl">{valor}</p>
      <p className="mt-2 text-sm text-ink-soft">{descripcion}</p>
    </div>
  );
}
