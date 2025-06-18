/**/
import styled from 'styled-components';
import ChatMessage from './ChatMessage';

const MessageListWrapper = styled.div`
  border-radius: 8px;
  overflow-y: auto;
  padding: 10px;
  flex: 1;
`;

const EmptyMessage = styled.div`
  font-style: italic;
  text-align: center;
  margin-top: 20px;
  color: #aaa;
`;

function MessageList({ messages }) {
  return (
    <MessageListWrapper>
      {messages.length === 0 ? (
        <EmptyMessage>No messages yet.</EmptyMessage>
      ) : (
        messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))
      )}
    </MessageListWrapper>
  );
}

export default MessageList;