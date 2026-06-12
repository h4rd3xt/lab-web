// components/Encabezado.tsx
// Barra de navegación global. Server Component: sin estado, sin "use client".
import Link from "next/link";

export default function Encabezado() {
    // sticky + backdrop-blur: la barra queda fija y deja entrever el contenido al hacer scroll
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          laboratorio<span className="text-brand">-web</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/servicios" className="text-ink-soft hover:text-ink">
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="rounded-lg bg-brand px-4 py-2 font-medium text-surface hover:opacity-90"
          >
            Contactar
          </Link>
        </div>
      </nav>
    </header>
  );
}