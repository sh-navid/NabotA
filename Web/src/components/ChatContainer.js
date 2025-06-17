import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { useState } from 'react';
import './ChatContainer.css';

import Icon from "../assets/logo3.png";

function ChatContainer() {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
  };

  return (
    <div className="chat-container">
      <header style={{padding:"1rem"}}>
        <img src={Icon} width="160rem"/>
      </header>
      <MessageList messages={messages} />
      <MessageInput onSend={addMessage} />
    </div>
  );
}

export default ChatContainer;
