import React from "react";
import cn from "classnames";

import styles from "./ChatsList.module.css";
import ChatItem from "../ChatItem/ChatItem";


import { chatList, IChat } from "../../../../data/index";

function ChatsList() {
  return (
    <div className={cn(styles.chatsList, "lightBg")}>
     
        <div className={cn(styles.chatlistContent, 'borderRight')}>
          {chatList.map((ch: IChat) => {
            return (
              <ChatItem
                key={ch.id}
                avatar={ch.img}
                title={ch.name}
                isOnline={ch.online}
                subtitle={ch.msg}
                time={ch.time}
                unreadMsg={ch.unread}
              />
            );
          })}
        </div>
   
    </div>
  );
}

export default ChatsList;
