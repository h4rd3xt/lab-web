// lib/testimonios.ts
// Reseñas de clientes (datos de ejemplo).

export type Testimonio = {
  cita: string;
  nombre: string;
  cargo: string; // "Cargo, Empresa"
  iniciales: string; // para el avatar circular
  fuente?: string; // origen de la reseña, p.ej. "Google"
};

export const testimonios: Testimonio[] = [
  {
    cita: "Pasamos de gestionar todo a mano a tener un sistema que registra y avisa solo. Ganamos horas cada semana.",
    nombre: "Lucía Fernández",
    cargo: "Gerente, Talleres Fernández",
    iniciales: "LF",
    fuente: "Google",
  },
  {
    cita: "La web carga al instante y por fin nos encuentran los clientes adecuados. La inversión se notó en semanas.",
    nombre: "Marcos Ruiz",
    cargo: "CEO, Ruiz Reformas",
    iniciales: "MR",
    fuente: "Google",
  },
  {
    cita: "Profesionales y directos. Entendieron el problema antes de proponer nada y entregaron justo lo que necesitábamos.",
    nombre: "Ana Molina",
    cargo: "Directora, Molina Consulting",
    iniciales: "AM",
    fuente: "Google",
  },
];
