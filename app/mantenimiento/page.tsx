// app/mantenimiento/page.tsx — esqueleto (planes y detalles en la Fase 3).
import type { Metadata } from "next";
import TituloSeccion from "@/components/ui/TituloSeccion";
import Boton from "@/components/ui/Boton";

export const metadata: Metadata = {
  title: "Mantenimiento",
  description: "Soporte, mejoras y evolución continua para tu solución.",
};

export default function PaginaMantenimiento() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <TituloSeccion eyebrow="mantenimiento" titulo="Cuidamos lo que construimos">
        Soporte, mejoras y evolución continua para que tu solución siga funcionando y
        creciendo contigo.
      </TituloSeccion>

      <p className="mt-12 font-mono text-sm text-ink-dim">
        — Planes y detalles en construcción (Fase 3) —
      </p>

      <div className="mt-8">
        <Boton href="/contacto">Hablar de mantenimiento</Boton>
      </div>
    </main>
  );
}
