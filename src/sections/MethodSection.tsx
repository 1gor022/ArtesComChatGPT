const LETTERS = [
  { letter: "P", word: "Propósito" },
  { letter: "R", word: "Referências" },
  { letter: "O", word: "Objeto" },
  { letter: "D", word: "Direção" },
  { letter: "U", word: "Uso e formato" },
  { letter: "T", word: "Texto" },
  { letter: "O", word: "O que não pode ser alterado" },
];

export default function MethodSection() {
  return (
    <section className="section" id="metodo" aria-labelledby="method-title">
      <div className="container">
        <h2 id="method-title">
          O método que transforma uma ideia vaga em um pedido claro
        </h2>

        <div className="method-grid">
          {LETTERS.map((item, index) => (
            <div className="method-card" key={`${item.letter}-${index}`}>
              <span className="method-letter">{item.letter}</span>
              <span className="method-word">{item.word}</span>
            </div>
          ))}
        </div>

        <p className="section-note">
          O Método PRODUTO ajuda você a reunir as informações essenciais antes
          de gerar a imagem, reduzindo interpretações erradas e retrabalho.
        </p>
      </div>
    </section>
  );
}
