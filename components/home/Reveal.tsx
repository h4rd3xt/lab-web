"use client"; // observa el scroll del navegador, así que es componente cliente

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Envoltorio que hace aparecer su contenido con un fundido de menos a más
// (sube ligeramente y se aclara) la primera vez que entra en pantalla.
// Usa IntersectionObserver: una API del navegador que avisa cuando el
// elemento observado cruza el borde visible de la ventana.
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect(); // solo la primera vez
        }
      },
      // rootMargin negativo abajo: dispara un poco antes de llegar al borde.
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    observador.observe(el);

    return () => observador.disconnect();
  }, []);

  // Las clases .reveal / .is-visible están definidas en globals.css.
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
