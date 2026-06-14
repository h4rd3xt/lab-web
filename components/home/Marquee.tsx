// components/home/Marquee.tsx
// Cinta horizontal de palabras clave que se desplaza en bucle.
// No necesita JavaScript: el movimiento es 100% animación CSS (ver globals.css).
// Por eso es un Server Component normal.

const palabrasClave = [
  "Desarrollo web",
  "Automatización",
  "Gestión de datos",
  "APIs e integraciones",
  "Bases de datos",
  "Despliegue continuo",
  "Resultados reales",
];

export default function Marquee() {
  // Duplicamos la lista para que, cuando la primera mitad termina de salir,
  // la segunda ya esté en pantalla: el bucle se ve continuo, sin saltos.
  const pista = [...palabrasClave, ...palabrasClave];

  return (
    <section
      className="overflow-hidden border-y border-line py-5"
      aria-hidden="true" // decorativo: el contenido ya está en el resto de la web
    >
      {/* `marquee-pista` aplica la animación; `w-max` evita que el flex se parta */}
      <div className="marquee-pista flex w-max items-center gap-8">
        {pista.map((palabra, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-mono text-sm tracking-wide text-ink-soft">
              {palabra}
            </span>
            <span className="text-brand" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
