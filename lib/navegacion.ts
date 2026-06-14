// lib/navegacion.ts
// Enlaces de navegación en un único sitio, para que la cabecera, el menú móvil
// y el pie no se desincronicen. Cambiar un enlace aquí lo cambia en todos.

export type Enlace = { href: string; etiqueta: string };

// Secciones principales (las del menú).
export const enlacesPrincipales: Enlace[] = [
  { href: "/servicios", etiqueta: "Servicios" },
  { href: "/proyectos", etiqueta: "Proyectos" },
  { href: "/mantenimiento", etiqueta: "Mantenimiento" },
];

// Enlaces legales (solo en el pie).
export const enlacesLegales: Enlace[] = [
  { href: "/aviso-legal", etiqueta: "Aviso legal" },
  { href: "/privacidad", etiqueta: "Privacidad" },
];
