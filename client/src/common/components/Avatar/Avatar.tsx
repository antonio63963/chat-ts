import React, { FC } from "react";
import cn from "classnames";

import "./Avatar.css";

interface IAvatar {
  img?: string;
  isOnline?: boolean;
}

const Avatar: FC<IAvatar> = ({ img, isOnline }) => {
  return (
    <div className={cn("avatarItemWrapper", isOnline ? "online" : null)}>
      <div
        className={cn("avatarItem")}
        style={{ backgroundImage: "url('/users/albert.jpg')" }}
      ></div>
      <div className={cn("onlineIndicator")}></div>
    </div>
  );
};

export default Avatar;
