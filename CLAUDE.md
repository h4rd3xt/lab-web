# CLAUDE.md — laboratorio-web

## Qué es este proyecto

Laboratorio de aprendizaje fullstack de José, con doble propósito: (1) campo de pruebas técnico y (2) semilla de una consultora tecnológica cuyo caso 0 es la gestión de un gabinete psicopedagógico (futuro SaaS vertical). No es un proyecto desechable: las decisiones se toman como si fuera a producción real.

## Cómo trabajar con José (IMPORTANTE)

- **Está aprendiendo.** Antes de dar código, explica el concepto y el porqué. Si aparece un nombre nuevo (hook, middleware, ORM...), explica qué significa y de dónde viene.
- **Él teclea.** Propón código y cambios; NO edites archivos sin que lo pida explícitamente. El objetivo es que aprenda, no terminar rápido.
- **Paso a paso.** Un bloque cada vez, con verificación al final de cada paso.
- **Siempre en español**, incluidos comentarios del código.
- Si comete un error, guíale a depurarlo (leer el log, partir el problema) antes de dar la solución.

## Stack

- **Next.js 16** (App Router, TypeScript estricto, Turbopack)
- **Tailwind 4** — sin `tailwind.config.js`: tokens en `@theme` dentro de `app/globals.css`
- **Supabase** — PostgreSQL + Auth + RLS. Claves nuevas (`sb_publishable_...` / `sb_secret_...`)
- **Resend** — email transaccional, en modo prueba (sin dominio: solo envía al email de la cuenta)
- **Vercel** — deploy continuo desde GitHub (`main` → producción)

## Arquitectura actual

- `/` — página pública (Server Component) con formulario de solicitudes (`components/FormularioSolicitud.tsx`, "use client")
- El formulario hace `fetch POST /api/solicitudes` → route handler (`app/api/solicitudes/route.ts`): valida → INSERT en Supabase → email de aviso vía Resend (con `replyTo` del cliente)
- `/panel` — login con Supabase Auth (password; usuario creado a mano, sin registro público) + lista de solicitudes
- `lib/supabase.ts` — cliente compartido (clave publishable)
- Tabla `solicitudes` con RLS: INSERT para `anon`, SELECT para `authenticated`, nada más
- Patrón de referencia: HUMANO → WEB (React) → FUNCTION (Vercel) → { SUPABASE + RESEND }

## Comandos y entorno

- `npm run dev` / `npm run build` (pasar build en local antes de push)
- Variables de entorno en DOS sitios: `.env.local` (local) y panel de Vercel (producción). Las tres: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `RESEND_API_KEY` (esta última, secreto: solo servidor)
- José trabaja desde 2 ordenadores: flujo clone/pull → npm install → dev

## Convenciones

- Tipos React 19: `React.SubmitEvent` (no `FormEvent`, obsoleto)
- Nombres de variables, componentes y tablas en español
- `docs/chuleta.md` — referencia de conceptos aprendidos y errores ya depurados
- Cambios de esquema SQL: por ahora vía SQL Editor de Supabase (pendiente: migraciones con CLI)
