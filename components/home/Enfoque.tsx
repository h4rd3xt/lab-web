// components/home/Enfoque.tsx
// Sección "nuestro enfoque": texto a la izquierda + 2 métricas grandes a la
// derecha. Server Component (estático). Reutiliza TituloSeccion y Stat.
import TituloSeccion from "@/components/ui/TituloSeccion";
import Stat from "@/components/ui/Stat";
import NumeroAnimado from "@/components/home/NumeroAnimado";

export default function Enfoque() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Columna de texto */}
        <div>
          <TituloSeccion eyebrow="Nuestro enfoque" titulo="No vendemos webs. Resolvemos problemas.">
            La tecnología no falla por sí sola: falla cuando nadie se pregunta
            primero qué problema hay que resolver.
          </TituloSeccion>

          <p className="mt-6 max-w-md text-ink-soft text-pretty">
            Antes de escribir una sola línea de código entendemos tus cuellos de
            botella: tareas que consumen tiempo, datos dispersos, oportunidades
            que se pierden. Y diseñamos la solución exacta que los elimina, con
            métricas reales.
          </p>
        </div>

        {/* Dos métricas grandes (datos de ejemplo) */}
        <div className="grid grid-cols-2 gap-8 rounded-2xl border border-line bg-surface-soft p-8">
          <Stat valor={<NumeroAnimado valor="+40%" />} descripcion="Más consultas recibidas de media por nuestros clientes" />
          <Stat valor={<NumeroAnimado valor="3×" />} descripcion="Retorno sobre lo invertido en la solución" />
        </div>
      </div>
    </section>
  );
}
