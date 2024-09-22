import React from "react";
import cn from 'classnames';

import "./ChatItem.css";

import Avatar from "../Avatar/Avatar";
import Badge from "../Badge/Badge";

interface IChatItem {
  avatar?: string | null;
  title: string;
  subtitle: string;
  time: string;
  unreadMsg: number;
  isOnline: boolean;
  onClick: () => void;
  isActive?: boolean;
}

const ChatItem = ({
  avatar,
  title,
  subtitle,
  time,
  unreadMsg,
  isOnline,
  onClick,
  isActive,
}: IChatItem) => {
  return (
    <div
      className={cn("chatItem", isActive ? 'active' : null)}
      onClick={() => onClick()}
    >
      <Avatar img={avatar} isOnline={isOnline} name={title} />
      <div className="chatItemText">
        <h4 className="chatItemTitle">{title}</h4>
        <p className="chatItemSubtitle">{subtitle}</p>
      </div>
      <div className="chatItemTail">
        <span className="chatItemTail_time">{time}</span>
        <Badge num={unreadMsg} colorBg={isActive ? '#091A7A' : ''} />
      </div>
    </div>
  );
};

export default ChatItem;
