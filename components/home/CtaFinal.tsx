// components/home/CtaFinal.tsx
// Bloque de cierre de la home: badges de disponibilidad + titular + 2 CTAs.
// Server Component. Reemplaza al CTA simple que había antes en page.tsx.
import Boton from "@/components/ui/Boton";

export default function CtaFinal() {
  return (
    <section className="my-24 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface-soft to-surface p-10 text-center md:p-16">
      {/* Badges de disponibilidad */}
      <div className="flex flex-wrap justify-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-success">
          <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
          Disponibles ahora
        </span>
        <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-ink-soft">
          Respuesta &lt; 24h
        </span>
      </div>

      <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-balance md:text-4xl">
        ¿Tu negocio podría estar ganando tiempo hoy?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-ink-soft text-pretty">
        Cuéntanos qué proceso te quita tiempo y te proponemos cómo automatizarlo,
        sin compromiso.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Boton href="/contacto">Cuéntanos tu caso</Boton>
        <Boton href="/servicios" variante="secundario">
          Ver cómo lo hacemos
        </Boton>
      </div>
    </section>
  );
}
