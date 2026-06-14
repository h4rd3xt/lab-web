// lib/proceso.ts
// Los pasos de "cómo trabajamos". La home (y otras páginas) leerán de aquí
// en vez de tener los datos escritos dentro del componente.

export type PasoProceso = {
  numero: string;
  titulo: string;
  detalle: string;
};

export const proceso: PasoProceso[] = [
  {
    numero: "01",
    titulo: "Auditoría",
    detalle:
      "Analizamos tus procesos actuales y localizamos dónde pierdes tiempo: tareas repetitivas, datos dispersos, herramientas obsoletas.",
  },
  {
    numero: "02",
    titulo: "Implementación",
    detalle:
      "Construimos la solución con herramientas actuales y te la entregamos funcionando, con formación incluida para tu equipo.",
  },
  {
    numero: "03",
    titulo: "Mantenimiento",
    detalle:
      "Acompañamiento continuo: mejoras, soporte y evolución de la solución según crece tu negocio.",
  },
];
