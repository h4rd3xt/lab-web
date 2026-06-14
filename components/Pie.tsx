// components/Pie.tsx
// Pie de página global. Server Component: sin estado.
import Link from "next/link";
import { enlacesPrincipales, enlacesLegales } from "@/lib/navegacion";

// Todos los enlaces del pie en un solo array, en el orden de la rejilla.
// Así la cuadrícula 3×2 se rellena fila a fila: Servicios · Proyectos ·
// Mantenimiento / Contacto · Aviso legal · Privacidad.
const enlacesPie = [
  ...enlacesPrincipales,
  { href: "/contacto", etiqueta: "Contacto" },
  ...enlacesLegales,
];

export default function Pie() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 text-sm text-ink-soft md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold text-ink">
            laboratorio<span className="text-brand">-web</span>
          </p>
          <p className="mt-1 text-ink-dim">
            Consultoría tecnológica · Automatización - Datos - Web
          </p>
        </div>

        {/* Enlaces agrupados en 3 columnas × 2 filas */}
        <nav className="grid grid-cols-3 gap-x-8 gap-y-3">
          {enlacesPie.map((enlace) => (
            <Link key={enlace.href} href={enlace.href} className="hover:text-ink">
              {enlace.etiqueta}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-xs text-ink-dim">
          © {new Date().getFullYear()} laboratorio-web
        </p>
      </div>
    </footer>
  );
}
