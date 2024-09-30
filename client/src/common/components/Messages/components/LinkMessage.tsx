import cn from "classnames";
import MessageLayout from "./MessageLayout";

interface ILinkMessage {
  isOutgoing: boolean;
  message?: string;
  link: string;
  preview?: string;
  messageClass: string;
}

const LinkMessage = ({
  isOutgoing,
  message,
  link,
  preview,
  messageClass,
}: ILinkMessage) => {
  return (
    <MessageLayout isOutgoing={isOutgoing} messageClass={messageClass}>
      <div className={cn("message textMessage")}>
        <p>{message}</p>
        <div
          className={cn("mediaImageWrapper")}
          style={{ backgroundImage: `url(${preview})` }}
        ></div>
        <a href={link}>{link}</a>
      </div>
    </MessageLayout>
  );
};

export default LinkMessage;
