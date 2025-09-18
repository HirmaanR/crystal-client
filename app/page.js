import HeroSection from "./components/hero/HeroSection";
import SecondHomeSection from "./components/homePage/SecondHomeSection";
import ThirdHomeSection from "./components/homePage/ThirdHomeSection";
import FourHomeSection from "./components/homePage/FourHomeSection";
import CommentsHomeSection from "./components/homePage/CommentsHomeSection";



export default function Home() {
  return (
    <div className="grid text-center h-screen items-center justify-center font-bold uppercase">
      <div className="grid gap-10">
        <HeroSection />
        <SecondHomeSection />
        <ThirdHomeSection />
        <FourHomeSection />
        <CommentsHomeSection />
      </div>
    </div>
  );
}
