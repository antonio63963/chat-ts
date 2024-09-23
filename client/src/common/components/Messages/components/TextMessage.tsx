import cn from "classnames";

interface IMessage {
  text: string;
  outgoing: boolean;
  incoming: boolean;
};

const TextMessage = ({ text, outgoing, incoming }: IMessage) => {
  return (
    <div
      className={cn(
        "messageWrapper",
        outgoing ? "outgoing" : "incoming"
      )}
    >
      <div
        className={cn(
          "message textMessage",
        )}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextMessage;
