import React from "react";
import cn from "classnames";

import styles from "./ChatsList.module.css";
import Avatar from "../../../../common/components/Avatar/Avatar";

function ChatsList() {
  return <div className={cn(styles.chatsList, "lightBg")}>
    <Avatar/>
  </div>;
}

export default ChatsList;
