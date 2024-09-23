import { ReactNode } from "react";
import cn from 'classnames';

import '../messages.css';

interface IMessageLayout {
  isOutgoing: boolean;
  children: ReactNode | ReactNode[];
}

function MessageLayout({isOutgoing, children}: IMessageLayout) {
  return (
    <div className={cn("messageWrapper", isOutgoing ? "outgoing" : "incoming")}>
    {children}
  </div>
  )
}

export default MessageLayout