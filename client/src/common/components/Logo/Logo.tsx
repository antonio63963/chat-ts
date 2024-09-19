import React from "react";
import cn from "classnames";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={cn(styles.logoWrapper)}>
      <img className={cn(styles.image)} src="/logo.svg" alt="logo app" />
    </div>
  );
}

export default Logo;
