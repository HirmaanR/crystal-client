import { Icon } from "@iconify/react";
import ChatInputField from "./ChatInputField";
import Image from "next/image";
import bgShadow from "@/public/bgShadow.png"

const ChatBubble = ({
  botImage = "https://img.daisyui.com/images/profile/demo/kenobee@192.webp",
  botResTime = "12:45",
  botResMessage = "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel  Do Androids Dream of Electric Sheep? by Philip K. Dick.",
  userImage = "https://img.daisyui.com/images/profile/demo/anakeen@192.webp",
  userName = "Hirmaan",
  userMessageTime = "12:46",
  userMessage = "do androids truly dream of electric sheeps or not?",
}) => {
  return (
    <>
      <div className="chat chat-start gap-2">
        <div className="h-screen w-screen z-0 fixed">
        <Image src={bgShadow} alt="bgshadow"/>
        </div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Icon
              icon="tabler:ai"
              width="34"
              height="34"
              className="text-base-100 bg-primary rounded-full"
            />
          </div>
        </div>
        <div className="chat-header">
          Crystal AI
          <time className="text-xs opacity-50">{botResTime}</time>
        </div>
        <div className="chat-bubble max-w-lg rounded-2xl bg-base-200">
          {botResMessage}
        </div>
      </div>
      <div className="chat chat-end gap-2">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="User Avatar Image" src={userImage} />
          </div>
        </div>
        <div className="chat-header">
          {userName}
          <time className="text-xs opacity-50">{userMessageTime}</time>
        </div>
        <div className="chat-bubble max-w-lg rounded-2xl bg-base-200">
          {userMessage}
        </div>
      </div>
    </>
  );
};

const ChatScroll = () => {
  const makeMessage = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = [i];
    }
    return arr;
  };

  const messages = makeMessage();

  return (
    <div className="h-screen py-10 bg-base-100">
      <ChatInputField />
      {messages.map((index) => (
        <ChatBubble key={index} />
      ))}
    </div>
  );
};

export default ChatScroll;
