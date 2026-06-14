# laboratorio-web

Web de consultoría tecnológica construida con Next.js. El proyecto **se demuestra a sí mismo**: cada servicio que presenta —automatización, gestión de datos y modernización web— está implementado en la propia web y funcionando en producción.

> Proyecto de aprendizaje de desarrollo web full-stack.

## Características

- Páginas de servicios con **rutas dinámicas** generadas desde una única fuente de datos.
- **Formulario de contacto** que guarda las solicitudes en base de datos y envía un email de aviso.
- **Panel privado** con autenticación para consultar las solicitudes recibidas.
- Diseño oscuro y responsive con Tailwind CSS.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) — PostgreSQL, autenticación y RLS
- [Resend](https://resend.com/) — envío de emails
- Despliegue en [Vercel](https://vercel.com/)

## Requisitos previos

- Node.js 20 o superior (LTS recomendada)
- Una cuenta de [Supabase](https://supabase.com/) y otra de [Resend](https://resend.com/) para las funciones de base de datos y email

## Instalación

```bash
git clone <url-del-repositorio>
cd lab-web
npm install
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con tus propias claves:

```bash
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=tu_clave_publishable
RESEND_API_KEY=tu_clave_de_resend
```

> `.env.local` está incluido en `.gitignore`: nunca se sube al repositorio.

## Uso

```bash
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm start        # sirve el build de producción
```

## Estructura del proyecto

```
app/            Rutas (App Router): home, servicios, contacto, panel y API
components/     Componentes reutilizables (cabecera, pie, formulario, esquema)
lib/            Lógica compartida: cliente de Supabase y datos de los servicios
```

## Despliegue

Pensado para [Vercel](https://vercel.com/): conecta el repositorio, define las variables de entorno en el panel del proyecto y cada `git push` a la rama principal genera un despliegue automático.

## Licencia

Distribuido bajo la licencia [MIT](LICENSE).
