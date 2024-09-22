import React from "react";
import cn from "classnames";

import {
  VideoCamera,
  Phone,
  MagnifyingGlass,
  Gear,
  CaretDown,
} from "phosphor-react";

import styles from "./ChatDetailsHeader.module.css";
import Avatar from "../../../../common/components/Avatar/Avatar";
import IconButton from "../../../../common/components/IconButton/IconButton";
import Divider from "../../../../common/components/Divider/Divider";

interface IConversationHeader {
  avatar?: string | null;
  name?: string;
  isOnline: boolean;
}

const ConversationHeader = ({
  avatar,
  name,
  isOnline,
}: IConversationHeader) => {
  return (
    <div className={cn(styles.header, "lightBg")}>
      <Avatar img={avatar} name={name} isOnline={isOnline} />
      <div className={cn(styles.headerCol)}>
        <h4 className={cn(styles.title)}>{name}</h4>
        <span className={cn(styles.subtitle)}>
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
      <div className={cn(styles.actionsDesktop)}>
        <IconButton onClick={() => {}}>
          <Phone size={24} />
        </IconButton>
        <IconButton onClick={() => {}}>
          <VideoCamera size={24} />
        </IconButton>
        <IconButton onClick={() => {}}>
          <MagnifyingGlass size={24} />
        </IconButton>
        <Divider direction="vertical" />
        <IconButton onClick={() => {}}>
          <Gear size={24} />
        </IconButton>
      </div>

      <div className={cn(styles.actionsMobile)}>
        <IconButton onClick={() => {}}>
          <Phone size={24} />
        </IconButton>
        <IconButton onClick={() => {}}>
          <CaretDown size={24}/>
        </IconButton>
      </div>
    </div>
  );
};

export default ConversationHeader;
