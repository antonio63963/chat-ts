import { useSelector } from "react-redux";
import cn from "classnames";
import { PaperPlaneTilt } from "phosphor-react";

import IconButton from "../../../../common/components/IconButton/IconButton";

import styles from "./messageTextField.module.css";


import { IStore, ThemeState } from "../../../../redux/redux.types";
import AttachActionsContainer from "../../../../containers/AttachActionsContainer/AttachActionsContainer";

import EmojiPickerContainer from "../../../../containers/EmojiPickerContainer/EmojiPickerContainer";

interface IMessageTextField {
  value: string;
  onChange: (data: string) => void;
  onSend: () => void;
  isShownEmoji: boolean;
  onSelectedEmoji: ({ native }: any) => void;
  showHideEmoji: () => void;
};

const MessageTextField = ({
  value,
  onChange,
  onSend,
  isShownEmoji,
  onSelectedEmoji,
  showHideEmoji,
}: IMessageTextField) => {
  const theme = useSelector<IStore>((store) => store.theme) as ThemeState;
  console.log("THEME: ", theme);
  return (
    <div className={cn(styles.footer)}>
      <div className={cn(styles.wrapper, "inputWrapper")}>
        <AttachActionsContainer />
        <input
          className={cn(styles.messageTextField)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <EmojiPickerContainer onSelected={onSelectedEmoji} theme={theme.mode} />
      </div>
      <IconButton onClick={onSend} isFilled={true}>
        <PaperPlaneTilt size={24} />
      </IconButton>
    </div>
  );
};

export default MessageTextField;
