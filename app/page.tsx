// app/page.tsx — portada pública (Server Component)
import Link from "next/link";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";

export default function Home() {
  return (
    <>
      {/* ───── Hero + Marquee (Bloque 1) ───── */}
      {/* El Hero va dentro del contenedor centrado; el Marquee es de ancho
          completo, por eso lo sacamos del <main> con su propio margen. */}
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
      </main>

      <Marquee />

      <main className="mx-auto max-w-5xl px-6">
      {/* ───── CTA final ───── */}
      <section className="my-24 rounded-xl border border-line bg-surface-soft p-10 text-center">
        <h2 className="text-2xl font-bold">¿Hablamos de tu proyecto?</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Cuéntanos qué proceso te quita tiempo y te proponemos cómo
          automatizarlo.
        </p>
        <Link
          href="/contacto"
          className="mt-6 inline-block btn-primario"
        >
          Ir al formulario
        </Link>
      </section>
      </main>
    </>
  );
}