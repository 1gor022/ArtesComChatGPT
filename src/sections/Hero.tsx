import SafeImage from "../components/SafeImage";
import CheckoutButton from "../components/CheckoutButton";
import { PRODUCT_CONFIG } from "../config";

const BENEFITS = [
  "Método simples e passo a passo",
  "Aplicável a diferentes negócios",
  "Prompt Mestre e comandos de correção",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>
            Transforme fotos comuns dos seus produtos em artes profissionais
            usando o ChatGPT
          </h1>
          <p className="hero-subheadline">{PRODUCT_CONFIG.subtitle}</p>

          <ul className="hero-benefits">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className="hero-price-block">
            <span className="hero-price">{PRODUCT_CONFIG.price}</span>
            <span className="hero-price-tag">Ebook digital</span>
            <span className="hero-price-tag">Acesso imediato</span>
          </div>

          <CheckoutButton location="hero">
            QUERO CRIAR ARTES MAIS PROFISSIONAIS
          </CheckoutButton>
          <p className="microtext">Compra segura pela Kiwify</p>

          <p className="trust-line">
            Acesso digital • Pagamento seguro • {PRODUCT_CONFIG.guaranteeDays}{" "}
            de garantia
          </p>
        </div>

        <div className="hero-media">
          <SafeImage
            src="/hero-creative.png"
            alt="Exemplo de arte comercial criada a partir de foto de produto"
            className="hero-creative-img"
            width={520}
            height={520}
            loading="eager"
          />
          <SafeImage
            src="/ebook-mockup.png"
            alt="Mockup do ebook Artes que Vendem com ChatGPT"
            className="hero-mockup-img"
            width={260}
            height={340}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
