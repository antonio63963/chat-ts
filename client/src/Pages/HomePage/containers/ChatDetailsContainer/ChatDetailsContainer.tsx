import React, { useCallback, useEffect, useState } from "react";

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
  const [messageInput, setMessageInput] = useState<string>("");
  const [isShownEmoji, setIsShownEmoji] = useState<boolean>(false);

  const onSendMessage = useCallback(() => {}, []);

  const onSelectedEmoji = useCallback(({ native }: any) => {
    setMessageInput((currentState) => currentState + native);
  }, []);

  const onEmojiClose = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsShownEmoji(false);
      }
    },
    [setIsShownEmoji]
  );
  useEffect(() => {
    window.addEventListener("keydown", onEmojiClose);
    return () => {
      window.removeEventListener("keydown", onEmojiClose);
    };
  }, [onEmojiClose]);

  return (
    <div className="chatDetailsContainer">
      <ChatDetailsHeader avatar={avatar} isOnline={isOnline} name={userName} />
      <MessagesSection messages={chatHistory} />
      <MessageTextField
        onChange={setMessageInput}
        value={messageInput}
        onSend={onSendMessage}
        isShownEmoji={isShownEmoji}
        onSelectedEmoji={onSelectedEmoji}
        showHideEmoji={() => setIsShownEmoji(!isShownEmoji)}
      />
    </div>
  );
};

export default ChatDetailsContainer;
