// app/page.tsx — portada pública (Server Component)
import Link from "next/link";

// Pasos del proceso: solo los usa la home, por eso viven aquí y no en lib/
const proceso = [
  {
    numero: "01",
    titulo: "Auditoría",
    detalle:
      "Analizamos tus procesos actuales y localizamos dónde pierdes tiempo: tareas repetitivas, datos dispersos, herramientas obsoletas.",
  },
  {
    numero: "02",
    titulo: "Implementación",
    detalle:
      "Construimos la solución con herramientas actuales y te la entregamos funcionando, con formación incluida para tu equipo.",
  },
  {
    numero: "03",
    titulo: "Mantenimiento",
    detalle:
      "Acompañamiento continuo: mejoras, soporte y evolución de la solución según crece tu negocio.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      {/* ───── Hero: propuesta de valor ───── */}
      <section className="py-24 text-center">
        <p className="font-mono text-sm tracking-widest text-brand uppercase">
          consultoría tecnológica
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-6xl">
          Tecnología que trabaja para tu empresa
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft text-pretty">
          Automatización, gestión de datos y modernización web con
          herramientas actuales.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contacto"
            className="btn-primario"
          >
            Cuéntanos tu caso
          </Link>
          <Link
            href="/servicios"
            className="rounded-lg border border-line px-6 py-3 font-medium text-ink-soft hover:text-ink"
          >
            Ver servicios
          </Link>
        </div>
      </section>

      {/* ───── Cómo trabajamos: proceso en 3 pasos ───── */}
      <section className="border-t border-line py-24">
        <h2 className="text-2xl font-bold tracking-tight">Cómo trabajamos</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {proceso.map((paso) => (
            <div key={paso.numero}>
              <p className="font-mono text-5xl font-bold text-line">
                {paso.numero}
              </p>
              <h3 className="mt-3 font-semibold">{paso.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {paso.detalle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── CTA final ───── */}
      <section className="mb-24 rounded-xl border border-line bg-surface-soft p-10 text-center">
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
  );
}