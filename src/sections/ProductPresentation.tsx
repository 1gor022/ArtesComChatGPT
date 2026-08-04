import CheckoutButton from "../components/CheckoutButton";

const BEFORE = [
  "pedidos genéricos",
  "produto alterado",
  "artes sem padrão",
  "retrabalho",
  "dependência constante",
];

const AFTER = [
  "planejamento organizado",
  "direção visual definida",
  "restrições claras",
  "processo de correção",
  "mais consistência nas divulgações",
];

export default function ProductPresentation() {
  return (
    <section className="section section-muted" aria-labelledby="product-title">
      <div className="container">
        <h2 id="product-title">Conheça o Artes que Vendem com ChatGPT</h2>
        <p className="section-lead">
          Um manual visual e prático para quem precisa divulgar produtos, mas
          não domina design e não quer perder horas testando comandos vagos.
        </p>

        <div className="compare-grid">
          <div className="compare-column compare-before">
            <h3>Antes</h3>
            <ul>
              {BEFORE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare-column compare-after">
            <h3>Depois</h3>
            <ul>
              {AFTER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <CheckoutButton location="product">
          QUERO ACESSAR O EBOOK
        </CheckoutButton>
      </div>
    </section>
  );
}
