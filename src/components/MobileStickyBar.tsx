import { useEffect, useState } from "react";
import { PRODUCT_CONFIG, formatBRL, goToCheckout } from "../config";
import { useCountdown, formatCompact } from "../hooks/useCountdown";

export default function MobileStickyBar() {
  const countdown = useCountdown();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("final-cta-title");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`mobile-sticky-bar ${hidden ? "mobile-sticky-hidden" : ""}`}
    >
      <div className="mobile-sticky-info">
        <span className="mobile-sticky-price">
          {countdown.active
            ? formatBRL(PRODUCT_CONFIG.promotionalPrice)
            : formatBRL(PRODUCT_CONFIG.regularPrice)}
        </span>
        {countdown.active && (
          <span className="mobile-sticky-sub">
            Oferta termina em {formatCompact(countdown)}
          </span>
        )}
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
