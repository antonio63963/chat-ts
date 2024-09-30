import cn from "classnames";

import "../messages.css";
import MessageLayout from "./MessageLayout";

interface IMediaMessage {
  src: string;
  text?: string;
  isOutgoing: boolean;
  messageClass: string;
}

const MediaMessage = ({
  src,
  text,
  isOutgoing,
  messageClass,
}: IMediaMessage) => {
  return (
    <MessageLayout isOutgoing={isOutgoing} messageClass={messageClass}>
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
