const FOR = [
  "pequenos empreendedores e lojas",
  "fabricantes e distribuidores",
  "artesãos e vendedores autônomos",
  "quem vende no Instagram e WhatsApp",
  "iniciantes em design",
];

const NOT_FOR = [
  "espera resultado perfeito sem testar",
  "não pretende revisar as imagens",
  "busca promessa de vendas garantidas",
];

export default function AudienceSection() {
  return (
    <section className="section section-muted" aria-labelledby="audience-title">
      <div className="container">
        <h2 id="audience-title">Criado para quem precisa divulgar produtos</h2>

        <div className="audience-grid">
          <div>
            <h3>É para você</h3>
            <ul>
              {FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Não é para você, se</h3>
            <ul>
              {NOT_FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
