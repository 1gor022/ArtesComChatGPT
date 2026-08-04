const OBJECTIONS = [
  {
    question: "Não sei design",
    answer: "O método foi feito para iniciantes, com passo a passo visual.",
  },
  {
    question: "Não sei usar Photoshop",
    answer: "Você usa principalmente ChatGPT e Canva — sem programas complexos.",
  },
  {
    question: "Meus produtos são de outro segmento",
    answer: "O Método PRODUTO se adapta a diferentes produtos e públicos.",
  },
  {
    question: "A IA sempre erra minhas imagens",
    answer: "O ebook ensina a proteger detalhes e corrigir o que sair errado.",
  },
];

export default function ObjectionsSection() {
  return (
    <section className="section" aria-labelledby="objections-title">
      <div className="container">
        <h2 id="objections-title">Você não precisa ser designer para começar</h2>

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
