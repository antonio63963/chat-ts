import { useEffect, useState } from "react";
import cn from "classnames";

import "./ChatsListContainer.css";

import { chatList, IChat } from "../../../../data/index";
import SearchInput from "../../../../common/components/SearchInput/SearchInput";
import ArchiveButton from "../../../../common/components/ArchiveButton/ArchiveButton";
import TitledChatsList from "../../components/TitledChatsList/TitledChatsList";
import Divider from "../../../../common/components/Divider/Divider";

import { IChatWithActive } from "../../homePage.types";

interface IChatList {
  onSelectChat: (data: IChat) => void;
}

const ChatsListContainer = ({ onSelectChat }: IChatList) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [chats, setChats] = useState<IChatWithActive[]>([]);

  const onChatClick = (ch: IChat) => {
    const newState = chats.map((chat) =>
      chat.id === ch.id ? { ...chat, isActive: true } : {...chat, isActive: false}
    );
    setChats(newState);
    onSelectChat(ch);
  };
  useEffect(() => {
    const chatsWithActiveField = chatList.map((ch) => ({
      ...ch,
      isActive: false,
    }));
    setChats(chatsWithActiveField);
  }, []);

  return (
    <div className={cn("chatsList", "lightBg")}>
      <div className={cn("chatlistContent", "borderRight")}>
        <h2 className="chatListHeader">Chats</h2>
        <SearchInput
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
        <ArchiveButton onClick={() => {}} />
        <Divider />
        <TitledChatsList
          title="Pinned"
          chats={chats.filter((ch) => ch.pinned)}
          onSelectChat={onChatClick}
        />
        <TitledChatsList
          title="All"
          chats={chats.filter((ch) => !ch.pinned)}
          onSelectChat={onChatClick}
        />
      </div>
    </div>
  );
};

export default ChatsListContainer;
