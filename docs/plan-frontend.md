# Plan de Frontend — lab-web

> Roadmap por fases para convertir lab-web en un sitio **multipágina completo**, inspirado en la estructura de [Norvyplus](https://norvyplus.com), manteniendo **nuestro tema oscuro** (paleta actual + cian de marca) y adoptando sus secciones y microanimaciones.

## Alcance de esta fase

- **Solo frontend.** No añadimos funcionalidad nueva de backend todavía. Lo que ya funciona (formulario de contacto → API → Supabase → email, y el panel) se queda como está.
- **Datos locales (mock).** Las secciones nuevas (proyectos, testimonios, stack…) leerán de archivos de datos en `lib/`, igual que ya hace `lib/servicios.ts`. *Mock* = datos de prueba escritos a mano que más adelante podremos sustituir por datos reales de una base de datos.
- **Multipágina:** Inicio, Servicios (+ detalle), Proyectos (+ detalle), Mantenimiento, Contacto, y las legales que ya existen.

## Punto de partida (lo que ya tienes)

- Páginas: `/`, `/servicios` (+ `/servicios/[slug]`), `/contacto`, `/panel`, `/aviso-legal`, `/privacidad`.
- Componentes: `Encabezado`, `Pie`, `FormularioSolicitud`, `EsquemaFlujo`.
- Datos: `lib/servicios.ts` (fuente única de los servicios).
- Estilos: *design tokens* en `app/globals.css` (`@theme`) con la paleta oscura y el cian `--color-brand`.

Sobre esa base construimos. El objetivo no es rehacer, sino **ampliar y pulir**.

---

## Fase 0 — Sistema de diseño (los cimientos)

Antes de montar páginas, creamos las piezas reutilizables para que todo sea coherente. Un *sistema de diseño* es el conjunto de tokens (colores, espaciados, tipografía) y componentes base que se repiten por toda la web.

- [ ] Revisar y ampliar los *design tokens* en `globals.css` si hace falta (sombras, radios, quizá un gradiente de marca para los fondos del hero).
- [x] Crear los componentes base ("ladrillos") que detectamos en Norvy:
  - [x] `Eyebrow` — la etiqueta pequeña en mayúsculas sobre los títulos.
  - [x] `TituloSeccion` — eyebrow + título + subtítulo, con espaciado consistente.
  - [x] `Boton` — variantes primario / secundario (unifica el `.btn-primario` actual).
  - [x] `Tarjeta` — contenedor con borde y fondo `surface-soft`, reutilizable.
  - [x] `Etiqueta` (badge/tag) — para categorías y tecnologías.
  - [x] `Stat` — número grande + descripción (las métricas de prueba social).
  - [x] `Checklist` — lista de beneficios con ✓.
- [x] Definir los archivos de datos nuevos en `lib/`: `proyectos.ts`, `testimonios.ts`, `stack.ts`, `proceso.ts` (con sus tipos TypeScript, como en `servicios.ts`).

**Resultado:** una caja de herramientas visual lista para ensamblar páginas rápido y sin incoherencias.

---

## Fase 1 — Navegación y estructura multipágina

- [x] Ampliar `Encabezado` con los enlaces nuevos: Inicio · Servicios · Proyectos · Mantenimiento · Contacto + CTA.
- [x] Añadir el **menú móvil** (hamburguesa): un componente cliente (`"use client"`) con estado abierto/cerrado, como el "Abrir menú" de Norvy.
- [x] Revisar/ampliar el `Pie` (footer) con las nuevas secciones y datos de contacto.
- [x] Crear los esqueletos navegables de las rutas nuevas (páginas mínimas, aún sin contenido final):
  - [x] `/proyectos` y `/proyectos/[slug]`
  - [x] `/mantenimiento`

**Resultado:** puedes navegar por todo el sitio aunque las páginas estén "en bruto". Así trabajamos sin enlaces rotos.

---

## Fase 2 — Home enriquecida (la pieza estrella)

Montamos la portada sección a sección, cada una como su propio componente, reutilizando los ladrillos de la Fase 0. Orden sugerido:

- [ ] **Hero** pulido: eyebrow + titular grande + **palabra rotativa** (animación que cambia una palabra cada pocos segundos) + 2 CTAs + 3 mini-argumentos + panel visual con motivos de código.
- [ ] **Marquee**: cinta horizontal de palabras clave que se desplaza en bucle.
- [ ] **Enfoque** + 2 `Stat` grandes (tipo "+40%", "3×").
- [ ] **Proceso**: evolucionar tus 3 pasos actuales al formato numerado (puedes mantener 3 o pasar a 4).
- [ ] **Servicios** (preview): 3 tarjetas + enlace a `/servicios` (ya tienes la base).
- [ ] **Proyectos** (preview): 2-3 tarjetas destacadas + enlace a `/proyectos`.
- [ ] **Testimonios**: tarjetas con cita, avatar (iniciales), nombre y cargo.
- [ ] **Stack tecnológico**: agrupado por categoría (Frontend, Backend, etc.).
- [ ] **CTA final**: bloque de cierre con botón y badges de disponibilidad.

**Resultado:** una home a la altura de Norvy, con tu identidad oscura.

---

## Fase 3 — Páginas internas

- [ ] **Servicios**: aplicar el nuevo sistema visual al índice y al detalle `[slug]` (ya existen).
- [ ] **Proyectos**: índice con tarjetas (captura, métricas, tags) y página de **detalle/caso de estudio** `[slug]` (problema, solución, resultados, tecnologías, imágenes).
- [ ] **Mantenimiento**: página de planes/servicio recurrente (tarjetas de planes con lo que incluye cada uno).
- [ ] **Contacto**: pulir la presentación (el formulario ya funciona; aquí solo es estética y textos).

**Resultado:** todas las rutas con contenido real y coherente.

---

## Fase 4 — Pulido, responsive y accesibilidad

- [ ] **Responsive**: revisar cada sección en móvil y tablet (*responsive* = que el diseño se adapte al tamaño de pantalla).
- [ ] **Microanimaciones**: hover en tarjetas/botones y *scroll reveal* (elementos que aparecen al hacer scroll).
- [ ] **Accesibilidad** (*a11y*): textos `alt` en imágenes, etiquetas `aria`, buen contraste, foco de teclado visible (ya tienes el `:focus-visible`).
- [ ] **SEO y metadata** por página: `title`/`description` propios y la `og-image` (la imagen que se ve al compartir el enlace).
- [ ] **Rendimiento**: imágenes con `next/image`, carga de fuentes correcta.

**Resultado:** un sitio rápido, accesible y que se ve bien en cualquier dispositivo.

---

## Fase 5 — Revisión final

- [ ] Repaso visual en varios tamaños de pantalla.
- [ ] Auditoría con Lighthouse (rendimiento, accesibilidad, SEO, buenas prácticas).
- [ ] Comprobar todos los enlaces y la coherencia general.

---

## Por dónde empezamos

**Fase 0 + Fase 1**: primero los componentes base y la navegación multipágina. Con eso, montar el resto de páginas será rápido y consistente.

> Cada casilla `[ ]` es un objetivo concreto; las iremos marcando a medida que avancemos.
