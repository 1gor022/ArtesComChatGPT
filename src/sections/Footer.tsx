import { PRODUCT_CONFIG } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();

  const legalLinks = [
    { label: "Termos de Uso", url: PRODUCT_CONFIG.termsUrl },
    { label: "Política de Privacidade", url: PRODUCT_CONFIG.privacyUrl },
    { label: "Política de Reembolso", url: PRODUCT_CONFIG.refundUrl },
  ].filter((link) => link.url);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-product">{PRODUCT_CONFIG.productName}</p>
        <p>Autor: {PRODUCT_CONFIG.author}</p>
        <p>Suporte: {PRODUCT_CONFIG.supportContact}</p>
        <p>Produto digital</p>
        <p>
          © {year} {PRODUCT_CONFIG.author}. Todos os direitos reservados.
        </p>

        {legalLinks.length > 0 && (
          <p className="footer-links">
            {legalLinks.map((link, index) => (
              <span key={link.label}>
                <a href={link.url}>{link.label}</a>
                {index < legalLinks.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        )}

        <p className="footer-disclaimer">
          Os resultados podem variar conforme a foto, o produto e o uso da
          ferramenta.
        </p>
      </div>
    </footer>
  );
}
