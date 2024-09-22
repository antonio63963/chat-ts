import ChatItem from "../../../../common/components/ChatItem/ChatItem";
import { IChat } from "../../../../data";

import { IChatWithActive } from "../../homePage.types";

import './TitledChatsList.css';

interface ITitledChatsList {
  title: string;
  chats: IChatWithActive[];
  onSelectChat: (data: IChat) => void;
}

function TitledChatsList({ title, chats, onSelectChat }: ITitledChatsList) {
  return (
    <div className="titledChatsList">
      <h3 className="titledChatList__title">{title}</h3>
      <div className="titledChatList__chats">
        {chats.map((ch: IChatWithActive) => {
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
              isActive={ch.isActive}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TitledChatsList;
