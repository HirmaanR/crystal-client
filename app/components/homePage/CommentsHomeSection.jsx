import DynamicSection from "../share/Sections/DynamicSection"
// import Image from "next/image"

import { IconicRating } from "../share/ratings/IconicRating"
import ChromeWebStore from '@/public/icons/googleChromeWebStore.png'
import ProductHunt from "@/public/icons/ProductHuntIcon.png"
import { Stars } from "../share/ratings/IconicRating"
import { Fragment } from 'react'


function CommentCard({ name, message, avatarImage = "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp", rateNumber }) {
  return (
    <div className="card w-full h-full bg-base-200 card-md text-left rounded-lg">
      <div className="card-body">
        <div className="flex flex-row gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={avatarImage} />
            </div>
          </div>
          <h2 className="card-title capitalize">{name}</h2>
        </div>
        <div>
          <Stars starNumber={rateNumber} />
        </div>
        <p className="font-light capitalize">{message}</p>
      </div>
    </div>
  )
}

function CommentsHomeSection() {


  const comments = [
    { avatarImage: "", name: "Hianto Mateus", rate: 5, message: "The improvement in my productivity, I won't even comment on. The 5 stars are enough <3. Thank you for existing!" },
    { avatarImage: "", name: "Sarah L.", rate: 5, message: "Incredible AI assistant! It has completely transformed the way we handle customer support—faster responses and happier clients!" },
    { avatarImage: "", name: "James M.", rate: 5, message: "The improvement in my productivity, I won't even comment on. The 5 stars are enough <3. Thank you for existing!" },
    { avatarImage: "", name: "Daniel R.", rate: 5, message: "The best AI chatbot I've used! It feels natural, adapts quickly, and integrates seamlessly with my platforms." },
    { avatarImage: "", name: "Emily T.", rate: 5, message: "A game-changer for my team! We’ve improved efficiency and customer engagement like never before." },
    { avatarImage: "", name: "Amanda P.", rate: 5, message: "I was skeptical at first, but now I can’t imagine working without it. 24/7 AI support has been a lifesaver!" },
  ]

  return (
    <DynamicSection title={<p className="capitalize">See What Our <span className="text-primary">Users Are Saying!</span></p>} >
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full my-5">
          <IconicRating ImageSrc={ChromeWebStore} title="4.9/5.0" description={"on Chrome Store"} starNumber={5} />
          <IconicRating ImageSrc={ProductHunt} title="4.6/5.0" description={"on Product Hunt"} starNumber={4} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 max-w-lg md:max-w-6xl mt-10">
          {comments.map((item, index) => {
            return (
              <Fragment key={index}>
                <CommentCard name={item.name} rateNumber={item.rate} message={item.message} />
              </Fragment>
            )
          })}
        </div>
      </div>

    </DynamicSection>
  )
}
export default CommentsHomeSection
