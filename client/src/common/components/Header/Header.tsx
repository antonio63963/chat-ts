import { FC } from "react";

import cn from "classnames";
import "./Header.css";

import Switch from "../Switch/Switch";
import Logo from "../Logo/Logo";

interface IHeader {
  onSwitchChange: () => void;
  switchDefaultValue: boolean;
}

const Header: FC<IHeader> = ({ onSwitchChange, switchDefaultValue }) => {
  return (
    <header className={cn("header extraLightBg")}>
      <div className="appSize headerContent">
        <Logo />
        <Switch
          isChecked={switchDefaultValue}
          onChange={async () => onSwitchChange()}
        />
      </div>
    </header>
  );
};

export default Header;
