import cn from "classnames";

import "../messages.css";

interface IMediaMessage {
  src: string;
  text?: string;
  isOutgoing: boolean;
};

const MediaMessage = ({ src, text, isOutgoing }: IMediaMessage) => {
  return (
    <div className={cn("messageWrapper", isOutgoing ? "outgoing" : "incoming")}>
      <div className={cn("message", "mediaMessage")}>
        <div
          className={cn("mediaImageWrapper")}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        {text && <p className={cn("mediaText")}>{text}</p>}
      </div>
    </div>
  );
};

export default MediaMessage;
