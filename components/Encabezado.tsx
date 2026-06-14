// components/Encabezado.tsx
// Barra de navegación global. Server Component; la parte interactiva (menú móvil)
// vive en su propio componente cliente para no enviar JS de más.
import Link from "next/link";
import { enlacesPrincipales } from "@/lib/navegacion";
import MenuMovil from "@/components/MenuMovil";

export default function Encabezado() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          laboratorio<span className="text-brand">-web</span>
        </Link>

        {/* Navegación de escritorio: oculta en móvil (aparece a partir de md) */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          {enlacesPrincipales.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="text-ink-soft transition-colors hover:text-ink"
            >
              {enlace.etiqueta}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primario">
            Contactar
          </Link>
        </div>

        {/* Menú móvil: visible solo por debajo de md */}
        <MenuMovil />
      </nav>
    </header>
  );
}
