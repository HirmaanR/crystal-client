import DynamicSection from "../share/Sections/DynamicSection"


function PriceCard({ recommended = false, badage = "Most Popular", title = "Premium", amount = "29/mo", options = ["High-resolution image generation", "High-resolution image generation", "High-resolution image generation", "High-resolution image generation", "High-resolution image generation"] }) {
  return (
    <div className={`card card-xl w-full rounded-xl h-full capitalize ${recommended ? "bg-neutral text-base-200" : "bg-base-200"} shadow-sm`}>
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{recommended ? "Recommended" : badage}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span className="text-xl">${amount}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {options.map((item) => {
            return <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{item}</span>
            </li>
          })}
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
