const PAINS = [
  "Boas fotos, divulgação fraca",
  "Produto alterado pela IA",
  "Textos e logos incorretos",
  "Design pesando no orçamento",
];

export default function PainSection() {
  return (
    <section className="section" aria-labelledby="pain-title">
      <div className="container">
        <h2 id="pain-title">
          Seus produtos são bons. Suas artes também precisam demonstrar
          isso.
        </h2>
        <div className="pain-grid">
          {PAINS.map((pain) => (
            <div className="pain-card" key={pain}>
              {pain}
            </div>
          ))}
        </div>
        <p className="pain-conclusion">
          Você não precisa de mais tentativas aleatórias. Precisa de um
          processo para dizer à IA o que criar, preservar e corrigir.
        </p>
      </div>
    </section>
  );
}
