import Header from "./components/Header";
import MobileStickyBar from "./components/MobileStickyBar";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import PainSection from "./sections/PainSection";
import BeforeAfter from "./sections/BeforeAfter";
import ProductPresentation from "./sections/ProductPresentation";
import MethodSection from "./sections/MethodSection";
import LearningSection from "./sections/LearningSection";
import IncludedSection from "./sections/IncludedSection";
import AudienceSection from "./sections/AudienceSection";
import ObjectionsSection from "./sections/ObjectionsSection";
import OfferSection from "./sections/OfferSection";
import FAQSection from "./sections/FAQSection";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainSection />
        <BeforeAfter />
        <ProductPresentation />
        <MethodSection />
        <LearningSection />
        <IncludedSection />
        <AudienceSection />
        <ObjectionsSection />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
      <BackToTop />
    </>
  );
}
