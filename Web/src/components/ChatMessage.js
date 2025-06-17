/*[src/components/ChatMessage.js]*/
import './ChatMessage.css';

function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.sender}`}>
      {message.text}
    </div>
  );
}

export default ChatMessage;
