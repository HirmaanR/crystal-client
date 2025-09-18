import { Button } from "../share/Button"
import Image from "next/image"
import heroImage from "@/public/heroSection/heroImage.png"
import { IconicRating } from "../share/ratings/IconicRating"
import ChromeWebStore from '@/public/icons/googleChromeWebStore.png'
import ProductHunt from "@/public/icons/ProductHuntIcon.png"


function HeroSection() {
  return (

    <div className="hero min-w-screen bg-gradient-to-t p-2 from-primary via-base-100 to-base-100  min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg md:max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold capitalize">Transform Your Conversations with Smart <span className="text-primary">AI Chatbots!</span></h1>
          <p className="py-6 capitalize font-light text-lg md:text-xl">
            Discover the power of ChatBuddy AI - your ultimate personal AI companion designed to enhance communication and supercharge your productivity.
          </p>
          <Button>try 7-days free trial</Button>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full my-5">
            <IconicRating ImageSrc={ChromeWebStore} title="4.9/5.0" description={"on Chrome Store"} starNumber={5} />
            <IconicRating ImageSrc={ProductHunt} title="4.6/5.0" description={"on Product Hunt"} starNumber={4} />
          </div>
          <Image src={heroImage} alt="HeroSectionImage" width={1100} height={700} />
        </div>

      </div>
    </div>
  )
}
export default HeroSection
