import React from "react";
import cn from "classnames";

import "./menuOptionItem.css";

interface IMenuOptionItem {
  title: string;
  onClick: () => void;
}

const MenuOptionItem = ({ title }: IMenuOptionItem) => {
  return (
    <div className={cn("menuOptionItem")}>
      <span className={cn("menuOptionItem_title")}>{title}</span>
    </div>
  );
};

export default MenuOptionItem;
