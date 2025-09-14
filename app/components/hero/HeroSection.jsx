import { Button } from "../share/Button"
import Image from "next/image"
import heroImage from "@/public/heroSection/heroImage.png"

function HeroSection() {
  return (

    <div className="hero min-w-screen bg-gradient-to-t p-2 from-primary to-base-100  min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold capitalize">Transform Your Conversations with Smart AI Chatbots!</h1>
          <p className="py-6 capitalize font-light">
            Discover the power of ChatBuddy AI - your ultimate personal AI companion designed to enhance communication and supercharge your productivity.
          </p>
          <Button>try 7-days free trial</Button>

          <Image src={heroImage} alt="HeroSectionImage" width={1100} height={700} />
        </div>

      </div>
    </div>
  )
}
export default HeroSection
