import "./MessagesSection.css";

import { IMessage, ITimeline } from "../../../../data";
import TimelineDivider from "../Timeline/TimelineDivider";
import {
  TextMessage,
  MediaMessage,
  ReplyMessage,
  LinkMessage,
  FileMessage,
} from "../../../../common/components/Messages";

interface IMessagesSection {
  messages: (IMessage | ITimeline)[];
}

function MessagesSection({ messages }: IMessagesSection) {
  return (
    <div className="messagesSection extraLightBg">
      {messages.map((msg, idx) => {
        switch (msg.type) {
          case "msg":
            switch (msg.subtype) {
              case "file":
                return (
                  <FileMessage
                    key={msg.id}
                    isOutgoing={msg.outgoing}
                    message={msg.message!}
                  />
                );
              case "img":
                return (
                  <MediaMessage
                    key={msg.id}
                    src={msg.img!}
                    text={msg.message}
                    isOutgoing={msg.outgoing}
                  />
                );
              case "link":
                return (
                  <LinkMessage
                    key={msg.id}
                    isOutgoing={msg.outgoing}
                    link={"www.youtube.com"}
                    message={msg.message}
                  />
                );
              case "reply":
                return (
                  <ReplyMessage
                    key={msg.id}
                    replyMessage={msg.reply!}
                    isOutgoing={msg.outgoing}
                    message={msg.message!}
                  />
                );
              default:
                return (
                  <TextMessage
                    key={msg.id}
                    isOutgoing={msg.outgoing}
                    text={msg.message!}
                  />
                );
            }
          case "timeline":
            return <TimelineDivider key={"divider" + idx} text={msg.text} />;

          default:
            return "oh, no!";
        }
      })}
    </div>
  );
}

export default MessagesSection;
