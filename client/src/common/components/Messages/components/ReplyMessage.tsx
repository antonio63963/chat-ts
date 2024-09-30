import cn from "classnames";
import MessageLayout from "./MessageLayout";

interface IReplyMessage {
  replyMessage: string;
  message: string;
  isOutgoing: boolean;
}
const ReplyMessage = ({ replyMessage, message, isOutgoing }: IReplyMessage) => {
  return (
    <MessageLayout isOutgoing = {isOutgoing}>
      <div className={cn("message", "textMessage")}>
        <div
          className={cn("replyMessage")}

        >{replyMessage}</div>
      <p>{message}</p>
      </div>
    </MessageLayout>
  );
};

export default ReplyMessage;
