// components/home/Proceso.tsx
// "¿Cómo trabajamos?": los pasos numerados. Lee de lib/proceso.ts (fuente
// única), igual que el plan pide. Server Component.
import TituloSeccion from "@/components/ui/TituloSeccion";
import { proceso } from "@/lib/proceso";

export default function Proceso() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <TituloSeccion eyebrow="El proceso" titulo="¿Cómo trabajamos contigo?">
        Un camino claro, sin sorpresas, con un único objetivo: que veas
        resultados reales cuanto antes.
      </TituloSeccion>

      {/* Una columna por paso en escritorio; apiladas en móvil */}
      <ol className="mt-12 grid gap-10 md:grid-cols-3">
        {proceso.map((paso) => (
          <li key={paso.numero} className="relative">
            {/* Número grande de adorno, en tono tenue */}
            <span className="font-mono text-5xl font-bold text-line">
              {paso.numero}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-ink">{paso.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {paso.detalle}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
