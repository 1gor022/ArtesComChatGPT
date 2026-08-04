import SafeImage from "../components/SafeImage";
import CheckoutButton from "../components/CheckoutButton";
import CountdownTimer from "../components/CountdownTimer";
import PriceBlock from "../components/PriceBlock";
import { useCountdown } from "../hooks/useCountdown";

const INCLUDES = [
  "ebook completo",
  "Método PRODUTO",
  "Prompt Mestre",
  "ficha de planejamento",
  "comandos de correção",
  "checklist e plano de 7 dias",
];

export default function OfferSection() {
  const { active } = useCountdown();

  return (
    <section className="section section-muted" aria-labelledby="offer-title">
      <div className="container">
        <div className="offer-panel">
          <div className="offer-media">
            <SafeImage
              src="/ebook-mockup.png"
              alt="Mockup do ebook Artes que Vendem com ChatGPT"
              width={220}
              height={290}
            />
            <span className="offer-badge">Acesso imediato</span>
          </div>

          <div>
            <h2 id="offer-title">
              Comece hoje a criar artes mais profissionais
            </h2>

            <ul className="offer-includes-list">
              {INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <PriceBlock />
            <p className="microtext microtext-light">
              Pagamento único — não é assinatura
            </p>

            {active && (
              <div className="offer-urgency">
                <span>Termina em:</span>
                <CountdownTimer compact />
              </div>
            )}

            <CheckoutButton location="offer">
              QUERO APROVEITAR A OFERTA
            </CheckoutButton>
            <p className="microtext microtext-light">
              Checkout seguro da Kiwify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
