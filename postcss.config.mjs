/**
 * PostCSS procesa tu CSS durante el build.
 * Tailwind v4 se engancha aquí como plugin: lee tus clases
 * (bg-surface, flex, p-4...) y genera solo el CSS que usas.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
