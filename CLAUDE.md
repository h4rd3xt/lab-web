# CLAUDE.md

Contexto para el asistente de IA al trabajar en este repositorio. Mantener conciso y actualizado.

## Qué es

`laboratorio-web` (lab-web): web de una consultora tecnológica que **se demuestra a sí misma** — cada servicio que ofrece lo usa la propia web en producción (el formulario = automatización, el panel = gestión de datos, el despliegue continuo = modernización web). Desplegada en Vercel. Proyecto con fines didácticos.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript (modo `strict`)
- Tailwind CSS v4 — **sin** `tailwind.config.js`; el tema vive en `app/globals.css` con `@theme`
- Supabase (`@supabase/supabase-js`): PostgreSQL + Auth + RLS
- Resend: envío de emails
- Alias de imports: `@/*` → raíz del proyecto

## Comandos

- `npm run dev` — desarrollo en http://localhost:3000
- `npm run build` — build de producción
- `npm start` — sirve el build de producción

## Arquitectura

- Rutas en `app/` (App Router): cada carpeta con `page.tsx` es una URL.
- Por defecto los componentes son **Server Components**. Solo llevan `"use client"` los que necesitan estado/interacción: `components/FormularioSolicitud.tsx` y `app/panel/page.tsx`.
- Datos de los servicios centralizados en `lib/servicios.ts` (fuente única de datos). La ruta dinámica `app/servicios/[slug]/page.tsx` se pre-genera por slug con `generateStaticParams`.
- Cliente Supabase único en `lib/supabase.ts` (usa la clave *publishable*, pública; todo pasa por RLS).
- Flujo del formulario: `FormularioSolicitud` → `POST /api/solicitudes` → insert en la tabla `solicitudes` (Supabase) → email con Resend → visible en `/panel` tras login.

## Convenciones

- **Idioma: todo en español** — código, nombres de archivos, funciones y variables, y comentarios (`Encabezado`, `Pie`, `buscarServicio`, `enviar`...). Mantenerlo.
- Comentarios didácticos: el proyecto explica los conceptos a medida que aparecen; al añadir código, comentar en el mismo tono cuando aporte valor.
- Estilos solo con clases de Tailwind y los tokens del tema (`bg-surface`, `text-ink`, `text-brand`, `border-line`...). Nada de CSS suelto salvo en `globals.css`.
- En el App Router, `params` es una `Promise` (Next 15+): hay que hacer `await params`.
- Validar **siempre** en el servidor (la API valida aunque el navegador ya lo haga).

## Variables de entorno (`.env.local`, NO se sube al repo)

- `NEXT_PUBLIC_SUPABASE_URL` — URL del proyecto Supabase
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — clave pública de Supabase
- `RESEND_API_KEY` — secreto; solo se usa en la función serverless de la API

El prefijo `NEXT_PUBLIC_` expone la variable al navegador; sin él, solo es accesible en el servidor.

## Mapa de archivos

```
app/
  layout.tsx              Layout raíz (<html>/<body>, fuentes, Encabezado y Pie)
  page.tsx                Home
  globals.css             Tailwind v4 + tokens del tema (@theme)
  servicios/page.tsx      Índice de servicios
  servicios/[slug]/page.tsx  Detalle de servicio (ruta dinámica)
  contacto/page.tsx       Formulario de contacto
  panel/page.tsx          Login + listado de solicitudes (client)
  aviso-legal/, privacidad/  Páginas legales
  api/solicitudes/route.ts   Endpoint POST del formulario
components/
  Encabezado.tsx, Pie.tsx, FormularioSolicitud.tsx, EsquemaFlujo.tsx
lib/
  supabase.ts             Cliente Supabase
  servicios.ts            Datos de los servicios + buscarServicio()
```
