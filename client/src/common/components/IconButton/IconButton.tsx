import React, { FC } from "react";
import cn from "classnames";
import styles from "./IconButton.module.css";

interface IconButtonI {
  isActive: boolean;
}

const IconButton: FC<IconButtonI> = ({ isActive }) => {
  return <div className={cn(styles.IconButton, )}></div>;
};

export default IconButton;
