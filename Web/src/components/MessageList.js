/*[src/components/MessageList.js]*/
import ChatMessage from './ChatMessage';
import './MessageList.css';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-message">No messages yet.</div>
      ) : (
        messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))
      )}
    </div>
  );
}

export default MessageList;
