// app/contacto/page.tsx — página estática con el formulario reutilizado
import type { Metadata } from "next";
import FormularioSolicitud from "@/components/FormularioSolicitud";

// metadata de página: Next lo combina con el del layout raíz
export const metadata: Metadata = {
    title: "Contacto · Laboratorio Web",
    description: "Cuéntanos tu caso y te respondemos en menos de 24 h.",
};

export default function PaginaContacto() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <p className="font-mono text-sm tracking-widest text-brand uppercase">
                contacto
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight">
                Cuéntanos tu caso
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
                Describe el proceso que quieres mejorar y te respondemos con una
                propuesta concreta en menos de 24 horas.
            </p>

            <FormularioSolicitud />
        </main>
    );
}