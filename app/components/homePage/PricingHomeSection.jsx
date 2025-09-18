import DynamicSection from "../share/Sections/DynamicSection"


function PriceCard({ recommended = false }) {
  return (
    <div className={`card card-xl w-full rounded-xl h-full capitalize ${recommended ? "bg-neutral text-base-200" : "bg-base-200"} shadow-sm`}>
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{recommended ? "Recommended" : "Most Popular"}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Premium</h2>
          <span className="text-xl">$29/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>High-resolution image generation</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Customizable style templates</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Batch processing capabilities</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>AI-driven image enhancements</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>AI-driven image enhancements</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>AI-driven image enhancements</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>AI-driven image enhancements</span>
          </li>
          <li className="opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="line-through">Seamless cloud integration</span>
          </li>
          <li className="opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="line-through">Real-time collaboration tools</span>
          </li>
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block rounded-3xl">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

function PricingHomeSection() {
  return (
    <DynamicSection title={<p className="capitalize">Flexible <span className="text-primary">Pricing</span> for Every Need!</p>}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 max-w-lg md:max-w-6xl mt-10">
        <PriceCard />
        <PriceCard recommended={true} />
        <PriceCard />
      </div>
    </DynamicSection>
  )
}

export default PricingHomeSection
