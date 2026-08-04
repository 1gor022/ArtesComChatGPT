import { useEffect, useState } from "react";
import SafeImage from "../components/SafeImage";

const PAGES = [
  { src: "/ebook-page-method.jpg", label: "Método PRODUTO" },
  { src: "/ebook-page-prompt.jpg", label: "Prompt Mestre" },
  { src: "/ebook-page-planning.jpg", label: "Ficha de Planejamento" },
  { src: "/ebook-page-corrections.jpg", label: "Comandos de correção" },
];

export default function InsideBook() {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <section className="section" aria-labelledby="inside-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="inside-title">Veja o que você encontrará por dentro</h2>
          <p className="section-lead">
            Um material visual e direto para consultar enquanto você cria
            suas artes.
          </p>
        </div>

        <div className="inside-scroll">
          {PAGES.map((page) => (
            <button
              type="button"
              key={page.src}
              className="inside-item"
              onClick={() => setOpen(page.src)}
              aria-label={`Ampliar página: ${page.label}`}
            >
              <SafeImage src={page.src} alt={`Página do ebook — ${page.label}`} width={320} height={400} />
              <span className="inside-label">{page.label}</span>
            </button>
          ))}
        </div>

        {open && (
          <div
            className="inside-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Página ampliada do ebook"
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              className="inside-modal-close"
              aria-label="Fechar"
              onClick={() => setOpen(null)}
            >
              ×
            </button>
            <SafeImage src={open} alt="Página ampliada do ebook" className="inside-modal-img" />
          </div>
        )}
      </div>
    </section>
  );
}
