import { DownloadSimple, FileDoc } from "phosphor-react";
import MessageLayout from "./MessageLayout";
import IconButton from "../../IconButton/IconButton";

interface IFileMessage {
  isOutgoing: boolean;
  message: string;
  messageClass: string;
}
const FileMessage = ({ isOutgoing, message, messageClass }: IFileMessage) => {
  return (
    <MessageLayout isOutgoing={isOutgoing} messageClass={messageClass}>
      <div className="message docMessage">
        <div className="docMessage__file">
          <FileDoc size={24} />
          <span className="docMessage__name">Abstract.png</span>
          <IconButton onClick={() => {}}>
            <DownloadSimple size={24} />
          </IconButton>
        </div>
        <p className="mediaText">{message}</p>
      </div>
    </MessageLayout>
  );
};

export default FileMessage;
