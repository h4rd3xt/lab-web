import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Encabezado from "@/components/Encabezado";
import Pie from "@/components/Pie";

// next/font genera una variable CSS con la familia; la conectamos a Tailwind en globals.css
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

/*
 * layout.tsx es el LAYOUT RAÍZ: envuelve todas las páginas de la app.
 * Es el único sitio con <html> y <body>. Obligatorio en el App Router.
 */

// Next.js convierte este objeto en las etiquetas <title> y <meta> del <head>
export const metadata: Metadata = {
  // Base para resolver URLs relativas de la metadata (imágenes OG, etc.)
  metadataBase: new URL("https://lab-web-six.vercel.app/"),
  title: {  
    default: "Laboratorio Web — Consultoría tecnológica",
    template: "%s · Laboratorio Web",
  },
  description:
    "Automatización, gestión de datos y modernización web. Sin humo: todo funciona en esta misma web.",
  openGraph: {
    title: "Laboratorio Web",
    description: "Automatización, gestión de datos y modernización web.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children, // children = la página que toque según la URL
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="flex min-h-dvh flex-col bg-surface font-sans text-ink antialiased">
        <Encabezado />
        {children}
        <Pie />
        </body>
    </html>
  );
}
