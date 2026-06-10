"use client";

import { useActionState } from "react";
import { enviarContacto, type FormState } from "./actions";

const initialState: FormState = { ok: false, message: "" };

export default function ContactoForm() {
  const [state, action, pending] = useActionState(enviarContacto, initialState);

  if (state.ok) {
    return (
      <div className="rounded-xl border border-line bg-surface-soft p-6 text-center">
        <p className="text-lg font-semibold text-brand">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state.message && (
        <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <div className="space-y-1">
        <label htmlFor="nombre" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full rounded-lg border border-line bg-surface-soft px-4 py-2 text-sm outline-none focus:border-brand"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-line bg-surface-soft px-4 py-2 text-sm outline-none focus:border-brand"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="mensaje" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="w-full rounded-lg border border-line bg-surface-soft px-4 py-2 text-sm outline-none focus:border-brand"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-brand px-6 py-2 text-sm font-semibold text-white disabled:opacity-50"
      >
        {pending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
