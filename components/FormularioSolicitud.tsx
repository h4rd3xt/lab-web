"use client"; // frontera: este componente SÍ viaja al navegador y cobra vida

import { useState } from "react";

export default function FormularioSolicitud() {
  // Inputs "controlados": React es el dueño del valor de cada campo
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState<"inicial" | "enviando" | "exito" | "error">("inicial");

  async function enviar(e: React.SubmitEvent) {
    e.preventDefault(); // sin esto, el navegador recargaría la página
    setEstado("enviando");
    const res = await fetch("/api/solicitudes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje }),
    });

    if (!res.ok) {
      setEstado("error");
    } else {
      setEstado("exito");
      setNombre(""); setEmail(""); setMensaje("");
    }
  }

  const estiloInput =
    "w-full rounded-lg border border-line bg-surface p-3 placeholder:text-ink-dim focus:border-brand focus:outline-none";

  return (
    <form onSubmit={enviar} className="mt-16 space-y-4 rounded-xl border border-line bg-surface-soft p-6">
      <h2 className="text-xl font-bold">Solicita una cita</h2>

      <input value={nombre} onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre *" required className={estiloInput} />

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Email *" required className={estiloInput} />

      <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}
        placeholder="Cuéntanos tu caso" rows={4} className={estiloInput} />

      <button type="submit" disabled={estado === "enviando"}
        className="rounded-lg bg-brand px-5 py-3 font-semibold text-surface disabled:opacity-50">
        {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
      </button>

      {estado === "exito" && <p className="text-brand">Recibida — gracias.</p>}
      {estado === "error" && <p className="text-red-400">Algo falló. Inténtalo de nuevo.</p>}
    </form>
  );
}