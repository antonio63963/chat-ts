import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";

import styles from "./menuDropDownContainer.module.css";

import { DotsThreeVertical } from "phosphor-react";
import MenuOptionItem from "../../common/components/MenuOptionItem/MenuOptionItem";
import IconButton from "../../common/components/IconButton/IconButton";
import useHeigtElement from "../../hooks/useHeigtElement";

const messageOptions = [
  {
    title: "Reply",
  },
  {
    title: "React to Message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete message",
  },
];

interface IMenuDropDown {
  styleDropdown?: CSSProperties;
}

const MenuDropDownContainer = ({ styleDropdown }: IMenuDropDown) => {
  const [isShownMenu, setIsShownMenu] = useState<boolean>(false);
  const menuRef = useRef(null);
  const menuHeight = useHeigtElement(menuRef, isShownMenu);

  const onCloseMenu = useCallback(function(e: MouseEvent) {
    const element = e.target as Element;

    if (
      element.closest('.dropdown')
    ) {
      return;
    } else {
      console.log('BOOM!!!')
      setIsShownMenu(false);
    }
  }, []);

  useEffect(() => {
    console.log("USe EFF", isShownMenu);
    if (isShownMenu) {
      window.addEventListener("click", onCloseMenu);
    }
  }, [isShownMenu, onCloseMenu]);

  return (
    <div className={cn(styles.menuDropDown_wrapper, 'dropdown')} style={styleDropdown}>
      {isShownMenu && (
        <div
          ref={menuRef}
          className={cn(styles.menuDropDown, "whiteBg")}
          style={{ top: "50px" }}
        >
          {messageOptions.map((opt, idx) => {
            return (
              <MenuOptionItem key={idx} title={opt.title} onClick={() => {}} />
            );
          })}
        </div>
      )}
      <IconButton onClick={() => setIsShownMenu(!isShownMenu)}>
        <DotsThreeVertical size={24} />
      </IconButton>
    </div>
  );
};

export default MenuDropDownContainer;
