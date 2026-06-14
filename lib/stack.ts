// lib/stack.ts
// Tecnologías que usamos, agrupadas por categoría.

export type GrupoStack = {
  categoria: string;
  tecnologias: string[];
};

export const stack: GrupoStack[] = [
  {
    categoria: "Frontend",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    categoria: "Backend",
    tecnologias: ["Node.js", "Supabase", "PostgreSQL"],
  },
  {
    categoria: "Infraestructura",
    tecnologias: ["Vercel", "GitHub", "Despliegue continuo"],
  },
  {
    categoria: "Servicios",
    tecnologias: ["Resend (email)", "Supabase Auth"],
  },
];
