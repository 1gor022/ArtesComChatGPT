import { PRODUCT_CONFIG, formatBRL, getSavings } from "../config";
import { useCountdown } from "../hooks/useCountdown";

interface PriceBlockProps {
  align?: "left" | "center";
}

export default function PriceBlock({ align = "left" }: PriceBlockProps) {
  const { active } = useCountdown();

  return (
    <div className={`price-block price-block-${align}`}>
      {active ? (
        <>
          <span className="price-old">
            {formatBRL(PRODUCT_CONFIG.regularPrice)}
          </span>
          <span className="price-new">
            {formatBRL(PRODUCT_CONFIG.promotionalPrice)}
          </span>
          <span className="price-savings">
            Economize {formatBRL(getSavings())}
          </span>
        </>
      ) : (
        <span className="price-new">
          {formatBRL(PRODUCT_CONFIG.regularPrice)}
        </span>
      )}
    </div>
  );
}
