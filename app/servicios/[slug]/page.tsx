// app/servicios/[slug]/page.tsx
// Ruta dinámica: una sola plantilla para todos los servicios.
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicios, buscarServicio } from "@/lib/servicios";
import EsquemaFlujo from "@/components/EsquemaFlujo";

// En el build, Next pre-genera una página estática por cada slug
export function generateStaticParams() {
    return servicios.map((s) => ({ slug: s.slug }));
}

export default async function PaginaServicio({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params; // params es una Promise en Next 15+
    const servicio = buscarServicio(slug);

    if (!servicio) {
        notFound(); // slug desconocido → página 404
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            {/* Miga de pan: orientación + vuelta atrás */}
            <Link href="/servicios" className="font-mono text-sm text-ink-dim hover:text-ink">
                ← servicios
            </Link>

            <h1 className="mt-6 text-4xl font-bold tracking-tight">
                {servicio.nombre}
            </h1>
            <p className="mt-4 text-lg text-ink-soft">{servicio.descripcion}</p>

            {/* Beneficios como checklist */}
            <h2 className="mt-12 text-xl font-semibold">Qué consigues</h2>
            <ul className="mt-4 space-y-3">
                {servicio.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex items-start gap-3">
                        <span className="mt-0.5 text-brand">✓</span>
                        <span className="text-ink-soft">{beneficio}</span>
                    </li>
                ))}
            </ul>

            {/* La doble cara: qué pieza del laboratorio lo respalda */}
            <div className="mt-12 rounded-xl border border-line bg-surface-soft p-6">
                <p className="font-mono text-xs tracking-widest text-ink-dim uppercase">
                    detrás de este servicio
                </p>
                <p className="mt-2 font-mono text-brand">{servicio.tecnologia}</p>
                <p className="mt-2 text-sm text-ink-soft">
                    No es teoría: esta misma web lo usa en producción.
                </p>
                <div className="mt-4">
                    <EsquemaFlujo pasos={servicio.flujo} />
                </div>
            </div>
            <Link
                href="/contacto"
                className="mt-12 inline-block rounded-lg bg-brand px-6 py-3 font-medium text-surface hover:opacity-90"
            >
                Quiero esto en mi negocio
            </Link>
        </main>
    );
}