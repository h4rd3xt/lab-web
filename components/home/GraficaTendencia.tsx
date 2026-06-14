// components/home/GraficaTendencia.tsx
// Gráfica decorativa del hero, dibujada con SVG (imagen hecha con código:
// nítida a cualquier tamaño y sin archivos de imagen). Datos inventados con
// picos y bajadas pero tendencia al alza. Server Component (es estática).

// Valores de ejemplo (0–100, "cuanto más alto, mejor"). Suben con altibajos.
const valores = [18, 30, 24, 41, 35, 52, 47, 63, 58, 74, 69, 90];

// Medidas internas del lienzo SVG (el viewBox). Son unidades propias del SVG,
// no píxeles: el navegador escala el dibujo al tamaño real del contenedor.
const ANCHO = 320;
const ALTO = 180;
const MARGEN = 12; // aire alrededor de la línea

// Convierte cada valor en una coordenada (x, y) dentro del lienzo.
// Ojo: en SVG el eje Y crece hacia ABAJO, por eso restamos para "subir".
const puntos = valores.map((v, i) => {
  const x = MARGEN + (i / (valores.length - 1)) * (ANCHO - MARGEN * 2);
  const y = ALTO - MARGEN - (v / 100) * (ALTO - MARGEN * 2);
  return { x, y };
});

// "M x,y L x,y L ..." es el idioma de los trazados SVG: M = mover el lápiz,
// L = trazar línea hasta el siguiente punto.
const linea = puntos
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`)
  .join(" ");

// El área bajo la curva: la misma línea, cerrada hacia la base del lienzo.
const area = `${linea} L ${puntos.at(-1)!.x.toFixed(1)},${ALTO - MARGEN} L ${puntos[0].x.toFixed(1)},${ALTO - MARGEN} Z`;

const ultimo = puntos.at(-1)!;

export default function GraficaTendencia() {
  return (
    <div
      className="rounded-2xl border border-line bg-surface-soft p-6 shadow-2xl shadow-black/30"
      aria-hidden="true" // decorativo: lo ocultamos a lectores de pantalla
    >
      {/* Cabecera tipo "panel de métricas" */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-ink-soft">Crecimiento</span>
        <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-xs text-success">
          ▲ +38%
        </span>
      </div>

      <svg
        viewBox={`0 0 ${ANCHO} ${ALTO}`}
        className="mt-4 w-full"
        role="img"
      >
        {/* <defs> guarda "recursos" reutilizables, como degradados */}
        <defs>
          <linearGradient id="relleno-grafica" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Líneas de referencia horizontales (rejilla) */}
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={MARGEN}
            x2={ANCHO - MARGEN}
            y1={MARGEN + f * (ALTO - MARGEN * 2)}
            y2={MARGEN + f * (ALTO - MARGEN * 2)}
            stroke="var(--color-line)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        {/* Relleno degradado bajo la curva */}
        <path d={area} fill="url(#relleno-grafica)" />

        {/* La línea de tendencia. pathLength="1" normaliza su longitud a 1,
            lo que permite animar el "dibujado" con stroke-dashoffset. */}
        <path
          d={linea}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className="animar-linea"
        />

        {/* Punto final destacado (el pico más alto) */}
        <circle cx={ultimo.x} cy={ultimo.y} r="6" fill="var(--color-brand)" opacity="0.25" />
        <circle cx={ultimo.x} cy={ultimo.y} r="3" fill="var(--color-brand)" />
      </svg>

      {/* Pie de la gráfica: pequeñas métricas de adorno */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center font-mono text-xs">
        <div>
          <p className="text-ink">99.9%</p>
          <p className="text-ink-dim">uptime</p>
        </div>
        <div>
          <p className="text-ink">0.8s</p>
          <p className="text-ink-dim">carga</p>
        </div>
        <div>
          <p className="text-ink">24/7</p>
          <p className="text-ink-dim">activo</p>
        </div>
      </div>
    </div>
  );
}
