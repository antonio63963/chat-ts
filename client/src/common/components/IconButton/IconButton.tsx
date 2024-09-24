import React, { ReactNode } from "react";
import cn from "classnames";

import "./IconButton.css";

interface IIconButton {
  children: ReactNode;
  onClick: () => void;
  isFilled?: boolean;
}

function IconButton({ children, onClick, isFilled }: IIconButton) {
  return (
    <button
      onClick={onClick}
      className={cn(isFilled ? "filledIconButton" : "iconButton")}
    >
      {children}
    </button>
  );
}

export default IconButton;
