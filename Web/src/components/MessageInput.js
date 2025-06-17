/*[src/components/MessageInput.js]*/
import { useState } from "react";
import "./MessageInput.css";

import ClearIcon from "../assets/clear.png";
import SendIcon from "../assets/send.png";

const size = "16rem";
const size2 = "14rem";

function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend({ text: input, sender: "user" }); // Send message to parent
      setInput("");
    }
  };

  return (
    <div className="message-input">
      <img
        src={ClearIcon}
        width={size2}
        height={size2}
        style={{ verticalAlign: "middle", padding: ".6rem" }}
        alt="Close"
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <img
        onClick={handleSend}
        src={SendIcon}
        width={size}
        height={size}
        style={{ verticalAlign: "middle", padding: ".5rem" }}
        alt="Send"
      />
    </div>
  );
}

export default MessageInput;
