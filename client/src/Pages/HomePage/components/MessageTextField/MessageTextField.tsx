import cn from "classnames";
import { PaperPlaneTilt, Paperclip, Smiley } from "phosphor-react";

import IconButton from "../../../../common/components/IconButton/IconButton";

import styles from "./messageTextField.module.css";

interface IMessageTextField {
  value: string;
  onChange: (data: string) => void;
  onSend: () => void;
}
const MessageTextField = ({ value, onChange, onSend }: IMessageTextField) => {
  return (
    <div className={cn(styles.footer)}>
      <div className={cn(styles.wrapper, "inputWrapper")}>
        <IconButton onClick={() => {}}>
          <Paperclip size={24} />
        </IconButton>
        <input
          className={cn(styles.messageTextField)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <IconButton onClick={() => {}}>
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
