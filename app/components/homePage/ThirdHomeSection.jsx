import DynamicSection from "../share/Sections/DynamicSection";
import Image from "next/image";

import StepOneImage from "@/public/StepsSection/step1.png"
import StepTwoImage from "@/public/StepsSection/Step2.png"
import StepThreeImage from "@/public/heroSection/heroImage.png"
import { Button } from "../share/Button";

function ThirdHomeSection({ }) {
  return (
    <DynamicSection title={<p>Launch Your <span className="text-primary">AI Assistant</span> in Just 3 Simple Steps</p>}>
      <div className="grid grid-cols-1 gap-5 py-5 max-w-lg md:max-w-5xl md:grid-cols-2 text-center">
        <div className="card rounded-3xl bg-base-200 shadow-sm w-full h-full p-5 text-left">
          <div className="card-body gap-5">
            <div className="badge badge-primary rounded-full">Step 1</div>
            <h2 className="card-title capitalize">Sign up & set up</h2>
            <p className="font-light capitalize">
              Create your account and personalize your AI assistant in just a few clicks.</p>
          </div>
          <figure className="h-90 w-full">
            <Image src={StepOneImage} alt="cart step Image" className="shadow-lg shadow-primary rounded-3xl" width={300} />
          </figure>
        </div>
        <div className="card rounded-3xl bg-base-200 shadow-sm w-full h-full p-5 text-left">
          <div className="card-body gap-5">
            <div className="badge badge-primary rounded-full">Step 2</div>
            <h2 className="card-title capitalize">Train & Customize</h2>
            <p className="font-light capitalize">
              Train your AI with FAQs, workflows, and custom responses, tweaking its tone and style to match your brand or preferences effortlessly.
            </p>
          </div>
          <figure className="w-full h-90">
            <Image src={StepTwoImage} alt="cart step Image" className="shadow-lg shadow-primary rounded-3xl" width={300} />
          </figure>
        </div>
        <div className="card rounded-3xl bg-base-200 shadow-sm w-full h-full p-5 text-left md:col-span-2">
          <div className="card-body gap-5">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="grid gap-5">
                <div className="badge badge-primary rounded-full">Step 3</div>
                <h2 className="card-title capitalize">Deploy & Automate</h2>
                <p className="font-light capitalize">
                  Add ChatBuddy AI to your site, social media, or apps—it instantly answers queries, schedules tasks, boosts productivity, and works 24/7!
                </p>
                <Button className="w-[200px]">Try 7-days free trial</Button>
              </div>
              <figure className="h-90 w-full">
                <Image src={StepThreeImage} alt="cart step Image" className="shadow-lg shadow-primary" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </DynamicSection>
  )
}

export default ThirdHomeSection
