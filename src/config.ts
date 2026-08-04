export const PRODUCT_CONFIG = {
  productName: "Artes que Vendem com ChatGPT",
  subtitle:
    "Como transformar fotos comuns de produtos em artes comerciais para Instagram, Stories e WhatsApp — mesmo sem saber design.",
  price: "R$37,90",
  checkoutUrl: "https://pay.kiwify.com.br/zZ69g7X",
  guaranteeDays: "7 dias",
  supportContact: "igorisaque466@gmail.com",
  author: "Igor Isaque da Silva Porfírio",
  siteUrl: "https://ebook-artes-com-chat-gpt.vercel.app/",
};

export function trackCheckoutClick(location: string): void {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "checkout_click",
      location,
    });
  } catch {
    // GTM indisponível — segue sem erro
  }
}

export function goToCheckout(location: string): void {
  trackCheckoutClick(location);
  window.location.href = PRODUCT_CONFIG.checkoutUrl;
}
