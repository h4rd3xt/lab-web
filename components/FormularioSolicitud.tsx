"use client"; // frontera: este componente SÍ viaja al navegador y cobra vida

import { useState } from "react";

export default function FormularioSolicitud() {
  // Inputs "controlados": React es el dueño del valor de cada campo
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState<"inicial" | "enviando" | "exito" | "error">("inicial");

  async function enviar(e: React.SubmitEvent) {
    e.preventDefault();
    setEstado("enviando");
    try {
      const res = await fetch("/api/solicitudes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      });
      if (!res.ok) throw new Error(`El servidor respondió ${res.status}`);
      setEstado("exito");
      setNombre(""); setEmail(""); setMensaje("");
    } catch {
      setEstado("error"); // red caída O error del servidor: mismo destino
    }
  }

  const estiloInput =
    "w-full rounded-lg border border-line bg-surface p-3 placeholder:text-ink-dim focus:border-brand focus:outline-none";

  return (
    <form onSubmit={enviar} className="mt-16 space-y-4 rounded-xl border border-line bg-surface-soft p-6">
      <h2 className="text-xl font-bold">Solicita una cita</h2>

      <label htmlFor="nombre" className="sr-only">Nombre</label>
      <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre *" required className={estiloInput} />

      <label htmlFor="email" className="sr-only">Email</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Email *" required className={estiloInput} />

      <label htmlFor="mensaje" className="sr-only">Mensaje</label>
      <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}
        placeholder="Cuéntanos tu caso" rows={4} className={estiloInput} />

      <button type="submit" disabled={estado === "enviando"}
        className="rounded-lg cursor-pointer btn-primario">
        {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
      </button>

      {estado === "exito" && <p className="text-success">Recibida — gracias.</p>}
      {estado === "error" && <p className="text-danger">Algo falló. Inténtalo de nuevo.</p>}
    </form>
  );
}