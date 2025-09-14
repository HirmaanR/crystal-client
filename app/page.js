import HeroSection from "./components/hero/HeroSection";
export default function Home() {
  return (
    <div className="flex text-center h-screen items-center justify-center font-bold uppercase">
      <div className="grid gap-5">
        <HeroSection />
      </div>
    </div>
  );
}
