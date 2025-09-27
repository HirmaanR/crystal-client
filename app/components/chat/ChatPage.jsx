import ChatLayout from "../layouts/ChatLayout";
import ChatHeroSection from "./ChatHeroSection";
import ChatScroll from "./ChatScroll";

function ChatPage() {
  return (
    <ChatLayout>
      <ChatHeroSection />
      <ChatScroll />
    </ChatLayout>
  );
}
export default ChatPage;
