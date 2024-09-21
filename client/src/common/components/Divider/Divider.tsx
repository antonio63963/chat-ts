import React from "react";
import cn from "classnames";

import './Divider.css';

interface IDivider {
  direction?: string;
}

const Divider = ({ direction = "horizontal" }: IDivider) => {
  return (
    <div
      className={cn(
        direction === "vertical" ? "dividerVertical" : "dividerHorizontal",
      direction === "vertical" ? "borderRight" : "borderBottom"
      )}
    >
    </div>
  );
};

export default Divider;
