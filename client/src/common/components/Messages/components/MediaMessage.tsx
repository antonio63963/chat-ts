import cn from "classnames";

import "../messages.css";
import MessageLayout from "./MessageLayout";

interface IMediaMessage {
  src: string;
  text?: string;
  isOutgoing: boolean;
};

const MediaMessage = ({ src, text, isOutgoing }: IMediaMessage) => {
  return (
    <MessageLayout isOutgoing={isOutgoing}>
      <div className={cn("message", "mediaMessage")}>
        <div
          className={cn("mediaImageWrapper")}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        {text && <p className={cn("mediaText")}>{text}</p>}
      </div>
    </MessageLayout>
  );
};

export default MediaMessage;
