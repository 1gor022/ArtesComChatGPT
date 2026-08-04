const TOPICS = [
  "preparar a fotografia",
  "organizar logo, cores e referências",
  "escrever um prompt completo",
  "preservar embalagem e proporções",
  "criar feed e Stories",
  "preparar imagens de catálogo",
  "destacar promoções",
  "corrigir produtos deformados",
  "corrigir textos e logos incorretos",
  "finalizar no Canva",
  "revisar antes de publicar",
];

export default function LearningSection() {
  return (
    <section className="section section-muted" aria-labelledby="learning-title">
      <div className="container">
        <h2 id="learning-title">
          Um processo para criar e corrigir suas próprias artes
        </h2>

        <div className="topic-list">
          {TOPICS.map((topic) => (
            <div className="topic-item" key={topic}>
              <span className="topic-item-check">✓</span>
              <span>{topic}</span>
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
