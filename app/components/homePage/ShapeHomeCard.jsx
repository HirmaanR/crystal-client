import backgroundImage from "@/public/ShapeCard/BackgroundImage.png";
import backgroundImage2 from "@/public/ShapeCard/BackgroundImage2.png";
import Image from "next/image";

function ShapeHomeSection() {
  return (
    <div className="w-full px-30 mb-20">
      <div className="card relative bg-primary text-center capitalize text-primary-content w-full items-center rounded-4xl overflow-hidden">
        {/* Background images with absolute positioning */}
        <Image
          src={backgroundImage}
          alt="shapeImage"
          className="absolute bottom-0 left-0 z-0"
          priority
        />
        <Image
          src={backgroundImage2}
          alt="shapeImage"
          className="absolute bottom-0 right-0 z-0"
          priority
        />

        {/* Foreground content with higher z-index */}
        <div className="card-body relative z-10 p-40 gap-10 max-w-5xl">
          <h2 className="card-title font-extrabold text-base-100 text-5xl">
            Get Started with ChatBuddy AI Today!
          </h2>
          <p className="font-medium text-lg">
            Unlock seamless automation, instant support, and smarter
            conversations—all in one AI-powered assistant.
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-lg rounded-full text-primary bg-base-100 capitalize">
              try 7-days free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShapeHomeSection;
