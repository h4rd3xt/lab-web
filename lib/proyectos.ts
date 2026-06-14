// lib/proyectos.ts
// Fuente única de los proyectos del portfolio (datos de ejemplo por ahora).

export type Metrica = {
  valor: string; // p.ej. "+180%"
  etiqueta: string; // qué mide esa cifra
};

export type Proyecto = {
  slug: string; // identificador en la URL: /proyectos/[slug]
  nombre: string;
  categoria: string; // "Web", "Automatización", "Datos"...
  anio: number;
  resumen: string; // frase corta para la tarjeta del listado
  descripcion: string; // párrafo para la página de detalle
  problema: string; // qué necesitaba el cliente
  solucion: string; // qué construimos
  resultado: string; // qué consiguió
  metricas: Metrica[]; // 3 cifras destacadas
  tecnologias: string[]; // stack usado
  imagen: string; // ruta a la captura (la añadiremos en /public)
};

export const proyectos: Proyecto[] = [
  {
    slug: "laboratorio-web",
    nombre: "Laboratorio Web",
    categoria: "Web",
    anio: 2026,
    resumen: "La web que estás viendo: una consultora que se demuestra a sí misma.",
    descripcion:
      "Sitio corporativo en Next.js que usa en producción cada servicio que ofrece: el formulario alimenta una base de datos real y dispara avisos por email automáticos.",
    problema:
      "Una consultora técnica necesitaba una web que no solo contara lo que hace, sino que lo demostrara funcionando.",
    solucion:
      "Web multipágina con formulario conectado a base de datos, panel privado y despliegue continuo.",
    resultado:
      "Cada visita comprueba en vivo la automatización, la gestión de datos y la velocidad de la que habla la web.",
    metricas: [
      { valor: "0.8s", etiqueta: "Carga inicial (LCP)" },
      { valor: "100%", etiqueta: "Despliegue automático" },
      { valor: "24/7", etiqueta: "Avisos automáticos" },
    ],
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    imagen: "/proyectos/laboratorio-web.png",
  },
  {
    slug: "automatizacion-solicitudes",
    nombre: "Automatización de solicitudes",
    categoria: "Automatización",
    anio: 2026,
    resumen: "De formularios manuales a un flujo que registra y avisa solo.",
    descripcion:
      "Sustituimos un proceso manual de recepción de solicitudes por un flujo automático: cada envío se guarda, se notifica al equipo y queda trazado.",
    problema:
      "Las solicitudes llegaban por canales dispersos y se perdía tiempo (y clientes) gestionándolas a mano.",
    solucion:
      "Un endpoint serverless que valida, almacena en base de datos y envía un aviso por email en segundos.",
    resultado:
      "Cero solicitudes perdidas y respuesta mucho más rápida, sin intervención humana en el registro.",
    metricas: [
      { valor: "-90%", etiqueta: "Tiempo de gestión" },
      { valor: "100%", etiqueta: "Solicitudes registradas" },
      { valor: "<1s", etiqueta: "Aviso al equipo" },
    ],
    tecnologias: ["Next.js", "Funciones serverless", "Resend", "Supabase"],
    imagen: "/proyectos/automatizacion-solicitudes.png",
  },
  {
    slug: "panel-datos",
    nombre: "Panel privado de datos",
    categoria: "Datos",
    anio: 2026,
    resumen: "Acceso controlado a la información: cada quien ve lo suyo.",
    descripcion:
      "Panel interno con autenticación y control de acceso por filas para que el equipo consulte las solicitudes con total seguridad.",
    problema:
      "Necesitaban consultar datos sensibles sin exponerlos ni montar una herramienta cara.",
    solucion:
      "Panel con login y reglas de seguridad a nivel de base de datos (RLS), accesible desde cualquier dispositivo.",
    resultado:
      "Información centralizada, protegida y disponible al instante, sin hojas de cálculo sueltas.",
    metricas: [
      { valor: "100%", etiqueta: "Accesos autenticados" },
      { valor: "RLS", etiqueta: "Seguridad por filas" },
      { valor: "0", etiqueta: "Datos expuestos" },
    ],
    tecnologias: ["Next.js", "Supabase Auth", "PostgreSQL"],
    imagen: "/proyectos/panel-datos.png",
  },
];

// Búsqueda por slug; undefined si no existe (lo usará la página de detalle).
export function buscarProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
