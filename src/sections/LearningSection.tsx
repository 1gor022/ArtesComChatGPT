const TOPICS = [
  "preparar a fotografia",
  "organizar logo, cores e referências",
  "escrever um prompt completo",
  "preservar embalagem e proporções",
  "criar artes para feed",
  "criar sequências de Stories",
  "preparar imagens de catálogo",
  "destacar promoções",
  "corrigir produtos deformados",
  "resolver textos e logos incorretos",
  "finalizar no Canva",
  "revisar antes de publicar",
];

export default function LearningSection() {
  return (
    <section className="section section-muted" aria-labelledby="learning-title">
      <div className="container">
        <h2 id="learning-title">
          Você terá um processo para criar e corrigir suas próprias artes
        </h2>

        <div className="topic-grid">
          {TOPICS.map((topic) => (
            <div className="topic-card" key={topic}>
              {topic}
            </div>
          ))}
        </div>

        <p className="section-note">
          Não é apenas um pacote de frases para copiar. Você aprende a
          adaptar o método ao seu próprio negócio.
        </p>
      </div>
    </section>
  );
}
