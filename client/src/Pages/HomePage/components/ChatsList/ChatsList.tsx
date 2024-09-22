import React from "react";
import cn from "classnames";

import styles from "./ChatsList.module.css";
import ChatItem from "../../../../common/components/ChatItem/ChatItem";


import { chatList, IChat } from "../../../../data/index";

interface IChatList {
  onSelectChat: (data: IChat) => void;
}
function ChatsList({onSelectChat}: IChatList) {
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
                onClick={() => onSelectChat(ch)}
              />
            );
          })}
        </div>
   
    </div>
  );
}

export default ChatsList;
