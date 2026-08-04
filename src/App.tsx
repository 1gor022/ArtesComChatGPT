import Header from "./components/Header";
import PromoBar from "./components/PromoBar";
import MobileStickyBar from "./components/MobileStickyBar";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import BeforeAfter from "./sections/BeforeAfter";
import PainSection from "./sections/PainSection";
import ProductPresentation from "./sections/ProductPresentation";
import MethodSection from "./sections/MethodSection";
import InsideBook from "./sections/InsideBook";
import ProcessContrast from "./sections/ProcessContrast";
import LearningSection from "./sections/LearningSection";
import IncludedSection from "./sections/IncludedSection";
import AudienceSection from "./sections/AudienceSection";
import ObjectionsSection from "./sections/ObjectionsSection";
import OfferSection from "./sections/OfferSection";
import GuaranteeSection from "./sections/GuaranteeSection";
import FAQSection from "./sections/FAQSection";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <PainSection />
        <ProductPresentation />
        <MethodSection />
        <InsideBook />
        <ProcessContrast />
        <LearningSection />
        <IncludedSection />
        <AudienceSection />
        <ObjectionsSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
      <BackToTop />
    </>
  );
}
