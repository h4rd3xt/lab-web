"use client"; // anima en el tiempo y observa el scroll: vive en el navegador

import { useEffect, useRef, useState } from "react";

// Muestra un valor (p. ej. "+40%", "-90%", "0.8s", "3×") contando desde 0
// hasta el número la PRIMERA vez que entra en pantalla, y luego se para.
// Si el dato es negativo, decrece. Si no contiene número (p. ej. "RLS"),
// se muestra tal cual sin animar.
//
// Truco de parseo: separamos el texto en [prefijo][número][sufijo].
//   "+40%"  -> "+" | 40   | "%"
//   "-90%"  -> ""  | -90  | "%"   (el signo va con el número)
//   "0.8s"  -> ""  | 0.8  | "s"
//   "<1s"   -> "<" | 1    | "s"
//   "RLS"   -> sin número: no se anima
const PATRON = /^([^0-9.-]*)(-?\d+(?:\.\d+)?)(.*)$/;

export default function NumeroAnimado({
  valor,
  className = "",
}: {
  valor: string;
  className?: string;
}) {
  const match = valor.match(PATRON);
  const ref = useRef<HTMLSpanElement>(null);

  // Cuántos decimales tiene el objetivo, para mostrarlos igual al contar.
  const decimales = match ? (match[2].split(".")[1] ?? "").length : 0;

  // Texto inicial: el mismo formato pero empezando en 0 (si hay número).
  const [texto, setTexto] = useState(() =>
    match ? `${match[1]}${(0).toFixed(decimales)}${match[3]}` : valor,
  );

  useEffect(() => {
    if (!match) return; // nada numérico que animar
    const el = ref.current;
    if (!el) return;

    const prefijo = match[1];
    const objetivo = parseFloat(match[2]);
    const sufijo = match[3];

    // Si el usuario pide menos movimiento, mostramos el valor final y ya.
    const sinMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (sinMovimiento) {
      setTexto(`${prefijo}${objetivo.toFixed(decimales)}${sufijo}`);
      return;
    }

    let raf = 0;
    let inicio = 0;
    const duracion = 1300; // ms

    const animar = (t: number) => {
      if (!inicio) inicio = t;
      const avance = Math.min((t - inicio) / duracion, 1);
      // easeOutCubic: rápido al principio, frena suave al final.
      const suave = 1 - Math.pow(1 - avance, 3);
      const actual = objetivo * suave;
      setTexto(`${prefijo}${actual.toFixed(decimales)}${sufijo}`);
      if (avance < 1) raf = requestAnimationFrame(animar);
    };

    // Arranca la cuenta solo cuando el número entra bien en pantalla.
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          raf = requestAnimationFrame(animar);
          observador.disconnect(); // una sola vez
        }
      },
      { threshold: 0.5 },
    );
    observador.observe(el);

    return () => {
      observador.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [valor, match, decimales]);

  return (
    <span ref={ref} className={className}>
      {texto}
    </span>
  );
}
