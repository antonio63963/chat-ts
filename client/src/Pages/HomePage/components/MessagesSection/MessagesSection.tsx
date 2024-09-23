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
      {messages.map((msg) => {
        switch (msg.type) {
          case "msg":
            switch (msg.subtype) {
              case "file":
                return (
                  <FileMessage
                    isOutgoing={msg.outgoing}
                    message={msg.message!}
                  />
                );
              case "img":
                return (
                  <MediaMessage
                    src={msg.img!}
                    text={msg.message}
                    isOutgoing={msg.outgoing}
                  />
                );
              case "link":
                return (
                  <LinkMessage
                    isOutgoing={msg.outgoing}
                    link={"www.youtube.com"}
                    message={msg.message}
                  />
                );
              case "reply":
                return (
                  <ReplyMessage
                    replyMessage={msg.reply!}
                    isOutgoing={msg.outgoing}
                    message={msg.message!}
                  />
                );
              default:
                return (
                  <TextMessage
                    outgoing={msg.outgoing}
                    text={msg.message!}
                    incoming={msg.incoming}
                  />
                );
            }
          case "timeline":
            return <TimelineDivider text={msg.text} />;

          default:
            return "oh, no!";
        }
      })}
    </div>
  );
}

export default MessagesSection;
