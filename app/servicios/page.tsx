// app/servicios/page.tsx — índice de servicios (ruta estática)
import type { Metadata } from "next";
import Link from "next/link";
import { servicios } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Automatización, gestión de datos y modernización web.",
};

export default function PaginaServicios() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-sm tracking-widest text-brand uppercase">
        servicios
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance">
        Qué podemos hacer por ti
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft text-pretty">
        Tres líneas de trabajo, una misma idea: que la tecnología te quite
        tareas, no que te las añada.
      </p>

      {/* El grid que vivía en la home, tal cual */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {servicios.map((servicio) => (
          <Link
            key={servicio.slug}
            href={`/servicios/${servicio.slug}`}
            className="group flex flex-col rounded-xl border border-line bg-surface-soft p-6 transition hover:border-brand/50"
          >
            <h3 className="font-semibold">{servicio.nombre}</h3>
            <p className="mt-2 flex-1 text-sm text-ink-soft">{servicio.claim}</p>
            <p className="mt-6 font-mono text-xs text-ink-dim">
              {servicio.tecnologia}
            </p>
            <span className="mt-4 text-sm text-brand">
              Saber más{" "}
              <span className="inline-block transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}