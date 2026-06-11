# Chuleta · laboratorio-web

> Punto de guardado: **11 de junio de 2026** — los 5 departamentos funcionando en producción.
> Stack: Next.js 16 · TypeScript · Tailwind 4 · GitHub · Vercel · Supabase · Resend

---

## 1 · Qué hay construido

```
 VISITANTE                      JOSÉ (profesional)
    │                               │
    ▼                               ▼
┌─────────────────── VERCEL ───────────────────┐
│  WEB pública (/)          PANEL (/panel)      │
│  · página + formulario    · login + lista     │
│  ──────────────────────────────────────────   │
│  FUNCTION /api/solicitudes  🔒 RESEND_API_KEY │
└──────┬──────────────────────────┬─────────────┘
       │ insert (RLS)             │ ordena email
       ▼                          ▼
 ┌──────────┐               ┌──────────┐
 │ SUPABASE │               │  RESEND  │──▶ gmail de José
 │ Postgres │               └──────────┘    (replyTo: cliente)
 └──────────┘
```

- **Repo:** GitHub `laboratorio-web` (público) → cada `git push` despliega solo.
- **Tabla `solicitudes`:** id uuid · creada_en timestamptz · nombre · email · teléfono · mensaje.
- **RLS:** `anon` puede INSERT · `authenticated` puede SELECT · nadie puede UPDATE/DELETE.
- **Usuario del panel:** creado a mano en Supabase Auth (no hay registro público).

## 2 · El viaje de una solicitud (el patrón que se repite)

1. El visitante rellena el formulario — componente `"use client"`, un `useState` por campo.
2. `fetch POST /api/solicitudes` — el navegador solo conoce TU API, nada de claves.
3. La serverless function valida, hace `insert` (pasa por el portero RLS) y ordena el email a Resend con la API key que solo ella conoce.
4. El email llega a tu gmail; "Responder" escribe al cliente gracias a `replyTo`.
5. En `/panel`, tras el login, el `select` viaja con tu JWT → RLS abre la puerta de lectura.

**HUMANO → WEB (React) → FUNCTION (Vercel) → { SUPABASE + RESEND }**

## 3 · Diccionario de lo aprendido

### Nombres del stack

| Término | En una frase |
|---|---|
| **Serverless** | Servidores hay, pero no los gestionas: escribes funciones y Vercel las ejecuta bajo demanda. |
| **BaaS** | Backend as a Service: backend ya construido que consumes por API (Supabase). |
| **Jamstack** | JavaScript + APIs + Markup: frontend servido desde CDN, lo dinámico delegado a APIs. |
| **Escalera aaS** | IaaS (infraestructura) → PaaS (Vercel) → BaaS (Supabase) → SaaS (producto final). |
| **Scaffold** | "Andamio": esqueleto mínimo de archivos sobre el que se construye el proyecto. |

### React y Next.js

| Término | En una frase |
|---|---|
| **Server Component** | Se ejecuta en el servidor; al navegador llega solo el HTML resultante (modo por defecto). |
| **`"use client"`** | Frontera: este componente sí envía su JS al navegador → puede tener estado y clics. |
| **Hook** | Función `use...` que engancha superpoderes a un componente. |
| **`useState`** | Memoria del componente: `const [valor, setValor] = useState(inicial)`; cambiar estado = repintar. |
| **`useEffect`** | Código que corre tras el pintado; `[]` = una vez, `[x]` = cuando cambie x. Aquí se llama a Supabase. |
| **Input controlado** | React es dueño del valor: `value={x}` + `onChange={(e) => setX(e.target.value)}`. |
| **Render condicional** | Pintar según datos: `{estado === "exito" && <p>...</p>}`. |
| **Listas** | `array.map()` + prop `key` única por elemento. |
| **Routing** | Las carpetas son las URLs: `app/panel/page.tsx` → `/panel`; `app/api/x/route.ts` → `/api/x`. |
| **Route handler** | Tu API: archivo `route.ts` que exporta `POST`, `GET`... Corre como serverless function. |
| **`React.SubmitEvent`** | El tipo correcto del evento de envío de formulario (FormEvent quedó obsoleto en React 19). |

### Datos y seguridad

| Término | En una frase |
|---|---|
| **RLS** | Portero dentro de PostgreSQL: evalúa cada fila de cada operación contra tus policies. |
| **Policy** | Puerta concreta que abres: son aditivas, cada una cubre operación + rol. |
| **`USING` vs `WITH CHECK`** | USING filtra lo que ves/tocas; WITH CHECK valida lo que escribes. |
| **Roles** | `anon` (sin login) · `authenticated` (JWT válido) · `service_role` (llave maestra, salta RLS, solo servidor). |
| **JWT** | "Carnet" firmado que Auth emite al login; supabase-js lo adjunta solo a cada petición. |
| **Claves API** | `sb_publishable_...` pública (navegador, rol anon) · `sb_secret_...` secreta (solo servidor). |
| **`NEXT_PUBLIC_`** | Prefijo que expone la variable al navegador. Sin él = solo servidor (ahí viven los secretos). |
| **relation** | Cómo llama PostgreSQL a las tablas (lo verás en sus errores). |
| **SQL Editor** | Consola de órdenes, no archivo de configuración: cada query se ejecuta una vez. |

### Email

| Término | En una frase |
|---|---|
| **Email transaccional** | Automático, individual, disparado por un evento (confirmación, factura, aviso). |
| **SPF** | Registro DNS: lista de servidores autorizados a enviar por tu dominio. |
| **DKIM** | Firma criptográfica: demuestra que el email es de tu dominio y nadie lo manipuló. |
| **DMARC** | Instrucciones al receptor si SPF/DKIM fallan (rechazar, spam, informar). |
| **`replyTo`** | A dónde van las respuestas: el robot envía, pero respondes al humano. |
| **Modo prueba Resend** | Sin dominio verificado: solo desde `onboarding@resend.dev` y solo a TU email. |

## 4 · Comandos de diario

```bash
# Ciclo de trabajo (lo harás mil veces)
git status                  # ¿qué ha cambiado?
git add .                   # prepara la foto
git commit -m "mensaje"     # dispara la foto
git push                    # sube → Vercel despliega solo

# Al cambiar de ordenador
git clone <url>             # primera vez
git pull                    # las siguientes: trae lo último
npm install                 # si es clon nuevo o cambió package.json

# Desarrollo
npm run dev                 # servidor local con hot reload
npm run build               # el examen estricto — pásalo antes de push
```

## 5 · Reglas de oro (aprendidas con sangre)

1. **Cada secreto nuevo va a DOS sitios:** `.env.local` y el panel de Vercel. Y las env vars solo aplican a builds posteriores → Redeploy.
2. **Next lee `.env.local` al arrancar:** si lo tocas, reinicia `npm run dev`.
3. **`node_modules` y `.env*` jamás al repo** — el `.gitignore` es seguridad, no estilo.
4. **La seguridad vive en la base de datos (RLS), no en React** — el código del navegador es público.
5. **`npm run build` en local antes de push** — dev es permisivo, build es el examen.
6. **El `console.error` del servidor sale en la TERMINAL**, no en las DevTools del navegador. En producción: Vercel → Logs.
7. **El error real está arriba del log** — "exited with 1" solo es el portazo final.
8. **En el SQL Editor, selecciona y ejecuta solo lo que quieras correr.**

## 6 · Errores que ya depuraste (tu historial de guerra)

| Síntoma | Causa | Solución |
|---|---|---|
| `"next" no se reconoce...` | Clon nuevo sin dependencias | `npm install` |
| `relation "solicitudes" already exists` | El editor ejecutó también el `create table` antiguo | Ejecutar solo la query nueva |
| Email no llega (403 en logs) | Modo prueba: destino ≠ email de tu cuenta Resend | `to:` fijo con tu email |
| Build Vercel falla, local pasa | `RESEND_API_KEY` ausente en Vercel | Añadirla + Redeploy |
| Warning `FormEvent deprecated` | Tipo obsoleto en React 19 | `React.SubmitEvent` |

## 7 · Siguiente nivel (pendientes)

- Frontend profesional: next/font, responsive, hero, navegación.
- Migrar el doc de arquitectura a páginas React del laboratorio.
- Panel: marcar solicitudes como atendidas (UPDATE + policy nueva), estados de carga.
- Dominio propio → verificar en Resend (SPF/DKIM) → email de confirmación al cliente + React Email.
- Migraciones SQL versionadas en Git (Supabase CLI).
- Más adelante: Stripe, testing, CI/CD — Fases 2-4 de tu roadmap.
