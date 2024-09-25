import { useSelector } from "react-redux";
import cn from "classnames";
import { PaperPlaneTilt, Paperclip, Smiley } from "phosphor-react";

import IconButton from "../../../../common/components/IconButton/IconButton";

import styles from "./messageTextField.module.css";
import EmojiMart from "../../../../common/EmojiMart/EmojiMart";

import { IStore, ThemeState } from "../../../../redux/redux.types";

interface IMessageTextField {
  value: string;
  onChange: (data: string) => void;
  onSend: () => void;
  isShownEmoji: boolean;
  onSelectedEmoji: ({ native }: any) => void;
  showHideEmoji: () => void;
}
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
      <EmojiMart
        isShown={isShownEmoji}
        onSelected={onSelectedEmoji}
        theme={theme.mode}
      />
      <div className={cn(styles.wrapper, "inputWrapper")}>
        <IconButton onClick={() => {}}>
          <Paperclip size={24} />
        </IconButton>
        <input
          className={cn(styles.messageTextField)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <IconButton onClick={showHideEmoji}>
          <Smiley size={24} />
        </IconButton>
      </div>
      <IconButton onClick={onSend} isFilled={true}>
        <PaperPlaneTilt size={24} />
      </IconButton>
    </div>
  );
};

export default MessageTextField;
