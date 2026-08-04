import SafeImage from "../components/SafeImage";
import CheckoutButton from "../components/CheckoutButton";
import PriceBlock from "../components/PriceBlock";
import { PRODUCT_CONFIG, formatEndDate } from "../config";
import { useCountdown } from "../hooks/useCountdown";

export default function FinalCTA() {
  const { active } = useCountdown();

  return (
    <section className="section section-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta-grid">
        <SafeImage
          src="/ebook-mockup.png"
          alt="Mockup do ebook Artes que Vendem com ChatGPT"
          width={200}
          height={260}
        />

        <div>
          <h2 id="final-cta-title">
            Seu próximo post pode começar com uma foto simples e um pedido
            muito mais bem planejado.
          </h2>

          <PriceBlock />

          <div className="final-cta-details">
            <span>Garantia de {PRODUCT_CONFIG.guaranteeDays} dias</span>
            <span>Acesso imediato</span>
          </div>

          <CheckoutButton location="final_cta">
            QUERO CRIAR MINHAS PRÓPRIAS ARTES
          </CheckoutButton>

          {active && (
            <p className="microtext microtext-light">
              Oferta de lançamento disponível até {formatEndDate()}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
