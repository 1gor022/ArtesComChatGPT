import SafeImage from "../components/SafeImage";
import CheckoutButton from "../components/CheckoutButton";
import { PRODUCT_CONFIG } from "../config";

export default function FinalCTA() {
  return (
    <section className="section section-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta-grid">
        <SafeImage
          src="/ebook-mockup.png"
          alt="Mockup do ebook Artes que Vendem com ChatGPT"
          width={220}
          height={290}
        />

        <div>
          <h2 id="final-cta-title">
            Seu próximo post pode começar com uma foto simples e um pedido
            muito mais bem planejado.
          </h2>

          <div className="final-cta-details">
            <span>{PRODUCT_CONFIG.price}</span>
            <span>Garantia de {PRODUCT_CONFIG.guaranteeDays}</span>
            <span>Acesso imediato</span>
          </div>

          <CheckoutButton location="final_cta">
            QUERO CRIAR MINHAS PRÓPRIAS ARTES
          </CheckoutButton>
        </div>
      </div>
    </section>
  );
}
