import { PRODUCT_CONFIG, goToCheckout } from "../config";

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar">
      <div className="mobile-sticky-info">
        <strong>{PRODUCT_CONFIG.price}</strong>
        <span>Acesso imediato</span>
      </div>
      <button
        type="button"
        className="btn-primary btn-sticky"
        onClick={() => goToCheckout("mobile_sticky")}
      >
        QUERO O EBOOK
      </button>
    </div>
  );
}
