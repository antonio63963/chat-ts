import React, { FC } from "react";

import './ChatItem.css';

import Avatar from "../../../../common/components/Avatar/Avatar";
import Badge from "../../../../common/components/Badge/Badge";

interface IChatItem {
  avatar?: string | null;
  title: string;
  subtitle: string;
  time: string;
  unreadMsg: number;
  isOnline: boolean;
}

const ChatItem = ({
  avatar,
  title,
  subtitle,
  time,
  unreadMsg,
  isOnline,
}: IChatItem) => {
  return (
    <div className="chatItem">
      <Avatar img={avatar} isOnline={isOnline} name={title}/>
      <div className="chatItemText">
        <h4 className="chatItemTitle">{title}</h4>
        <p className="chatItemSubtitle">{subtitle}</p>
      </div>
      <div className="chatItemTail">
        <span className="chatItemTail_time">
          {time}
        </span>
        <Badge num={unreadMsg} />
      </div>
    </div>
  );
};

export default ChatItem;
