import Accordion from "../components/Accordion";
import { PRODUCT_CONFIG } from "../config";

const FAQ_ITEMS = [
  {
    question: "Preciso saber design?",
    answer:
      "Não. O ebook foi criado para iniciantes e explica o processo de forma visual e prática.",
  },
  {
    question: "Preciso pagar um programa de edição?",
    answer:
      "O método utiliza principalmente o ChatGPT e o Canva. Algumas funcionalidades podem variar conforme o plano utilizado em cada ferramenta.",
  },
  {
    question: "O resultado fica perfeito na primeira tentativa?",
    answer:
      "Nem sempre. O ebook ensina como identificar problemas, corrigir elementos e decidir quando gerar novamente.",
  },
  {
    question: "Serve para qualquer tipo de produto?",
    answer:
      "O método pode ser adaptado a diferentes produtos físicos, estilos de marca e formatos de divulgação.",
  },
  {
    question: "Como vou receber o ebook?",
    answer:
      "O acesso digital é disponibilizado após a confirmação do pagamento pela Kiwify.",
  },
  {
    question: "Posso utilizar as artes comercialmente?",
    answer:
      "Você pode utilizar suas próprias fotos, logos e materiais autorizados. Não copie marcas ou identidades visuais de terceiros.",
  },
  {
    question: "Qual é o prazo de garantia?",
    answer: `Você terá ${PRODUCT_CONFIG.guaranteeDays} para conhecer o material, conforme as condições apresentadas no checkout.`,
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: `Entre em contato por ${PRODUCT_CONFIG.supportContact}.`,
  },
];

export default function FAQSection() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title">Perguntas frequentes</h2>
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
