import React from "react";
import cn from "classnames";

import styles from "./Badge.module.css";

interface IBadge {
  num: number;
  colorBg?: string;
}

const Badge = ({ num, colorBg }: IBadge) => {
  return (
    <div className={cn(styles.badge)} style={{ backgroundColor: `${colorBg}` }}>
      <span className={cn(styles.badgeNum)}>{num}</span>
    </div>
  );
};

export default Badge;
