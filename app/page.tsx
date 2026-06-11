import React from "react";
import FormularioSolicitud from "@/components/FormularioSolicitud";

// Provide a minimal JSX.IntrinsicElements declaration to satisfy TS when
// project-level JSX typings are not available in this environment.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
import Link from "next/link";

type Departamento = {
  numero: number;
  nombre: string;
  tecnologia: string;
  estado: "funcionando" | "pendiente";
  href?: string;
};

const departamentos: Departamento[] = [
  { numero: 1, nombre: "Entorno de desarrollo", tecnologia: "VSCode + Git/GitHub", estado: "funcionando" },
  { numero: 2, nombre: "Frontend", tecnologia: "Next.js + React + Tailwind", estado: "funcionando" },
  { numero: 3, nombre: "Infraestructura", tecnologia: "Vercel", estado: "pendiente" },
  { numero: 4, nombre: "Backend y datos", tecnologia: "Supabase", estado: "funcionando", href: "/contacto" },
  { numero: 5, nombre: "Comunicaciones", tecnologia: "Resend", estado: "pendiente" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-sm tracking-widest text-brand uppercase">
        // laboratorio-web
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        El stack está vivo
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        Los departamentos 1, 2 y 4 ya funcionan. Iremos encendiendo el resto.
      </p>

      {/* Lista renderizada con .map(). Los deptos con href son clicables. */}
      <ul className="mt-12 space-y-3">
        {departamentos.map((depto) => {
          const card = (
            <div className="flex items-center gap-4 rounded-xl border border-line bg-surface-soft p-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-line font-mono text-brand">
                {depto.numero}
              </span>
              <div className="flex-1">
                <p className="font-semibold">{depto.nombre}</p>
                <p className="font-mono text-sm text-ink-dim">{depto.tecnologia}</p>
              </div>
              <span
                className={
                  depto.estado === "funcionando"
                    ? "rounded-full bg-brand/10 px-3 py-1 font-mono text-xs text-brand"
                    : "rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-dim"
                }
              >
                {depto.estado === "funcionando" ? "✓ funcionando" : "pendiente"}
              </span>
            </div>
          );

          return (
            <li key={depto.numero}>
              {depto.href ? (
                <Link href={depto.href} className="block hover:opacity-80">
                  {card}
                </Link>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>

      <FormularioSolicitud />

      <footer className="mt-16 border-t border-line pt-6 font-mono text-sm text-ink-dim">
        Siguiente parada: emails de confirmación con Resend.
      </footer>
    </main>
  );
}
