import Link from "next/link";
import ContactoForm from "./ContactoForm";

export const metadata = { title: "Contacto — Laboratorio Web" };

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-20">
      <Link
        href="/"
        className="font-mono text-sm text-ink-dim hover:text-brand"
      >
        ← volver al inicio
      </Link>

      <p className="mt-8 font-mono text-sm tracking-widest text-brand uppercase">
        // departamento 4
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Contacto</h1>
      <p className="mt-4 text-lg text-ink-soft">
        Este formulario escribe en{" "}
        <span className="text-brand">Supabase</span> (PostgreSQL con RLS).
      </p>

      <div className="mt-10">
        <ContactoForm />
      </div>
    </main>
  );
}
