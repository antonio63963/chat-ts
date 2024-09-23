import React from "react";
import "./ChatDetailsContainer.css";

import ChatDetailsHeader from "../../components/ChatDetailsHeader/ChatDetailsHeader";

import { chatList, IChat } from "../../../../data";
import MessagesSection from "../../components/MessagesSection/MessagesSection";

import { chatHistory } from "../../../../data";

interface IConversation {
  id: string | number;
  userName?: string;
  isOnline: boolean;
  avatar?: string | null;
}

const ChatDetailsContainer = ({
  id,
  userName,
  isOnline,
  avatar,
}: IConversation) => {
  return (
    <div className="chatDetailsContainer">
      <ChatDetailsHeader avatar={avatar} isOnline={isOnline} name={userName} />
      <MessagesSection messages={chatHistory} />
    </div>
  );
};

export default ChatDetailsContainer;
