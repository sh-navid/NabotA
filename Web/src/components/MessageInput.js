/**/
import { useState } from "react";
import styled from 'styled-components';
import ClearIcon from "../assets/clear.png";
import SendIcon from "../assets/send.png";

const MessageInputWrapper = styled.div`
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  background-color: #424242;
  border-radius: 8px;
  display: flex;
  padding: 10px;
`;

const InputField = styled.input`
  transition: background-color 0.3s ease-in-out;
  background-color: #2c2c2c;
  border-radius: 20px;
  color: white;
  outline: none;
  padding: 10px;
  border: none;
  flex: 1;

  &:focus {
    background-color: #3b3b3b;
  }
`;

function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSpecialCommands = (text) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const currentDate = new Date().toLocaleDateString();
    const tasks = "Task list feature not implemented yet.";

    if (text === "/time") return `Current time: ${currentTime}`;
    if (text === "/date") return `Today's date: ${currentDate}`;
    if (text === "/tasks") return tasks;
    return "I don't know that command. Try /time, /date, or /tasks.";
  };

  const handleSend = () => {
    if (input.trim()) {
      const response = handleSpecialCommands(input);
      onSend({ text: input.startsWith("/") ? response : input, sender: input.startsWith("/") ? "bot" : "user" });
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <MessageInputWrapper>
      <img
        src={ClearIcon}
        width="14rem"
        height="14rem"
        style={{ verticalAlign: "middle", padding: ".6rem" }}
        alt="Close"
      />
      <InputField
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
      />
      <img
        onClick={handleSend}
        src={SendIcon}
        width="16rem"
        height="16rem"
        style={{ verticalAlign: "middle", padding: ".5rem" }}
        alt="Send"
      />
    </MessageInputWrapper>
  );
}

export default MessageInput;