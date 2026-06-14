# lab-web

Documentación y arquitectura de referencia de una **consultora tecnológica** y su
primer caso práctico: la web/app de una **consulta psicopedagógica**.

El proyecto tiene dos niveles: la consultora (estrategia de negocio) y el caso
psicopedagógico, que sirve como campo de pruebas, portfolio y semilla de un
posible producto vertical replicable.

## Contenido

- **`resumen-proyecto-consultora.html`** — Documento de referencia (autocontenido).
  Recoge la estrategia de la consultora, el stack técnico explicado en 5
  "departamentos", un flujo de uso integrado y los puntos pendientes. Ábrelo en
  el navegador.
- **`anotaciones.rtf`** — Notas de conceptos, tecnicismos y jerga del sector.
- **`CLAUDE.md`** — Contexto del proyecto para retomarlo desde cualquier equipo.

## Stack de referencia

| Capa | Tecnología |
|---|---|
| Entorno | VSCode · Git · GitHub |
| Frontend | Next.js (App Router) · React · TypeScript · Tailwind |
| Hosting | Vercel (serverless functions, CDN, CD) |
| Backend & datos | Supabase (PostgreSQL · Auth · RLS · Storage) |
| Email | Resend |

**Idea clave de la arquitectura:** el frontend nunca habla directamente con los
datos; una *serverless function* custodia los secretos y orquesta el acceso a
Supabase (punto de verdad, con seguridad a nivel de fila / RLS) y a Resend
(email transaccional).

## Estado

Proyecto en desarrollo. Por ahora el repositorio reúne la **documentación y la
arquitectura** del proyecto; el código de la aplicación se incorporará más
adelante.
