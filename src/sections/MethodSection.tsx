const LETTERS = [
  { letter: "P", word: "Propósito" },
  { letter: "R", word: "Referências" },
  { letter: "O", word: "Objeto" },
  { letter: "D", word: "Direção" },
  { letter: "U", word: "Uso e formato" },
  { letter: "T", word: "Texto" },
  { letter: "O", word: "O que não pode ser alterado", wide: true },
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
            <div
              className={`method-card ${item.wide ? "method-card-wide" : ""}`}
              key={`${item.letter}-${index}`}
            >
              <span className="method-letter">{item.letter}</span>
              <span className="method-word">{item.word}</span>
            </div>
          ))}
        </div>

        <div className="method-example">
          <h3>Exemplo: lançamento de um hidratante</h3>
          <dl className="method-example-list">
            <div>
              <dt>Propósito</dt>
              <dd>anunciar o lançamento</dd>
            </div>
            <div>
              <dt>Direção</dt>
              <dd>premium e minimalista</dd>
            </div>
            <div>
              <dt>Uso</dt>
              <dd>feed 4:5</dd>
            </div>
            <div>
              <dt>Texto</dt>
              <dd>"Novidade: Hidratante Natural"</dd>
            </div>
            <div>
              <dt>Restrição</dt>
              <dd>preservar embalagem, tampa e rótulo</dd>
            </div>
          </dl>
        </div>

        <p className="section-note">
          Em poucos minutos, uma ideia vaga se transforma em um briefing
          completo para o ChatGPT.
        </p>
      </div>
    </section>
  );
}
