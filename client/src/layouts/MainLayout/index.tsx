import React, { useCallback } from "react";
import { Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./mainLayout.module.css";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../common/components/Header/Header";

import { switchThemeMode } from "../../redux/slices/themeSlice/themeSlice";

import { IStore, ThemeMode } from "../../redux/redux.types";

export default function MainLayout() {
  const themeMode = useSelector<IStore>((state) => state.theme.mode);
  const dispatch = useDispatch();

  const onSwitchTheme = useCallback(():void => {
    dispatch(switchThemeMode());
  }, [dispatch]);

  return (
    <div className={cn(styles.fullsize, 'whiteBg', themeMode as string)}>
        <Header
          switchDefaultValue={themeMode === ThemeMode.dark}
          onSwitchChange={onSwitchTheme}
        />
      <div className={cn( 'appSize', styles.appContainer)}>
        <Outlet/>
      </div>
    </div>
  );
}
