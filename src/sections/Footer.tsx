import { PRODUCT_CONFIG } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();

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
        <p className="footer-disclaimer">
          Os resultados podem variar conforme a foto, o produto e o uso da
          ferramenta.
        </p>
      </div>
    </footer>
  );
}
