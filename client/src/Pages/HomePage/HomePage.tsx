import React, { useState } from "react";
import cn from "classnames";

import styles from "./HomePage.module.css";

import ChatsList from "./components/ChatsList/ChatsList";
import ChatDetailsContainer from "./containers/ChatDetailsContainer/ChatDetailsContainer";
import { IChat } from "../../data";
import NoConversation from "./components/NoConversation/NoConversation";

function HomePage() {
  const [conversation, setConversation] = useState<IChat | null>(null);
  const onSelectChat = (user: IChat) => {
    setConversation(user);
  };

  return (
    <main className={cn(styles.homePage)}>
      <ChatsList onSelectChat={onSelectChat} />
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
