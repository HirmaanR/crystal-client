
import Image from "next/image";
import DynamicSection from "../share/Sections/DynamicSection";
import DynamicTabs from "../share/tabs/DynamicTabs";

import heroImage from "@/public/heroSection/heroImage.png"
import AIArtGenerator from '@/public/secoundSection/AIArtGenerator.png'
import AISearchImage from '@/public/secoundSection/AISearch.png'
import AISummaryImage from '@/public/secoundSection/AISummary.png'
import AITranslaterImage from '@/public/secoundSection/AITranslater.png'
import AIWriterImage from '@/public/secoundSection/AIWriter.png'


function SecoundHomeSection({ }) {

  const tabs = [
    { title: "AI Chat", iconName: "ri:chat-voice-ai-fill", content: <Image src={heroImage} alt="AI Chat" /> },
    { title: "AI Writer", iconName: "ri:edit-2-line", content: <Image src={AIWriterImage} alt="AI Chat" width={250} /> },
    { title: "AI Summery", iconName: "ri:file-text-line", content: <Image src={AISummaryImage} alt="AI Chat" /> },
    { title: "AI Search", iconName: "ri:search-eye-line", content: <Image src={AISearchImage} alt="AI Chat" /> },
    { title: "AI Translator", iconName: "ri:translate-ai", content: <Image src={AITranslaterImage} alt="AI Chat" width={250} /> },
    { title: "AI art color", iconName: "ri:image-ai-line", content: <Image src={AIArtGenerator} alt="AI Chat" /> },
  ]


  return (

    <DynamicSection title={<p>Your All-in-One <span className="text-primary">AI-Powered Assistant</span> for Instant Support, Productivity & Automation!</p>}>
      <div className="py-5 max-w-lg md:max-w-4xl">
        <DynamicTabs tabsArr={tabs} />
      </div>
    </DynamicSection>
  )
}

export default SecoundHomeSection 
