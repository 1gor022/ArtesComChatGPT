const PAINS = [
  "você tira a foto, mas não sabe transformá-la em divulgação",
  "cada postagem fica com uma aparência diferente",
  "o ChatGPT altera o produto ou a embalagem",
  "textos e logos ficam incorretos",
  "você perde tempo repetindo comandos",
  "contratar um designer para cada publicação pesa no orçamento",
];

export default function PainSection() {
  return (
    <section className="section section-muted" aria-labelledby="pain-title">
      <div className="container">
        <h2 id="pain-title">
          Seus produtos são bons. Suas artes também precisam parecer.
        </h2>
        <ul className="pain-list">
          {PAINS.map((pain) => (
            <li key={pain}>{pain}</li>
          ))}
        </ul>
        <p className="pain-conclusion">
          O problema não é falta de criatividade. O que geralmente falta é um
          processo claro para explicar à inteligência artificial exatamente o
          que você precisa.
        </p>
      </div>
    </section>
  );
}
