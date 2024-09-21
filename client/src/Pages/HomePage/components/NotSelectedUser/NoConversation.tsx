import React from 'react';
import './NoConversation.css';

const NotSelectedConversation =() => {
  return (
    <div className='noConversation'>
      <div className='noConversationContent'>
        <img src="/svg/callService.svg" alt="not selected conversation" />
        <h2>Slect Chat for conversation.</h2>
      </div>
    </div>
  )
}

export default NotSelectedConversation;
