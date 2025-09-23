function FaqsHomeSection({ }) {

  const faqs = [
    { title: "What is ChatBuddy AI, and how does it work?", content: "ChatBuddy AI is an all-in-one AI-powered assistant designed to automate conversations, provide instant responses, and enhance productivity. It integrates with various platforms like websites, social media, and messaging apps to streamline customer support and task management." },
    { title: "Can I try ChatBuddy AI for free?", content: "" },
    { title: "What platforms does ChatBuddy AI support?", content: "" },
    { title: "Can I customize the AI assistant to match my brand?", content: "" },
    { title: "How secure is my data with ChatBuddy AI?", content: "" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-left gap-5 px-20 mb-32 capitalize">
      <div className="capitalize gap-5 flex flex-col">
        <h1 className="font-bold text-4xl">Frequently <span className="text-primary">asked questions</span></h1>
        <p className="font-light text-lg">For any unanswered questions, reach out to our support team via contact us page or email. We'll respond with-in a day to assist you.</p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {faqs.map((item, index) => {
          return (
            <div key={index} className="collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
              <div className="collapse-title font-semibold text-lg">{item.title}</div>
              <div className="collapse-content text-sm font-medium">{item.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default FaqsHomeSection
