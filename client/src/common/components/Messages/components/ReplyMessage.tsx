import cn from "classnames";
import MessageLayout from "./MessageLayout";

interface IReplyMessage {
  replyMessage: string;
  message: string;
  isOutgoing: boolean;
  messageClass: string;
}
const ReplyMessage = ({
  replyMessage,
  message,
  isOutgoing,
  messageClass,
}: IReplyMessage) => {
  return (
    <MessageLayout isOutgoing={isOutgoing} messageClass={messageClass}>
      <div className={cn("message", "textMessage")}>
        <div className={cn("replyMessage")}>{replyMessage}</div>
        <p>{message}</p>
      </div>
    </MessageLayout>
  );
};

export default ReplyMessage;
