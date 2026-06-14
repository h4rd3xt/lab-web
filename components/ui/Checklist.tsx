// Checklist: lista de beneficios con ✓. Recibe un array de textos.
export default function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 text-brand" aria-hidden="true">
            ✓
          </span>
          <span className="text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}
