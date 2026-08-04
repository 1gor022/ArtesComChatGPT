import CheckoutButton from "../components/CheckoutButton";
import { PRODUCT_CONFIG } from "../config";

const ITEMS = [
  "Ebook Artes que Vendem com ChatGPT",
  "Método PRODUTO",
  "Prompt Mestre",
  "Ficha de Planejamento",
  "Comandos de correção",
  "Exemplos de aplicação",
  "Checklist",
  "Plano de sete dias",
];

export default function IncludedSection() {
  return (
    <section className="section" id="incluso" aria-labelledby="included-title">
      <div className="container">
        <h2 id="included-title">Tudo o que você recebe</h2>

        <ul className="included-list">
          {ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="section-note">
          Um material visual, direto e feito para ser consultado enquanto
          você cria suas artes.
        </p>

        <div className="offer-box">
          <span className="offer-price">{PRODUCT_CONFIG.price}</span>
          <span className="offer-detail">
            Garantia de {PRODUCT_CONFIG.guaranteeDays}
          </span>
          <span className="offer-detail">Acesso imediato</span>
          <CheckoutButton location="included">
            QUERO COMEÇAR AGORA
          </CheckoutButton>
        </div>
      </div>
    </section>
  );
}
