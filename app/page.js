import HeroSection from "./components/hero/HeroSection";
import SecoundHomeSection from "./components/homePage/SecoundHomeSection";



export default function Home() {
  return (
    <div className="grid text-center h-screen items-center justify-center font-bold uppercase">
      <div className="grid gap-10">
        <HeroSection />
        <SecoundHomeSection />
      </div>
    </div>
  );
}
