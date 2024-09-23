import cn from "classnames";

interface IReplyMessage {
  replyMessage: string;
  message: string;
  isOutgoing: boolean;
}
const ReplyMessage = ({ replyMessage, message, isOutgoing }: IReplyMessage) => {
  return (
    <div className={cn("messageWrapper", isOutgoing ? "outgoing" : "incoming")}>
      <div className={cn("message", "textMessage")}>
        <div
          className={cn("replyMessage")}

        >{replyMessage}</div>
      <p>{message}</p>
      </div>
    </div>
  );
};

export default ReplyMessage;
