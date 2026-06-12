// lib/servicios.ts
// Fuente única de datos de los servicios de la consultora.
// La home y las páginas de detalle leen de aquí.

export type Servicio = {
    slug: string; // identificador en la URL: /servicios/[slug]
    nombre: string;
    claim: string; // frase corta para la tarjeta de la home
    descripcion: string; // párrafo para la página de detalle
    beneficios: string[];
    tecnologia: string; // qué pieza del laboratorio lo respalda
    flujo: string[]; // pasos del esquema visual, en orden
};

export const servicios: Servicio[] = [
    {
        slug: "automatizacion",
        nombre: "Automatización de procesos",
        claim: "Menos tareas manuales, menos errores, más tiempo.",
        descripcion:
            "Convertimos procesos repetitivos (avisos, registros, informes) en flujos automáticos que funcionan solos, 24/7.",
        beneficios: [
            "Notificaciones automáticas por email",
            "Registro de solicitudes sin intervención manual",
            "Trazabilidad: todo queda guardado",
        ],
        tecnologia: "Funciones serverless en Vercel + Resend",
        flujo: ["Cliente", "Formulario web", "Función en Vercel", "Email automático"],
    },
    {
        slug: "datos",
        nombre: "Gestión de datos",
        claim: "Tu información centralizada, segura y accesible.",
        descripcion:
            "Diseñamos bases de datos con control de acceso por roles, para que cada persona vea solo lo que le corresponde.",
        beneficios: [
            "Base de datos PostgreSQL gestionada",
            "Acceso protegido con autenticación",
            "Panel privado para consultar la información",
        ],
        tecnologia: "Supabase (PostgreSQL + Auth + RLS)",
        flujo: ["Solicitud", "API", "PostgreSQL + RLS", "Panel privado"],
    },
    {
        slug: "modernizacion",
        nombre: "Modernización web",
        claim: "Presencia digital rápida, actual y competente.",
        descripcion:
            "Webs modernas con despliegue continuo: cada mejora llega a producción en minutos, sin cortes de servicio.",
        beneficios: [
            "Rendimiento y SEO de última generación",
            "Despliegue automático desde GitHub",
            "Diseño adaptado a móvil",
        ],
        tecnologia: "Next.js + Vercel",
        flujo: ["git push", "GitHub", "Build en Vercel", "Producción"],
    },
];

// Búsqueda por slug; devuelve undefined si no existe (lo usará la página de detalle)
export function buscarServicio(slug: string): Servicio | undefined {
    return servicios.find((s) => s.slug === slug);
}