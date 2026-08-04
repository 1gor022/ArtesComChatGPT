import { PRODUCT_CONFIG } from "../config";

export default function GuaranteeSection() {
  return (
    <section className="section" aria-labelledby="guarantee-title">
      <div className="container guarantee-box">
        <span className="guarantee-icon" aria-hidden="true">
          🛡️
        </span>
        <div>
          <h2 id="guarantee-title">
            Você tem {PRODUCT_CONFIG.guaranteeDays} dias para conhecer o
            material
          </h2>
          <p>
            Se o ebook não corresponder ao que foi apresentado nesta página,
            você pode solicitar reembolso dentro do prazo, conforme as
            condições da Kiwify.
          </p>
        </div>
      </div>
    </section>
  );
}
