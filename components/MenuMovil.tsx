"use client"; // necesita estado (abierto/cerrado), así que vive en el navegador

import { useState } from "react";
import Link from "next/link";
import { enlacesPrincipales } from "@/lib/navegacion";

// Menú móvil: el botón hamburguesa y el panel desplegable a pantalla completa.
export default function MenuMovil() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botón que abre el menú (visible solo en móvil) */}
      <button onClick={() => setAbierto(true)} aria-label="Abrir menú" className="p-2 text-ink">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* El panel solo se monta cuando abierto === true */}
      {abierto && (
        <div className="fixed inset-0 z-50 bg-surface/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <span className="font-semibold tracking-tight">
              laboratorio<span className="text-brand">-web</span>
            </span>
            <button onClick={() => setAbierto(false)} aria-label="Cerrar menú" className="p-2 text-ink">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8 text-lg">
            {enlacesPrincipales.map((enlace) => (
              <Link
                key={enlace.href}
                href={enlace.href}
                onClick={() => setAbierto(false)} // al navegar, cierra el menú
                className="border-b border-line py-3 text-ink-soft hover:text-ink"
              >
                {enlace.etiqueta}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setAbierto(false)} className="mt-6 text-center btn-primario">
              Contactar
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
