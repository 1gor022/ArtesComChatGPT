const STEPS = ["Planejar", "Gerar", "Analisar", "Corrigir", "Finalizar"];

export default function ProcessContrast() {
  return (
    <section className="section section-navy" aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title">
          Você não recebe apenas prompts. Recebe um processo reutilizável.
        </h2>

        <div className="process-contrast-grid">
          {STEPS.map((step, index) => (
            <div className="process-contrast-item" key={step}>
              <span className="process-contrast-number">{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <p className="process-contrast-text">
          Depois de aprender o processo, você poderá adaptá-lo a novos
          produtos, campanhas e formatos de divulgação.
        </p>
      </div>
    </section>
  );
}
