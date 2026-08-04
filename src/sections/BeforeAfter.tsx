import SafeImage from "../components/SafeImage";

const STEPS = [
  "planejamento",
  "prompt",
  "geração",
  "análise",
  "correção",
  "finalização",
];

const IMAGES = [
  {
    src: "/product-original.jpg",
    alt: "Foto original do produto, sem edição",
    label: "Foto original",
  },
  {
    src: "/product-first-result.jpg",
    alt: "Primeira geração de arte feita com ChatGPT",
    label: "Primeira geração",
  },
  {
    src: "/product-final-result.jpg",
    alt: "Resultado final da arte comercial corrigida",
    label: "Resultado final",
  },
];

export default function BeforeAfter() {
  return (
    <section className="section" aria-labelledby="before-after-title">
      <div className="container">
        <h2 id="before-after-title">
          De uma foto comum para uma divulgação mais profissional
        </h2>

        <div className="before-after-grid">
          {IMAGES.map((image) => (
            <figure key={image.src} className="before-after-item">
              <SafeImage
                src={image.src}
                alt={image.alt}
                width={360}
                height={360}
              />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>

        <ol className="process-steps">
          {STEPS.map((step, index) => (
            <li key={step}>
              <span className="process-step-number">{index + 1}</span>
              <span className="process-step-label">{step}</span>
            </li>
          ))}
        </ol>

        <p className="disclaimer">
          Os resultados podem variar conforme a foto, o produto e a
          ferramenta utilizada.
        </p>
      </div>
    </section>
  );
}
