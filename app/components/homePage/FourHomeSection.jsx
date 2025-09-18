import DynamicSection from "../share/Sections/DynamicSection"
import { Icon } from '@iconify/react'


function IconicCard({ title, desc, iconName }) {
  return (
    <div className="card bg-base-100 w-full">
      <figure className="">
        <Icon icon={iconName} className="text-2xl text-primary bg-base-300 rounded-xl w-fit h-fit p-3" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize">{title}</h2>
        <p className="font-light capitalize">{desc}</p>
      </div>
    </div>
  )
}


function FourHomeSection({ }) {

  const cards = [
    { title: "business owners", desc: "Automate customer interactions & boost efficiency.", iconName: "ri:briefcase-4-line" },
    { title: "customer support teams", desc: "Provide instant, AI-driven responses.", iconName: "ri:customer-service-2-line" },
    { title: "E-commerce brands", desc: "Drive sales with AI-powered shopping assistance.", iconName: "ri:shopping-cart-line" },
    { title: "healthcare Providers", desc: "AI for appointment scheduling & patient inquiries.", iconName: "ri:hospital-line" },
    { title: "educatord & coaches", desc: "AI tutors & virtual assistants for students.", iconName: "ri:health-book-line" },
    { title: "intelligent code advisor", desc: "Provides code optimization suggestions based on project context.", iconName: "ri:code-ai-line" },
  ]


  return (
    <DynamicSection title={<p className="capitalize">who can <span className="text-primary">benefit?</span></p>} >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-lg md:max-w-5xl mt-10">
        {cards.map((item, index) => {
          return <IconicCard key={index} title={item.title} desc={item.desc} iconName={item.iconName} />
        })}
      </div>
    </DynamicSection>
  )
}
export default FourHomeSection
