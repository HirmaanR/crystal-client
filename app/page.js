import HeroSection from "./components/hero/HeroSection";
import SecondHomeSection from "./components/homePage/SecondHomeSection";
import ThirdHomeSection from "./components/homePage/ThirdHomeSection";



export default function Home() {
  return (
    <div className="grid text-center h-screen items-center justify-center font-bold uppercase">
      <div className="grid gap-10">
        <HeroSection />
        <SecondHomeSection />
        <ThirdHomeSection />
      </div>
    </div>
  );
}
