import CheckoutButton from "../components/CheckoutButton";

const BEFORE = ["pedidos vagos", "produtos alterados", "falta de padrão", "retrabalho"];

const AFTER = [
  "planejamento organizado",
  "direção visual",
  "restrições claras",
  "correções específicas",
  "mais consistência",
];

export default function ProductPresentation() {
  return (
    <section className="section section-muted" aria-labelledby="product-title">
      <div className="container">
        <h2 id="product-title">Um processo claro para criar, avaliar e corrigir</h2>

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

        <CheckoutButton location="method">
          QUERO APRENDER O MÉTODO
        </CheckoutButton>
      </div>
    </section>
  );
}
