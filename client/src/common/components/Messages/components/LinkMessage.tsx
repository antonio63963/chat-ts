import cn from "classnames";

interface ILinkMessage {
  isOutgoing: boolean;
  message?: string;
  link: string;
  preview?: string;
}

const LinkMessage = ({ isOutgoing, message, link, preview }: ILinkMessage) => {
  return (
    <div className={cn("messageWrapper", isOutgoing ? "outgoing" : "incoming")}>
      <div className={cn("message textMessage")}>
        <p>{message}</p>
        <div
          className={cn("mediaImageWrapper")}
          style={{ backgroundImage: `url(${preview})` }}
        ></div>
        <a href={link}>{link}</a>
      </div>
    </div>
  );
};

export default LinkMessage;
