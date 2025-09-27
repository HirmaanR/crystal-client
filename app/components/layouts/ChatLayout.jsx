import Image from "next/image";
import bgShadow from "@/public/bgShadow.png";

const ChatLayout = ({ children }) => {
  return (
    <div className="h-full w-full bg-transparent from-primary to-base-100">
      <div className="px-96">{children}</div>
    </div>
  );
};
export default ChatLayout;
