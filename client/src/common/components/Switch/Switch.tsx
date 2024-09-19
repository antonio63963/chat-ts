import React, { FC, useState } from "react";
import cn from "classnames";

import "./Switch.css";

interface ISwitch {
  isChecked: boolean;
  onChange: () => {};
}

const Switch: FC<ISwitch> = ({ isChecked, onChange }) => {
  return (
    <label className={cn("switch")}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={(e) => onChange()}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
