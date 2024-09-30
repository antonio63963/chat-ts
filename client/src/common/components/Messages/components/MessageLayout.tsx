import { ReactNode } from "react";
import cn from "classnames";

import "../messages.css";
import MenuDropDownContainer from "../../../../containers/MenuDropDownContainer/MenuDropDownContainer";

interface IMessageLayout {
  isOutgoing: boolean;
  children: ReactNode | ReactNode[];
  messageClass: string;
}

function MessageLayout({ isOutgoing, children, messageClass }: IMessageLayout) {
  return (
    <div className={cn("messageWrapper", isOutgoing ? "outgoing" : "incoming")}>
      {children}
      <div className="massageTail">
        <MenuDropDownContainer messageClass={messageClass} />
      </div>
    </div>
  );
}

export default MessageLayout;
