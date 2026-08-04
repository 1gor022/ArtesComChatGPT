import { PRODUCT_CONFIG, formatBRL, goToCheckout } from "../config";
import { useCountdown, formatCompact } from "../hooks/useCountdown";

export default function PromoBar() {
  const countdown = useCountdown();

  if (!countdown.active) return null;

  return (
    <div className="promo-bar">
      <div className="promo-bar-inner">
        <span>
          Oferta de lançamento: {formatBRL(PRODUCT_CONFIG.promotionalPrice)} •
          termina em {formatCompact(countdown)}
        </span>
        <button
          type="button"
          className="promo-bar-link"
          onClick={() => goToCheckout("promo_bar")}
        >
          Ver oferta
        </button>
      </div>
    </div>
  );
}
