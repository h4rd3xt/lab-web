// app/proyectos/page.tsx — índice del portfolio (ruta estática)
import type { Metadata } from "next";
import Link from "next/link";
import { proyectos } from "@/lib/proyectos";
import TituloSeccion from "@/components/ui/TituloSeccion";
import Tarjeta from "@/components/ui/Tarjeta";
import Etiqueta from "@/components/ui/Etiqueta";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Algunos de los proyectos en los que hemos trabajado.",
};

export default function PaginaProyectos() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <TituloSeccion eyebrow="portfolio" titulo="Proyectos destacados">
        Una muestra de lo que construimos: cada caso, un problema resuelto con tecnología.
      </TituloSeccion>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {proyectos.map((proyecto) => (
          <Link key={proyecto.slug} href={`/proyectos/${proyecto.slug}`} className="group">
            <Tarjeta className="flex h-full flex-col transition hover:border-brand/50">
              <div className="flex items-center justify-between">
                <Etiqueta>{proyecto.categoria}</Etiqueta>
                <span className="font-mono text-xs text-ink-dim">{proyecto.anio}</span>
              </div>
              <h3 className="mt-4 font-semibold">{proyecto.nombre}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{proyecto.resumen}</p>
              <span className="mt-4 text-sm text-brand">
                Ver caso{" "}
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Tarjeta>
          </Link>
        ))}
      </div>
    </main>
  );
}
