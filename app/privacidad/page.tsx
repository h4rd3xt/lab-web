// app/privacidad/page.tsx — política de privacidad (RGPD)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Cómo tratamos tus datos personales.",
};

export default function PaginaPrivacidad() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-sm tracking-widest text-brand uppercase">
        privacidad
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Política de privacidad
      </h1>

      <div className="mt-8 space-y-8 text-ink-soft">
        <section>
          <h2 className="text-xl font-semibold text-ink">Responsable</h2>
          <p className="mt-2">
            [Tu nombre y apellidos] · [email de contacto]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Qué datos recogemos y para qué</h2>
          <p className="mt-2">
            A través del formulario de contacto: nombre, email y el mensaje que
            nos escribes. Los usamos únicamente para responder a tu solicitud.
            Base legal: tu consentimiento al enviar el formulario.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Dónde se almacenan</h2>
          <p className="mt-2">
            Las solicitudes se guardan en Supabase (base de datos, UE) y los
            avisos se envían mediante Resend (email transaccional). La web se
            sirve desde Vercel. Estos proveedores actúan como encargados del
            tratamiento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Conservación y derechos</h2>
          <p className="mt-2">
            Conservamos los datos el tiempo necesario para gestionar tu
            solicitud. Puedes ejercer tus derechos de acceso, rectificación,
            supresión, oposición, limitación y portabilidad escribiendo a
            [email de contacto].
          </p>
        </section>
      </div>
    </main>
  );
}