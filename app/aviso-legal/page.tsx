import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aviso Legal",
    description: "Información legal, derechos y responsabilidad",
};

export default function PaginaLegal() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <p className="font-mono text-sm tracking-widest text-brand uppercase">
                legal
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight">
                Aviso Legal
            </h1>

            <div className="mt-8 space-y-8 text-ink-soft">
                <section>
                    <h2 className="text-xl font-semibold text-ink">Titular</h2>
                    <p className="mt-2">
                        [Tu nombre y apellidos] · [email de contacto]
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-ink">Objeto</h2>
                    <p className="mt-2">
                        Web de presentación de servicios de consultoría tecnológica y laboratorio técnico
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-ink">Propiedad Intelectual</h2>
                    <p className="mt-2">
                        Contenido y código propios salvo indicación
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-ink">Responsabilidad</h2>
                    <p className="mt-2">
                        No nos hacemos responsables del mal uso del contenido
                    </p>
                </section>
            </div>
        </main>
    );
}