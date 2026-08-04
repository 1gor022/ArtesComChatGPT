import CheckoutButton from "../components/CheckoutButton";
import { PRODUCT_CONFIG } from "../config";

export default function OfferSection() {
  return (
    <section className="section section-muted" aria-labelledby="offer-title">
      <div className="container">
        <h2 id="offer-title">
          Comece hoje a criar artes mais profissionais para o seu negócio
        </h2>

        <div className="price-box">
          <span className="price-box-name">{PRODUCT_CONFIG.productName}</span>
          <span className="price-box-format">Ebook digital</span>
          <span className="price-box-price">{PRODUCT_CONFIG.price}</span>
          <span className="price-box-detail">Acesso imediato</span>
          <span className="price-box-detail">
            Garantia de {PRODUCT_CONFIG.guaranteeDays}
          </span>
          <span className="price-box-detail">Compra pela Kiwify</span>

          <CheckoutButton location="offer">
            QUERO ACESSAR O EBOOK AGORA
          </CheckoutButton>
          <p className="microtext">
            Você será direcionado ao checkout seguro da Kiwify.
          </p>
        </div>
      </div>
    </section>
  );
}
