/**/
import styled from 'styled-components';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { useState } from 'react';
import Icon from "../assets/logo3.png";

const ChatContainerWrapper = styled.div`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #1e1e1e;
  flex-direction: column;
  border-radius: 8px;
  color: white;
  display: flex;
  height: 100vh;
`;

const Header = styled.header`
  padding: 1rem;
`;

function ChatContainer() {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
  };

  return (
    <ChatContainerWrapper>
      <Header>
        <img src={Icon} width="160rem" alt="logo"/>
      </Header>
      <MessageList messages={messages} />
      <MessageInput onSend={addMessage} />
    </ChatContainerWrapper>
  );
}

export default ChatContainer;