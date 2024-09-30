import cn from "classnames";
import MessageLayout from "./MessageLayout";

interface IMessage {
  text: string;
  isOutgoing: boolean;
  messageClass: string;
}

const TextMessage = ({ text, isOutgoing, messageClass }: IMessage) => {
  return (
    <MessageLayout isOutgoing={isOutgoing} messageClass={messageClass}>
      <div className={cn("message textMessage")}>
        <p>{text}</p>
      </div>
    </MessageLayout>
  );
};

export default TextMessage;
