export const PRODUCT_CONFIG = {
  productName: "Artes que Vendem com ChatGPT",
  subtitle:
    "Aprenda o Método PRODUTO para criar posts, Stories e imagens para o WhatsApp com o ChatGPT, preservar seu produto e corrigir os erros da inteligência artificial.",
  regularPrice: 67.9,
  promotionalPrice: 37.9,
  checkoutUrl: "https://pay.kiwify.com.br/zZ69g7X",
  guaranteeDays: 7,
  supportContact: "igorisaque466@gmail.com",
  author: "Igor Isaque da Silva Porfírio",
  siteUrl: "https://ebook-artes-com-chat-gpt.vercel.app/",
  promotionEndsAt: "2026-08-10T23:59:59-03:00",
  promotionTimezone: "America/Sao_Paulo",
  termsUrl: "",
  privacyUrl: "",
  refundUrl: "",
};

export function isPromotionActive(): boolean {
  return Date.now() < new Date(PRODUCT_CONFIG.promotionEndsAt).getTime();
}

export function getSavings(): number {
  return Number(
    (PRODUCT_CONFIG.regularPrice - PRODUCT_CONFIG.promotionalPrice).toFixed(2)
  );
}

export function getCurrentPrice(): number {
  return isPromotionActive()
    ? PRODUCT_CONFIG.promotionalPrice
    : PRODUCT_CONFIG.regularPrice;
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatEndDate(): string {
  return new Date(PRODUCT_CONFIG.promotionEndsAt).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: PRODUCT_CONFIG.promotionTimezone,
    }
  );
}

export function getCountdownParts(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  active: boolean;
} {
  const end = new Date(PRODUCT_CONFIG.promotionEndsAt).getTime();
  const diff = end - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, active: false };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    active: true,
  };
}

export const TESTIMONIALS: {
  name: string;
  business: string;
  text: string;
  image?: string;
  result?: string;
}[] = [];

export function trackCheckoutClick(location: string): void {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "checkout_click",
      location,
      promotional_price: PRODUCT_CONFIG.promotionalPrice,
      regular_price: PRODUCT_CONFIG.regularPrice,
      promotion_active: isPromotionActive(),
    });
  } catch {
    // GTM indisponível — segue sem erro
  }
}

export function goToCheckout(location: string): void {
  trackCheckoutClick(location);
  window.location.href = PRODUCT_CONFIG.checkoutUrl;
}
