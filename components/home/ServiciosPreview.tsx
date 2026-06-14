// components/home/ServiciosPreview.tsx
// Adelanto de servicios en la home: 3 tarjetas + enlace a /servicios.
// Lee de lib/servicios.ts (la misma fuente que la página de servicios).
import Link from "next/link";
import TituloSeccion from "@/components/ui/TituloSeccion";
import Tarjeta from "@/components/ui/Tarjeta";
import Boton from "@/components/ui/Boton";
import { servicios } from "@/lib/servicios";

export default function ServiciosPreview() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <TituloSeccion eyebrow="Servicios" titulo="¿Qué podemos hacer por ti?">
        Tres formas de poner la tecnología a trabajar para tu negocio.
      </TituloSeccion>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {servicios.map((servicio) => (
          // Toda la tarjeta es un enlace al detalle del servicio.
          // `group` permite que el hover de la tarjeta afecte a hijos concretos.
          <Link
            key={servicio.slug}
            href={`/servicios/${servicio.slug}`}
            className="group"
          >
            {/* flex-col para poder empujar el recuadro de tecnología abajo */}
            <Tarjeta className="flex h-full flex-col transition-colors group-hover:border-brand">
              <h3 className="text-lg font-semibold text-ink">
                {servicio.nombre}
              </h3>
              <p className="mt-2 text-sm text-ink-soft text-pretty">
                {servicio.claim}
              </p>

              {/* Recuadro de tecnología, con el mismo formato que la página de
                  detalle: etiqueta en mayúsculas + tecnología en mono cian.
                  mt-auto lo pega al fondo para que todas las tarjetas alineen. */}
              <div className="mt-auto pt-6">
                <div className="rounded-lg border border-line bg-surface p-4">
                  <p className="font-mono text-xs tracking-widest text-ink-dim uppercase">
                    Detrás de este servicio
                  </p>
                  <p className="mt-2 font-mono text-sm text-brand">
                    {servicio.tecnologia}
                  </p>
                </div>

                <span className="mt-4 inline-block text-sm font-medium text-brand">
                  Ver más{" "}
                  <span className="inline-block transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Tarjeta>
          </Link>
        ))}
      </div>

      {/* Enlace al índice completo */}
      <div className="mt-10">
        <Boton href="/servicios" variante="secundario">
          Ver todos los servicios
        </Boton>
      </div>
    </section>
  );
}
