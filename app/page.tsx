"use client";

import { useEffect, useRef, useState } from "react";

const CHECKOUT_URL = "https://pay.cakto.com.br/a99zpau_1040535";

const method = [
  ["P", "Propósito", "Objetivo da arte."],
  ["R", "Referências", "Direção visual."],
  ["O", "Objeto", "Produto principal."],
  ["D", "Direção", "Cores e estilo."],
  ["U", "Uso", "Formato e canal."],
  ["T", "Texto", "Mensagem da peça."],
  ["O", "O que preservar", "Limites e restrições."],
];

const faqs = [
  ["Preciso saber design?", "Não. O método foi pensado para iniciantes e organiza o processo passo a passo."],
  ["Preciso pagar pelo ChatGPT?", "Não necessariamente. Você pode começar com a versão disponível para você; recursos e limites variam conforme o plano."],
  ["Funciona com diferentes tipos de produtos?", "Sim. A estrutura pode ser adaptada a diferentes categorias de produtos físicos."],
  ["Como recebo o conteúdo?", "O acesso ao material digital é liberado após a confirmação do pagamento pela plataforma."],
  ["O pagamento é único?", "Sim. Você paga R$10,90 uma única vez, sem mensalidade."],
  ["E se eu não gostar?", "Você poderá solicitar o reembolso dentro do prazo de 7 dias, conforme as condições da plataforma."],
];

function BuyButton({ children, compact = false }: { children: React.ReactNode; compact?: boolean }) {
  return <a className={`cta ${compact ? "compact" : ""}`} href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function ProductImage({ src, alt, fit = "cover" }: { src: string; alt: string; fit?: "cover" | "contain" }) {
  return <div className={`product-image ${fit === "contain" ? "contain" : ""}`}><img src={src} alt={alt} /></div>;
}

function Comparison({ before, after, channel, title, afterFit = "contain" }: { before: string; after: string; channel: string; title: string; afterFit?: "cover" | "contain" }) {
  return (
    <article className="comparison-card">
      <div className="comparison-labels"><span>FOTO ORIGINAL</span><b>{channel}</b><span>ARTE PROFISSIONAL</span></div>
      <div className="comparison-visual"><ProductImage src={before} alt={`Foto original: ${title}`} /><div className="arrow" aria-hidden="true">→</div><ProductImage src={after} alt={`Arte profissional para ${channel}: ${title}`} fit={afterFit} /></div>
      <h3>{title}</h3>
    </article>
  );
}

function GuideMockup() {
  return (
    <div className="guide-scene" aria-label="Representação do guia Artes que Vendem com ChatGPT">
      <div className="guide-book"><div className="guide-spine" /><div className="guide-cover"><span>MÉTODO PRODUTO</span><h3>Artes que<br /><em>Vendem</em><br />com ChatGPT</h3><p>Transforme fotos comuns em apresentações profissionais</p><div className="cover-grid"><i /><i /><i /><i /></div></div></div>
      <div className="guide-sheet sheet-one"><b>70</b><span>prompts<br />prontos</span></div>
      <div className="guide-sheet sheet-two"><b>✓</b><span>checklist<br />profissional</span></div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sticky, setSticky] = useState(false);
  const [slide, setSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.querySelector("#inicio");
    const offer = document.querySelector("#oferta");
    if (!hero || !offer) return;
    let heroVisible = true;
    let offerVisible = false;
    const update = () => setSticky(!heroVisible && !offerVisible);
    const heroObserver = new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; update(); }, { threshold: 0.08 });
    const offerObserver = new IntersectionObserver(([entry]) => { offerVisible = entry.isIntersecting; update(); }, { threshold: 0.08 });
    heroObserver.observe(hero); offerObserver.observe(offer);
    return () => { heroObserver.disconnect(); offerObserver.disconnect(); };
  }, []);

  const goToSlide = (index: number) => {
    const next = Math.max(0, Math.min(2, index));
    setSlide(next);
    const track = carouselRef.current;
    const card = track?.children[next] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const updateSlide = () => {
    const track = carouselRef.current;
    if (!track || !track.children.length) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      if (Math.abs(cardCenter - center) < Math.abs((cards[closest].offsetLeft + cards[closest].offsetWidth / 2) - center)) closest = index;
    });
    setSlide(closest);
  };

  return (
    <main>
      <section className="hero dark-section" id="inicio">
        <div className="top-ribbon">MÉTODO COMPLETO + 3 BÔNUS • ACESSO IMEDIATO</div>
        <div className="container hero-grid">
          <div className="hero-intro">
            <span className="eyebrow orange">PARA QUEM APRESENTA PRODUTOS NA INTERNET</span>
            <h1>Seu produto é bom. Sua apresentação <em>precisa mostrar isso.</em></h1>
            <p className="hero-lead">Transforme fotos comuns dos seus produtos em artes mais profissionais com ChatGPT — mesmo sem saber design.</p>
          </div>
          <div className="hero-demo">
            <span className="demo-kicker">FOTO COMUM → ARTE PROFISSIONAL</span>
            <div className="hero-comparison"><div><span>ANTES</span><ProductImage src="../public/examples/taca-antes.jpg" alt="Foto original de uma taça de vidro segurada com a mão" /></div><div className="versus">→</div><div><span>DEPOIS</span><ProductImage src="../public/examples/taca-depois.png" alt="Arte profissional criada para divulgar a taça de vidro" fit="contain" /></div></div>
            <p>Um produto real, apresentado com mais contexto, cuidado e valor.</p>
          </div>
          <div className="hero-actions">
            <ul className="check-list"><li>Valorize a apresentação dos seus produtos</li><li>Crie para Instagram, Stories e WhatsApp</li><li>Método passo a passo + prompts prontos</li></ul>
            <div className="hero-price"><strong>Método completo + 3 bônus por R$10,90</strong><span>Pagamento único • Acesso imediato • Garantia de 7 dias</span></div>
            <BuyButton>QUERO CRIAR ARTES MAIS PROFISSIONAIS</BuyButton>
          </div>
        </div>
        <div className="trust-strip"><span>🔒 Compra segura</span><span>⚡ Acesso imediato</span><span>🛡 7 dias de garantia</span></div>
      </section>

      <section className="awareness dark-section">
        <div className="container narrow center">
          <span className="eyebrow light">A PRIMEIRA IMPRESSÃO CONTA</span>
          <h2>O produto não mudou.<br /><em>A percepção mudou.</em></h2>
          <p>Na internet, muitas vezes o cliente conhece seu produto primeiro pela forma como ele é apresentado.</p>
          <p>Uma divulgação mais organizada e profissional pode transmitir uma percepção completamente diferente do mesmo produto.</p>
          <div className="highlight-quote">A forma como você apresenta seu produto influencia o valor que ele parece ter.</div>
        </div>
      </section>

      <section className="gallery section-light">
        <div className="container">
          <header className="section-head center"><span className="eyebrow">VEJA NA PRÁTICA</span><h2>Veja o que uma foto comum pode se tornar.</h2><p>O produto continua o mesmo. O que muda é a apresentação.</p></header>
          <div className="comparison-grid" ref={carouselRef} onScroll={updateSlide}>
            <Comparison before="../public/examples/hamburguer-antes.jpg" after="../public/examples/hamburguer-stories-depois.webp" channel="Stories" title="Hambúrguer" />
            <Comparison before="../public/examples/cadeira-antes.webp" after="../public/examples/cadeira-catalogo-depois.png" channel="Catálogo WhatsApp" title="Cadeira de madeira" />
            <Comparison before="../public/examples/hidratante-antes.jpg" after="../public/examples/hidratante-feed-depois.png" channel="Feed" title="Hidratante natural" />
          </div>
          <div className="carousel-controls" aria-label="Controles da galeria">
            <button onClick={() => goToSlide(slide - 1)} disabled={slide === 0} aria-label="Exemplo anterior">←</button>
            <div>{[0,1,2].map(index => <button key={index} className={slide === index ? "active" : ""} onClick={() => goToSlide(index)} aria-label={`Ir para exemplo ${index + 1}`} />)}</div>
            <button onClick={() => goToSlide(slide + 1)} disabled={slide === 2} aria-label="Próximo exemplo">→</button>
          </div>
          <p className="illustration-note">Exemplos reais de como a mesma foto pode ganhar uma apresentação adequada para cada canal.</p>
          <div className="section-cta"><BuyButton>QUERO FAZER ISSO COM MEUS PRODUTOS</BuyButton></div>
        </div>
      </section>

      <section className="method-section section-blue">
        <div className="container">
          <header className="section-head center"><span className="eyebrow">O MÉTODO</span><h2>O problema não é o ChatGPT. É não saber o que pedir.</h2><p>Um comando genérico deixa muitas decisões nas mãos da IA. O Método PRODUTO organiza as informações que você precisa fornecer.</p></header>
          <div className="prompt-compare">
            <article className="prompt-bad"><span>✕ COMANDO GENÉRICO</span><strong>“Crie uma arte bonita para esse produto.”</strong></article>
            <div className="prompt-arrow">→</div>
            <article className="prompt-good"><span>✓ MÉTODO PRODUTO</span><strong>Propósito + referência + produto + direção + formato + texto + restrições.</strong></article>
          </div>
          <h3 className="method-subtitle">Você não precisa adivinhar o que escrever.</h3>
          <div className="method-grid">{method.map(([letter, title, text]) => <article className="method-card" key={`${letter}-${title}`}><b>{letter}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="included">
        <div className="container">
          <header className="section-head center"><span className="eyebrow">SEU ACESSO INCLUI</span><h2>Tudo o que você precisa para começar.</h2></header>
          <div className="included-grid">
            <GuideMockup />
            <div className="included-copy"><h3>Método PRODUTO</h3><ul>{["Guia completo Artes que Vendem com ChatGPT","Método passo a passo","Exemplos práticos","Comandos de correção","Formatos para Feed, Stories e WhatsApp"].map(item => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <h3 className="bonus-title">+ 3 bônus incluídos</h3>
          <div className="bonus-grid">
            <article><b>70</b><div><h3>70 Prompts Prontos</h3><p>Modelos para produtos, promoções e redes sociais.</p></div></article>
            <article><b>✓</b><div><h3>Checklist da Arte Profissional</h3><p>Revise os pontos essenciais antes de publicar.</p></div></article>
            <article><b>▣</b><div><h3>Guia de Tamanhos</h3><p>Formatos para Feed, Stories, anúncios e WhatsApp.</p></div></article>
          </div>
        </div>
      </section>

      <section className="offer dark-section" id="oferta">
        <div className="container center">
          <span className="eyebrow orange">ACESSO COMPLETO</span>
          <h2>Comece a apresentar melhor os seus produtos.</h2>
          <div className="offer-card">
            <div className="offer-name"><span>OFERTA COMPLETA</span><h3>MÉTODO PRODUTO</h3></div>
            <ul className="offer-list"><li>Método completo</li><li>70 prompts</li><li>Checklist profissional</li><li>Guia de tamanhos</li><li>Acesso imediato</li><li>Atualizações futuras</li></ul>
            <div className="price-block"><span>PAGAMENTO ÚNICO</span><strong><small>R$</small> 37,90</strong><em>sem mensalidade</em></div>
            <BuyButton>QUERO ACESSAR O MÉTODO AGORA</BuyButton>
            <div className="offer-trust"><span>🔒 Compra segura</span><span>⚡ Acesso imediato</span><span>🛡 7 dias de garantia</span></div>
          </div>
        </div>
        <div className="container guarantee-card"><div className="shield"><strong>7</strong><span>DIAS</span></div><div><h3>Conheça o Método PRODUTO sem riscos.</h3><p>Acesse o conteúdo e veja se ele atende às suas necessidades. Caso não fique satisfeito, você poderá solicitar o reembolso dentro do prazo da garantia.</p></div></div>
      </section>

      <section className="faq-final dark-section">
        <div className="container narrow">
          <header className="section-head center"><span className="eyebrow light">DÚVIDAS RÁPIDAS</span><h2>Perguntas frequentes</h2></header>
          <div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "open" : ""} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b aria-hidden="true">+</b></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div>
          <div className="final-cta"><span className="eyebrow orange">DÊ O PRÓXIMO PASSO</span><h2>Seu produto já existe.<br />Agora apresente ele à altura.</h2><p>Aprenda uma estrutura simples para transformar fotos comuns em divulgações mais profissionais usando ChatGPT.</p><strong className="final-price">R$10,90</strong><BuyButton>QUERO ACESSAR O MÉTODO</BuyButton><span className="final-meta">Pagamento único • acesso imediato • garantia de 7 dias</span></div>
        </div>
      </section>

      <footer><div className="container"><strong>MÉTODO <em>PRODUTO</em></strong><nav aria-label="Links legais"><a href="#">Termos de Uso</a><a href="#">Política de Privacidade</a><a href="#">Política de Reembolso</a><a href="mailto:contato@artesquevendem.com.br">Contato</a></nav><p>© 2026 Artes que Vendem com ChatGPT.</p><small>Este produto não garante resultados financeiros. Os resultados dependem da aplicação do conteúdo, da qualidade das imagens e das características de cada negócio.</small></div></footer>

      <div className={`mobile-sticky ${sticky ? "visible" : ""}`} aria-hidden={!sticky}><div><span>Método PRODUTO</span><strong>R$10,90</strong></div><BuyButton compact>ACESSAR</BuyButton></div>
    </main>
  );
}
