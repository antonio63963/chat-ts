import React from "react";
import "./NoConversation.css";

const NotSelectedConversation = () => {
  return (
    <div className="noConversation">
      <div className="noConversationContent">
        <div className="noConversationImgWrapper">
          <img src="/svg/callService.svg" alt="not selected conversation" />
        </div>
        <h2>Slect Chat for conversation.</h2>
      </div>
    </div>
  );
};

export default NotSelectedConversation;
