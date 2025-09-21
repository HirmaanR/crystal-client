function FaqsHomeSection({ }) {

  const faqs = [
    { title: "What is ChatBuddy AI, and how does it work?", content: "ChatBuddy AI is an all-in-one AI-powered assistant designed to automate conversations, provide instant responses, and enhance productivity. It integrates with various platforms like websites, social media, and messaging apps to streamline customer support and task management." },
    { title: "Can I try ChatBuddy AI for free?", content: "" },
    { title: "What platforms does ChatBuddy AI support?", content: "" },
    { title: "Can I customize the AI assistant to match my brand?", content: "" },
    { title: "How secure is my data with ChatBuddy AI?", content: "" },
  ]

  return (
    <div>
      {faqs.map((item, index) => {
        return (
          <div key={index} class="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" checked={index === 0 ? "checked" : ""} />
            <div class="collapse-title font-semibold">{item.title}</div>
            <div class="collapse-content text-sm">{item.content}</div>
          </div>
        )
      })}
    </div>
  )
}
export default FaqsHomeSection
