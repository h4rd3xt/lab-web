import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

// SERVERLESS FUNCTION: este código corre en Vercel, JAMÁS en el navegador.
// Solo por eso puede leer RESEND_API_KEY (sin prefijo NEXT_PUBLIC_).
const resend = new Resend(process.env.RESEND_API_KEY);

// Exportar una función llamada POST = este endpoint responde a peticiones POST
export async function POST(request: Request) {
  const { nombre, email, mensaje } = await request.json();

  // Validación en servidor: nunca te fíes solo de lo que valide el navegador
  if (!nombre || !email) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }

  // 1. Guarda en PostgreSQL (sigue pasando por el portero RLS)
  const { error } = await supabase
    .from("solicitudes")
    .insert({ nombre, email, mensaje });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "No se pudo guardar" }, { status: 500 });
  }

  // 2. Ordena el email de aviso. Si fallara, no rompemos la respuesta:
  //    la solicitud ya está a salvo en la base de datos.
  await resend.emails
    .send({
      from: "Laboratorio <onboarding@resend.dev>", // único remitente sin dominio propio
      to: "h4rd3xt@protonmail.com",          // tu cuenta Resend: único destino permitido
      subject: `Nueva solicitud de ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
      replyTo: email,
    })
    .catch(console.error);

  return NextResponse.json({ ok: true });
}