// components/home/ProyectosPreview.tsx
// Adelanto de proyectos destacados en la home: 2 tarjetas + enlace a /proyectos.
// Lee de lib/proyectos.ts. Server Component.
import Link from "next/link";
import TituloSeccion from "@/components/ui/TituloSeccion";
import Tarjeta from "@/components/ui/Tarjeta";
import Etiqueta from "@/components/ui/Etiqueta";
import Boton from "@/components/ui/Boton";
import NumeroAnimado from "@/components/home/NumeroAnimado";
import { proyectos } from "@/lib/proyectos";

export default function ProyectosPreview() {
  // Mostramos solo los dos primeros como "destacados" (el resto, en /proyectos).
  const destacados = proyectos.slice(0, 2);

  return (
    <section className="border-t border-line py-20 md:py-28">
      <TituloSeccion eyebrow="Portfolio" titulo="Proyectos destacados">
        Algunos trabajos donde la tecnología resolvió un problema real.
      </TituloSeccion>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {destacados.map((proyecto) => (
          <Link key={proyecto.slug} href={`/proyectos/${proyecto.slug}`} className="group">
            <Tarjeta className="flex h-full flex-col transition-colors group-hover:border-brand">
              {/* Visual de cabecera. Aún no hay capturas reales, así que usamos
                  un panel decorativo con degradado de marca (se sustituirá por
                  next/image en la Fase 4). */}
              <div className="relative flex h-40 items-end overflow-hidden rounded-lg border border-line bg-gradient-to-br from-brand/20 via-surface to-surface p-4">
                <span className="font-mono text-3xl font-bold text-brand/40">
                  {proyecto.nombre}
                </span>
                {/* Categoría + año, esquina superior */}
                <span className="absolute top-3 right-3 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-soft">
                  {proyecto.categoria} · {proyecto.anio}
                </span>
              </div>

              {/* Tres métricas destacadas, con números animados al verlas */}
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {proyecto.metricas.map((m) => (
                  <div key={m.etiqueta}>
                    <p className="text-xl font-bold text-brand">
                      <NumeroAnimado valor={m.valor} />
                    </p>
                    <p className="mt-1 text-xs text-ink-dim">{m.etiqueta}</p>
                  </div>
                ))}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-ink">{proyecto.nombre}</h3>
              <p className="mt-2 text-sm text-ink-soft text-pretty">{proyecto.resumen}</p>

              {/* Tecnologías como etiquetas */}
              <div className="mt-4 flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tec) => (
                  <Etiqueta key={tec}>{tec}</Etiqueta>
                ))}
              </div>

              <span className="mt-auto pt-6 text-sm font-medium text-brand">
                Ver caso completo{" "}
                <span className="inline-block transition group-hover:translate-x-1">&rarr;</span>
              </span>
            </Tarjeta>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Boton href="/proyectos" variante="secundario">
          Ver todos los proyectos
        </Boton>
      </div>
    </section>
  );
}
