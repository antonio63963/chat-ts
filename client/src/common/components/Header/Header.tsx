import React from "react";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";
import "./Header.css";

import { ThemeMode, ThemeState } from "../../../redux/slices/themeSlice/types";

import { switchThemeMode } from "../../../redux/slices/themeSlice/themeSlice";
import Switch from "../Switch/Switch";
import Logo from "../Logo/Logo";

interface IStore {
  theme: ThemeState;
}

const Header = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector<IStore>((state) => state.theme.mode);
  console.log(themeMode, typeof themeMode);

  return (
    <header className={cn(themeMode as string, "header")}>
      <Logo />
      <Switch
        isChecked={themeMode === ThemeMode.dark}
        onChange={() => dispatch(switchThemeMode())}
      />
    </header>
  );
};

export default Header;
