import type { Metadata } from "next";
import "./globals.css";

/*
 * layout.tsx es el LAYOUT RAÍZ: envuelve todas las páginas de la app.
 * Es el único sitio con <html> y <body>. Obligatorio en el App Router.
 */

// Next.js convierte este objeto en las etiquetas <title> y <meta> del <head>
export const metadata: Metadata = {
  title: "Laboratorio Web",
  description:
    "Campo de pruebas del stack: Next.js, TypeScript, Tailwind, Supabase y Resend",
};

export default function RootLayout({
  children, // children = la página que toque según la URL
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-surface text-ink antialiased">{children}</body>
    </html>
  );
}
