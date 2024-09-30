import cn from "classnames";
import MessageLayout from "./MessageLayout";

interface IMessage {
  text: string;
  isOutgoing: boolean;
}

const TextMessage = ({ text, isOutgoing }: IMessage) => {
  return (
    <MessageLayout isOutgoing={isOutgoing}>
      <div className={cn("message textMessage")}>
        <p>{text}</p>
      </div>
    </MessageLayout>
  );
};

export default TextMessage;
