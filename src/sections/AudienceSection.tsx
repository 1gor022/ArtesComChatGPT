const FOR = [
  "pequenos empreendedores",
  "lojas",
  "distribuidores",
  "fabricantes",
  "artesãos",
  "vendedores autônomos",
  "pessoas que vendem no Instagram",
  "pessoas que utilizam o WhatsApp",
  "iniciantes em design",
];

const NOT_FOR = [
  "espera resultado perfeito sem realizar testes",
  "não pretende revisar as imagens",
  "quer copiar outras marcas",
  "procura promessa de vendas garantidas",
];

export default function AudienceSection() {
  return (
    <section className="section section-muted" aria-labelledby="audience-title">
      <div className="container">
        <h2 id="audience-title">Criado para quem precisa divulgar produtos</h2>

        <div className="audience-grid">
          <div>
            <h3>É indicado para</h3>
            <ul>
              {FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Não é indicado para quem</h3>
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
