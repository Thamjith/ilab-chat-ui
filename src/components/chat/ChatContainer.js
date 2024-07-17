import './ChatContainer.css';

import ChatBox from './ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Onboarding from '../onboarding/Onboarding';
import React from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatContainer = ({ responses, message, setMessage, handleSendMessage, handleKeyDown, isSending, InitialQuestion }) => {
  const sendMessage = () => {
    if (!message.trim() || isSending) return;
    handleSendMessage(message);
  };
// console.log("initialQuestion = ", initialQuestion)
  return (
    <div className="chat-container" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/chatbot.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px'
    }}>
      <ChatBox responses={responses} />
      <div className="input-box">
        {
            InitialQuestion ?  
              <Onboarding setMessage={setMessage} /> :
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={handleKeyDown}
                disabled={isSending}
              />
          }
        <button onClick={sendMessage} disabled={isSending}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
