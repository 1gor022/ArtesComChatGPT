import SafeImage from "../components/SafeImage";

const STEPS = ["planejar", "gerar", "analisar", "corrigir", "finalizar"];

const IMAGES = [
  {
    src: "/product-original.jpg",
    alt: "Foto original do produto, sem edição",
    label: "1. Foto original",
  },
  {
    src: "/product-first-result.jpg",
    alt: "Primeira geração com erro no texto do rótulo",
    label: "2. Primeira geração",
    tag: { text: "❌ Texto com erro: “Hidratánte”", type: "error" as const },
  },
  {
    src: "/product-final-result.jpg",
    alt: "Resultado final corrigido, texto correto no rótulo",
    label: "3. Resultado corrigido",
    tag: { text: "✓ Texto corrigido: “Hidratante”", type: "fix" as const },
  },
];

export default function BeforeAfter() {
  return (
    <section className="section" aria-labelledby="before-after-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="before-after-title">Veja o método funcionando na prática</h2>
          <p className="section-lead">
            Da foto original ao resultado corrigido, sem precisar refazer
            tudo do zero.
          </p>
        </div>

        <div className="demo-scroll">
          {IMAGES.map((image) => (
            <figure key={image.src} className="demo-card">
              <SafeImage src={image.src} alt={image.alt} width={360} height={360} />
              <figcaption>{image.label}</figcaption>
              {image.tag && (
                <span
                  className={
                    image.tag.type === "error"
                      ? "demo-error-tag"
                      : "demo-fix-tag"
                  }
                >
                  {image.tag.text}
                </span>
              )}
            </figure>
          ))}
        </div>

        <p className="section-lead" style={{ fontSize: "0.92rem" }}>
          O primeiro resultado alterou o texto. Com um comando de correção do
          ebook, o restante da composição foi preservado e apenas o erro foi
          ajustado.
        </p>

        <ol className="process-steps">
          {STEPS.map((step, index) => (
            <li key={step}>
              <span className="process-step-number">{index + 1}</span>
              <span className="process-step-label">{step}</span>
            </li>
          ))}
        </ol>

        <p className="disclaimer" style={{ marginTop: 20 }}>
          Os resultados podem variar conforme a foto, o produto, o comando e
          a ferramenta utilizada.
        </p>
      </div>
    </section>
  );
}
