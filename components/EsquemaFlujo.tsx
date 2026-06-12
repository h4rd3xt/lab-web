import React from "react";
// components/EsquemaFlujo.tsx
// Diagrama de flujo simple: cajas + flechas. Server Component.

export default function EsquemaFlujo({ pasos }: { pasos: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {pasos.map((paso, indice) => (
        <React.Fragment key={paso}>
          <span className="rounded-lg border border-line bg-surface px-4 py-2 font-mono text-sm">
            {paso}
          </span>
          {/* Flecha entre pasos: en todos menos el último */}
          {indice < pasos.length - 1 && (
            <span className="text-brand" aria-hidden="true">
              →
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}