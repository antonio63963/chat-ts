import React, { FC } from "react";
import cn from "classnames";

import "./Avatar.css";

interface IAvatar {
  img?: string | null;
  isOnline?: boolean;
  name?: string;
}

const Avatar = ({ img, isOnline, name }: IAvatar) => {
  console.log(name?.slice(0, 2))
  return (
    <div className={cn("avatarItemWrapper", isOnline ? "online" : null)}>
      <div
        className={cn("avatarItem")}
        style={{ backgroundImage: `url(${img})` }}
      >{!img && name ? name.slice(0, 2) : null}</div>
      <div className={cn("onlineIndicator")}></div>
    </div>
  );
};

export default Avatar;
