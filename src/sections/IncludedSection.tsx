import SafeImage from "../components/SafeImage";
import CheckoutButton from "../components/CheckoutButton";
import { PRODUCT_CONFIG } from "../config";

const ITEMS = [
  "Ebook completo",
  "Método PRODUTO",
  "Prompt Mestre",
  "Ficha de Planejamento",
  "Comandos de correção",
  "Exemplos",
  "Checklist",
  "Plano de sete dias",
];

export default function IncludedSection() {
  return (
    <section className="section" id="incluso" aria-labelledby="included-title">
      <div className="container included-grid">
        <div className="included-media">
          <SafeImage
            src="/ebook-mockup.png"
            alt="Mockup do ebook Artes que Vendem com ChatGPT"
            width={220}
            height={290}
          />
        </div>

        <div>
          <h2 id="included-title">Tudo o que você recebe</h2>

          <ul className="included-list">
            {ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="microtext" style={{ marginTop: 0 }}>
            Pagamento único • Acesso imediato
          </p>

          <CheckoutButton location="included">
            QUERO RECEBER TODO O MATERIAL
          </CheckoutButton>
          <p className="microtext">
            Garantia de {PRODUCT_CONFIG.guaranteeDays} dias
          </p>
        </div>
      </div>
    </section>
  );
}
