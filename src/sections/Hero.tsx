import SafeImage from "../components/SafeImage";
import CheckoutButton from "../components/CheckoutButton";
import PriceBlock from "../components/PriceBlock";
import { PRODUCT_CONFIG } from "../config";

const BENEFITS = [
  "Método simples e passo a passo",
  "Aplicável a diferentes tipos de negócio",
  "Prompts e comandos de correção",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-media">
          <SafeImage
            src="/hero-creative.png"
            alt="Foto de produto transformada em arte comercial profissional, com mockup do ebook Artes que Vendem com ChatGPT"
            className="hero-visual"
            width={600}
            height={600}
            loading="eager"
          />
        </div>

        <div className="hero-text">
          <span className="eyebrow">Método PRODUTO</span>
          <h1>
            Transforme fotos de produtos em artes profissionais com ChatGPT
          </h1>
          <p className="hero-subheadline">{PRODUCT_CONFIG.subtitle}</p>

          <div className="hero-offer-card">
            <div className="hero-offer-label">Oferta de lançamento</div>
            <PriceBlock />
            <p className="microtext" style={{ marginTop: 4 }}>
              Pagamento único • Não é assinatura
            </p>
          </div>

          <CheckoutButton location="hero">
            QUERO ACESSAR O MÉTODO
          </CheckoutButton>
          <p className="microtext">Compra segura pelo checkout da Kiwify</p>
          <p className="trust-line">
            {PRODUCT_CONFIG.guaranteeDays} dias de garantia • Acesso imediato
            • Produto digital
          </p>

          <ul className="hero-benefits">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
