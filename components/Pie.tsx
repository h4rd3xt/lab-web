// components/Pie.tsx
// Pie de página global. Server Component: sin estado.
import Link from "next/link";
import { enlacesPrincipales, enlacesLegales } from "@/lib/navegacion";

export default function Pie() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">
            laboratorio<span className="text-brand">-web</span>
          </p>
          <p className="mt-1 text-ink-dim">
            Consultoría tecnológica · Automatización - Datos - Web
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {enlacesPrincipales.map((enlace) => (
            <Link key={enlace.href} href={enlace.href} className="hover:text-ink">
              {enlace.etiqueta}
            </Link>
          ))}
          <Link href="/contacto" className="hover:text-ink">
            Contacto
          </Link>
          {enlacesLegales.map((enlace) => (
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
