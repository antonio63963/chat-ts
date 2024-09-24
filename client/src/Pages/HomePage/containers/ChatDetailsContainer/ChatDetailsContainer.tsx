import React, { useCallback, useState } from "react";

import "./ChatDetailsContainer.css";

import ChatDetailsHeader from "../../components/ChatDetailsHeader/ChatDetailsHeader";

import MessagesSection from "../../components/MessagesSection/MessagesSection";

import { chatHistory } from "../../../../data";
import MessageTextField from "../../components/MessageTextField/MessageTextField";

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
  const [sendInputValue, setSendInputValue] = useState<string>("");

  const onSend = useCallback(() => {}, []);

  return (
    <div className="chatDetailsContainer">
      <ChatDetailsHeader avatar={avatar} isOnline={isOnline} name={userName} />
      <MessagesSection messages={chatHistory} />
      <MessageTextField
        onChange={setSendInputValue}
        value={sendInputValue}
        onSend={onSend}
      />
    </div>
  );
};

export default ChatDetailsContainer;
