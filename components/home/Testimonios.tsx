// components/home/Testimonios.tsx
// Reseñas de clientes en tarjetas. Lee de lib/testimonios.ts. Server Component.
import TituloSeccion from "@/components/ui/TituloSeccion";
import Tarjeta from "@/components/ui/Tarjeta";
import { testimonios } from "@/lib/testimonios";

export default function Testimonios() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <TituloSeccion eyebrow="Reseñas" titulo="Lo que dicen nuestros clientes">
        La satisfacción de quien confía en nosotros es la mejor carta de
        presentación.
      </TituloSeccion>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonios.map((t) => (
          <Tarjeta key={t.nombre} className="flex h-full flex-col">
            {/* Comilla decorativa */}
            <span className="font-serif text-5xl leading-none text-brand/40" aria-hidden="true">
              &ldquo;
            </span>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft text-pretty">
              {t.cita}
            </p>

            {/* Pie: avatar de iniciales + nombre y cargo */}
            <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface font-mono text-sm font-bold text-brand"
                aria-hidden="true"
              >
                {t.iniciales}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{t.nombre}</p>
                <p className="text-xs text-ink-dim">{t.cargo}</p>
              </div>
              {t.fuente && (
                <span className="ml-auto font-mono text-xs text-ink-dim">{t.fuente}</span>
              )}
            </div>
          </Tarjeta>
        ))}
      </div>
    </section>
  );
}
