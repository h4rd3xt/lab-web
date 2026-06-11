"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

type Solicitud = {
  id: string;
  creada_en: string;
  nombre: string;
  email: string;
  mensaje: string | null;
};

export default function Panel() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [error, setError] = useState("");

  // useEffect: código que corre DESPUÉS de pintarse el componente.
  // Aquí: recuperar la sesión guardada y escuchar sus cambios (login/logout).
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange(
      (_evento, sesion) => setSession(sesion)
    );
    return () => sub.subscription.unsubscribe(); // limpieza al salir de la página
  }, []); // [] = ejecútate solo una vez, tras el primer pintado

  // Segundo efecto: depende de [session] — corre cuando session cambia.
  useEffect(() => {
    if (!session) return;
    supabase
      .from("solicitudes")
      .select("*")
      .order("creada_en", { ascending: false })
      .then(({ data }) => setSolicitudes(data ?? []));
  }, [session]);

  async function entrar(e: React.SubmitEvent) {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError("Credenciales incorrectas");
    // Si va bien no hace falta nada más: onAuthStateChange actualiza session
  }

  // ---- Sin sesión: login ----
  if (!session) {
    return (
      <main className="mx-auto max-w-sm px-6 py-24">
        <h1 className="text-2xl font-bold">Panel</h1>
        <form onSubmit={entrar} className="mt-8 space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" required
            className="w-full rounded-lg border border-line bg-surface-soft p-3" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña" required
            className="w-full rounded-lg border border-line bg-surface-soft p-3" />
          <button className="w-full rounded-lg bg-brand p-3 font-semibold text-surface">
            Entrar
          </button>
          {error && <p className="text-red-400">{error}</p>}
        </form>
      </main>
    );
  }

  // ---- Con sesión: las solicitudes ----
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Solicitudes</h1>
        <button onClick={() => supabase.auth.signOut()}
          className="rounded-lg border border-line px-4 py-2 text-sm text-ink-soft">
          Salir
        </button>
      </div>
      <ul className="mt-8 space-y-3">
        {solicitudes.map((s) => (
          <li key={s.id} className="rounded-xl border border-line bg-surface-soft p-4">
            <div className="flex justify-between">
              <p className="font-semibold">{s.nombre}</p>
              <p className="font-mono text-xs text-ink-dim">
                {new Date(s.creada_en).toLocaleString("es-ES")}
              </p>
            </div>
            <p className="font-mono text-sm text-brand">{s.email}</p>
            {s.mensaje && <p className="mt-2 text-ink-soft">{s.mensaje}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}