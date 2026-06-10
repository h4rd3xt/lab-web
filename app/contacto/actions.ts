"use server";

import { supabase } from "@/lib/supabase";

export type FormState = {
  ok: boolean;
  message: string;
};

export async function enviarContacto(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const nombre = formData.get("nombre")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const mensaje = formData.get("mensaje")?.toString().trim() ?? "";

  if (!nombre || !email || !mensaje) {
    return { ok: false, message: "Rellena todos los campos." };
  }

  const { error } = await supabase
    .from("contactos")
    .insert({ nombre, email, mensaje });

  if (error) {
    console.error("Supabase error:", error.message);
    return { ok: false, message: "Error al guardar. Inténtalo de nuevo." };
  }

  return { ok: true, message: "¡Mensaje enviado! Nos ponemos en contacto pronto." };
}
