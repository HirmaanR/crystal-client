import HeroSection from "./components/hero/HeroSection";
import SecondHomeSection from "./components/homePage/SecondHomeSection";
import ThirdHomeSection from "./components/homePage/ThirdHomeSection";
import FourHomeSection from "./components/homePage/FourHomeSection";
import CommentsHomeSection from "./components/homePage/CommentsHomeSection";
import PricingHomeSection from "./components/homePage/PricingHomeSection";
import FaqsHomeSection from "./components/homePage/FaqsHomeSection";
import ShapeHomeSection from "./components/homePage/ShapeHomeCard";
import Footer from "./components/share/navigation/HomeFooter";
import MainLayout from "./components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid text-center h-screen items-center justify-center font-bold uppercase">
        <div className="grid gap-10">
          <HeroSection />
          <SecondHomeSection />
          <ThirdHomeSection />
          <FourHomeSection />
          <CommentsHomeSection />
          <PricingHomeSection />
          <FaqsHomeSection />
          <ShapeHomeSection />
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
}
