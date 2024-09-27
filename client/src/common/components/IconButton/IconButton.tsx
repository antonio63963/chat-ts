import React, { ReactNode } from "react";
import cn from "classnames";

import "./IconButton.css";

interface IIconButton {
  children: ReactNode;
  onClick: () => void;
  isFilled?: boolean;
  bgColor?: string;
}

function IconButton({ children, onClick, isFilled, bgColor }: IIconButton) {
  return (
    <button
      onClick={onClick}
      style={{backgroundColor: bgColor}}
      className={cn(isFilled ? "filledIconButton" : "iconButton")}
    >
      {children}
    </button>
  );
}

export default IconButton;
