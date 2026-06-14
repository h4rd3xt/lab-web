// app/proyectos/[slug]/page.tsx
// Detalle de proyecto (caso de estudio). Esqueleto funcional: el contenido
// completo (problema, solución, métricas, imágenes) llegará en la Fase 3.
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { proyectos, buscarProyecto } from "@/lib/proyectos";
import Etiqueta from "@/components/ui/Etiqueta";

// En el build, Next pre-genera una página estática por cada slug.
export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = buscarProyecto(slug);
  if (!proyecto) return { title: "Proyecto no encontrado" };
  return { title: proyecto.nombre, description: proyecto.resumen };
}

export default async function PaginaProyecto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // params es una Promise en Next 15+
  const proyecto = buscarProyecto(slug);

  if (!proyecto) {
    notFound(); // slug desconocido → página 404
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/proyectos" className="font-mono text-sm text-ink-dim hover:text-ink">
        ← proyectos
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <Etiqueta>{proyecto.categoria}</Etiqueta>
        <span className="font-mono text-xs text-ink-dim">{proyecto.anio}</span>
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance">
        {proyecto.nombre}
      </h1>
      <p className="mt-4 text-lg text-ink-soft text-pretty">{proyecto.resumen}</p>

      <p className="mt-12 font-mono text-sm text-ink-dim">
        — Caso completo en construcción (Fase 3) —
      </p>
    </main>
  );
}
