"use client"; // usa un temporizador (estado en el tiempo), así que corre en el navegador

import { useEffect, useState } from "react";

// Palabra que cambia sola cada pocos segundos dentro del titular del hero.
// Aislada en su propio archivo para que el resto del Hero siga siendo
// Server Component (no enviamos JavaScript de más al navegador).
export default function PalabraRotativa({
  palabras,
  intervalo = 2200, // milisegundos entre cambios
}: {
  palabras: string[];
  intervalo?: number;
}) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    // setInterval ejecuta la función cada `intervalo` ms.
    const id = setInterval(() => {
      // El módulo (%) hace que tras la última palabra vuelva a la primera.
      setIndice((i) => (i + 1) % palabras.length);
    }, intervalo);

    // Limpieza: al desmontar el componente, paramos el temporizador.
    return () => clearInterval(id);
  }, [palabras.length, intervalo]);

  return (
    <span className="text-brand">
      {/* La `key` cambia con cada palabra: React re-monta el span y se
          dispara de nuevo la animación de entrada definida en globals.css */}
      <span key={indice} className="animar-entrada-palabra inline-block">
        {palabras[indice]}
      </span>
    </span>
  );
}
