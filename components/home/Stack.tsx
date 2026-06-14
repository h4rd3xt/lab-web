// components/home/Stack.tsx
// Tecnologías agrupadas por categoría. Lee de lib/stack.ts. Server Component.
import TituloSeccion from "@/components/ui/TituloSeccion";
import Tarjeta from "@/components/ui/Tarjeta";
import Etiqueta from "@/components/ui/Etiqueta";
import { stack } from "@/lib/stack";

export default function Stack() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <TituloSeccion eyebrow="Tecnología" titulo="Las mejores herramientas para los mejores resultados">
        No usamos tecnología por moda: cada herramienta resuelve un problema
        concreto de tu negocio.
      </TituloSeccion>

      {/* Una tarjeta por grupo (Frontend, Backend, etc.) */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((grupo) => (
          <Tarjeta key={grupo.categoria}>
            <h3 className="font-mono text-sm tracking-widest text-brand uppercase">
              {grupo.categoria}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {grupo.tecnologias.map((tec) => (
                <Etiqueta key={tec}>{tec}</Etiqueta>
              ))}
            </div>
          </Tarjeta>
        ))}
      </div>
    </section>
  );
}
