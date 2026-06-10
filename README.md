# laboratorio-web

Campo de pruebas del stack serverless con BaaS: **Next.js 16 + TypeScript + Tailwind 4**, con GitHub, Vercel, Supabase y Resend en el horizonte. Aquí se practica todo lo que una web actual necesita antes de aplicarlo a proyectos reales de la consultora.

## Requisitos

Node.js **20.9 o superior** (compruébalo con `node -v`).

## Primer arranque

Abre esta carpeta en VSCode, abre su terminal integrada (`Ctrl + ñ`) y ejecuta:

```bash
npm install   # descarga las dependencias a node_modules (1 sola vez)
npm run dev   # arranca el servidor de desarrollo
```

Visita **http://localhost:3000**. Si ves la página del stack, los departamentos 1 y 2 funcionan. El servidor se detiene con `Ctrl + C`.

Prueba el ciclo completo: edita un texto en `app/page.tsx`, guarda, y mira el navegador — se actualiza solo (hot reload).

## Estructura

```
laboratorio-web/
├── app/                  ← tu aplicación (App Router)
│   ├── layout.tsx        ← layout raíz: envuelve todas las páginas (<html>, <body>)
│   ├── page.tsx          ← la página de inicio (ruta "/")
│   └── globals.css       ← entrada de Tailwind + tokens de color de marca
├── package.json          ← identidad del proyecto: dependencias y scripts
├── tsconfig.json         ← configuración de TypeScript
├── next.config.ts        ← configuración de Next.js
├── postcss.config.mjs    ← conecta Tailwind al build
├── .env.example          ← plantilla de secretos (la real será .env.local)
└── .gitignore            ← lo que NUNCA sube al repo: node_modules, .env*
```

Carpetas que aparecerán solas y no se tocan: `node_modules/` (dependencias), `.next/` (build de desarrollo). Ambas están en `.gitignore`.

## Scripts

| Comando         | Qué hace                                          |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con hot reload (Turbopack) |
| `npm run build` | Compila la versión optimizada de producción       |
| `npm start`     | Sirve esa versión de producción en local          |

## Hoja de ruta (los 5 departamentos)

1. ✅ **Entorno** — VSCode + Git/GitHub → siguiente paso: `git init` y primer push
2. ✅ **Frontend** — Next.js + React + Tailwind → migrar el doc de arquitectura a componentes
3. ⬜ **Infraestructura** — conectar el repo a Vercel → deploy automático con cada push
4. ⬜ **Backend y datos** — Supabase: formulario de contacto que escriba en PostgreSQL (con RLS)
5. ⬜ **Comunicaciones** — Resend: email de confirmación desde una serverless function

## Regla de oro

Los secretos viven en `.env.local` (no existe aún; se crea copiando `.env.example`). Ese archivo está en `.gitignore` y **jamás se sube al repo**. En producción, los secretos se configuran en el panel de Vercel.
