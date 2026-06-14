// components/home/Hero.tsx
// Sección de portada (Server Component). La única parte interactiva —la
// palabra que rota— está aislada en <PalabraRotativa>, que sí es cliente.
import Eyebrow from "@/components/ui/Eyebrow";
import Boton from "@/components/ui/Boton";
import PalabraRotativa from "@/components/home/PalabraRotativa";
import GraficaTendencia from "@/components/home/GraficaTendencia";

// Palabras que irá rotando el titular. Editar aquí cambia el efecto.
const palabras = ["Automatizamos", "Ordenamos", "Modernizamos", "Aceleramos"];

// Mini-argumentos bajo los botones (la "prueba social" rápida de Norvy).
const argumentos = [
  { titulo: "Resultados medibles", detalle: "Métricas reales, no promesas" },
  { titulo: "Tecnología actual", detalle: "El stack que de verdad escala" },
  { titulo: "Sin dramas", detalle: "En producción en semanas" },
];

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* ───── Columna de texto ───── */}
        <div>
          <Eyebrow>Consultoría tecnológica · España</Eyebrow>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance md:text-6xl">
            <PalabraRotativa palabras={palabras} />
            <br className="hidden sm:block" /> con tecnología que funciona
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink-soft text-pretty">
            Automatización, gestión de datos y modernización. Construimos la solución exacta que tu negocio necesita.
          </p>
          {/* Dos llamadas a la acción: una primaria, otra secundaria */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Boton href="/contacto">Cuéntanos tu caso</Boton>
            <Boton href="/servicios" variante="secundario">
              ¿Cómo lo hacemos?
            </Boton>
          </div>

          {/* Tres mini-argumentos */}
          <dl className="mt-12 grid grid-cols-3 gap-6">
            {argumentos.map((arg) => (
              <div key={arg.titulo}>
                <dt className="text-sm font-semibold text-ink">{arg.titulo}</dt>
                <dd className="mt-1 text-xs text-ink-soft">{arg.detalle}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ───── Panel visual: gráfica de tendencia decorativa ───── */}
        <GraficaTendencia />
      </div>
    </section>
  );
}
