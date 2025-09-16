import HeroSection from "./components/hero/HeroSection";
import DynamicSection from "./components/share/Sections/DynamicSection";
import DynamicTabs from "./components/share/tabs/DynamicTabs";

export default function Home() {
  const tabs = [
    { title: "AI Chat", iconName: "ri:chat-voice-ai-fill", content: "content" },
    { title: "AI Writer", iconName: "ri:edit-2-line", content: "content" },
    { title: "AI Summery", iconName: "ri:file-text-line", content: "content" },
    { title: "AI Search", iconName: "ri:search-eye-line", content: "content" },
    { title: "AI Translator", iconName: "ri:translate-ai", content: "content" },
    { title: "AI art color", iconName: "ri:image-ai-line", content: "content" },
  ]
  return (
    <div className="flex text-center h-screen items-center justify-center font-bold uppercase">
      <div className="grid gap-5">
        <HeroSection />
        <DynamicSection title="Your All-in-One AI-Powered Assistant for Instant Support, Productivity & Automation!">
          <div className="py-32 max-w-lg md:max-w-4xl">
            <DynamicTabs tabsArr={tabs} />
          </div>
        </DynamicSection>
      </div>
    </div>
  );
}
