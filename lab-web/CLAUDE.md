# CLAUDE.md — lab-web

Contexto para retomar el proyecto desde cualquier equipo. Describe **el estado
actual**, no planes ni objetivos.

## Qué es este proyecto

`lab-web` es el repositorio de **documentación y aprendizaje** de un proyecto con
dos niveles:

- **La consultora** (estrategia, largo plazo): una consultora que optimiza
  procesos de negocio mediante tecnología. Cobra de tres formas: diagnóstico
  (puntual), implementación a medida (por proyecto) y soporte/mantenimiento
  (recurrente).
- **El proyecto psicopedagógico** (caso práctico, ahora): una web/app para una
  consulta psicopedagógica. Es el *caso 0*: campo de pruebas, portfolio y semilla
  de un posible producto vertical replicable (SaaS).

El usuario (**José**) está aprendiendo el stack mientras se construye este caso.

## Cómo trabajar en este proyecto (importante)

Este es un proyecto de **aprendizaje guiado**. La dinámica acordada es:

1. **José teclea, no se le entrega el código hecho.** Se le explican los
   conceptos y él los implementa/escribe.
2. **Con cada punto de progreso, se explican los conceptos aprendidos.** José los
   anota él mismo en `anotaciones.rtf`. En ese fichero solo van **conceptos,
   tecnicismos y jerga del sector** (no pasos ni código).
3. **`resumen-proyecto-consultora.html` es el documento de referencia vivo**
   (la "plantilla del objetivo"). Se actualiza a medida que se consiguen los
   objetivos propuestos.
4. **Idioma de trabajo: español.**

## Ficheros actuales

| Fichero | Qué es |
|---|---|
| `resumen-proyecto-consultora.html` | Documento de referencia/arquitectura ("north star"). Página HTML autocontenida y estilada. |
| `anotaciones.rtf` | Notas personales de José: glosario de conceptos y jerga aprendidos. |
| `CLAUDE.md` | Este fichero. |

> Estado del código: este repositorio contiene **solo documentación**. Todavía no
> hay código de aplicación (no hay `package.json`, carpeta `app/`, ni repo Git
> inicializado en esta carpeta).

### Estructura de `resumen-proyecto-consultora.html`

Documento de 4 partes: **(1)** la consultora (estrategia, servicios
productizados, pricing), **(2)** el stack técnico en 5 "departamentos", **(3)** un
flujo integrado de ejemplo (caso de la consulta psicopedagógica, con diagrama de
secuencia UML) y **(4)** una sección de puntos pendientes.

## Arquitectura de referencia (los 5 "departamentos")

Stack documentado en el HTML alrededor del que gira el proyecto:

1. **Entorno de desarrollo** — VSCode + Git / GitHub.
2. **Frontend** — React + Tailwind (sobre Next.js, App Router, TypeScript).
3. **Infraestructura & hosting** — Vercel (despliegue continuo, CDN, serverless
   functions, variables de entorno).
4. **Backend & datos** — Supabase (PostgreSQL, Auth/JWT, **RLS**, Storage,
   Realtime, PostgREST, Edge Functions).
5. **Comunicaciones** — Resend (email transaccional, React Email, SPF/DKIM/DMARC).

**Patrón base de la arquitectura:** el frontend (React) nunca actúa solo contra
los datos; quien cruza hacia Supabase/Resend es siempre una **serverless
function de Vercel**, que custodia los secretos. Supabase es el punto de verdad
compartido y **RLS** decide qué ve cada rol. Resend es la última milla (envío),
siempre disparado desde el servidor, nunca desde el navegador.

**Secretos:** la `anon key` de Supabase es pública (navegador); `service_role`
(Supabase) y la API key de Resend son privadas y viven **solo** en el servidor.
Nunca subir `.env` ni `node_modules/` al repositorio.

## Conceptos ya cubiertos en `anotaciones.rtf`

Glosario tratado hasta ahora (para no repetir explicaciones y poder construir
sobre ellas): Serverless, BaaS (y la escalera IaaS → PaaS → BaaS → SaaS),
Jamstack, Server Components, renderizado en servidor (SSR) vs SPA, `useState`,
`"use client"`, scaffold/scaffolding, despliegue continuo (CD), protocolo de
email (SMTP, SPF, DKIM, DMARC) y `useEffect` con Auth (JWT + `supabase-js` + RLS).
