import { Icon } from "@iconify/react";

function ChatHeroSection({}) {
  return (
    <div className="flex flex-col gap-y-9 justify-center items-center text-center h-96">
      <div>
        <Icon icon="tabler:ai" width="94" height="94" className="text-primary" />
      </div>
      <div>
        <h1 className="font-bold text-3xl">Ask our AI anything</h1>
      </div>
    </div>
  );
}
export default ChatHeroSection;
