function FaqsHomeSection({ }) {

  const faqs = [
    { title: "What is ChatBuddy AI, and how does it work?", content: "ChatBuddy AI is an all-in-one AI-powered assistant designed to automate conversations, provide instant responses, and enhance productivity. It integrates with various platforms like websites, social media, and messaging apps to streamline customer support and task management." },
    { title: "Can I try ChatBuddy AI for free?", content: "" },
    { title: "What platforms does ChatBuddy AI support?", content: "" },
    { title: "Can I customize the AI assistant to match my brand?", content: "" },
    { title: "How secure is my data with ChatBuddy AI?", content: "" },
  ]

  return (
    <div className="grid grid-cols-1 bg-orange-500 md:grid-cols-2 text-left gap-5 px-20 mb-32">
      <div className="bg-blue-500">
        <h1 className="font-bold text-2xl">title</h1>
        <p className="font-light text-lg">description</p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {faqs.map((item, index) => {
          return (
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
              <div className="collapse-title font-semibold">{item.title}</div>
              <div className="collapse-content text-sm">{item.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default FaqsHomeSection
