const OBJECTIONS = [
  {
    question: "Não sei usar Photoshop",
    answer:
      "O método foi desenvolvido para iniciantes e utiliza principalmente ChatGPT e Canva.",
  },
  {
    question: "Meus produtos são de outro segmento",
    answer:
      "O Método PRODUTO pode ser adaptado a diferentes produtos físicos, públicos e formatos.",
  },
  {
    question: "A IA sempre erra minhas imagens",
    answer:
      "O ebook mostra como reduzir erros, proteger elementos importantes e corrigir o que não saiu como esperado.",
  },
];

export default function ObjectionsSection() {
  return (
    <section className="section" aria-labelledby="objections-title">
      <div className="container">
        <h2 id="objections-title">
          Você não precisa ser designer para começar
        </h2>

        <div className="objections-grid">
          {OBJECTIONS.map((item) => (
            <div className="objection-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
