import React, { useState } from "react";
import cn from "classnames";

import "./HomePage.css";
import "./HomePageMedia.css";

import ChatsListContainer from "./containers/ChatsListContainer/ChatsListContainer";
import ChatDetailsContainer from "./containers/ChatDetailsContainer/ChatDetailsContainer";
import { IChat } from "../../data";
import NoConversation from "./components/NoConversation/NoConversation";

function HomePage() {
  const [conversation, setConversation] = useState<IChat | null>(null);
  const onSelectChat = (user: IChat) => {
    setConversation(user);
  };

  return (
    <main className={cn('homePage')}>
      <ChatsListContainer onSelectChat={onSelectChat} />
      {!conversation ? (
        <NoConversation />
      ) : (
        <ChatDetailsContainer
          isOnline={conversation?.online}
          userName={conversation?.name}
          avatar={conversation?.img}
          id={conversation!.id}
        />
      )}
    </main>
  );
}

export default HomePage;
