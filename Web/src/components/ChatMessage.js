/**/
import styled from 'styled-components';

const ChatMessageWrapper = styled.div`
  transition: background-color 0.3s ease-in-out;
  word-wrap: break-word;
  border-radius: 20px;
  padding: 10px 15px;
  position: relative;
  max-width: 70%;
  margin: 5px 0;
  background: ${props => props.sender === 'user' ? 'goldenrod' : 'royalblue'};
  color: ${props => props.sender === 'user' ? '#212121' : 'white'};
  align-self: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
`;

function ChatMessage({ message }) {
  return (
    <ChatMessageWrapper sender={message.sender}>
      {message.text}
    </ChatMessageWrapper>
  );
}

export default ChatMessage;