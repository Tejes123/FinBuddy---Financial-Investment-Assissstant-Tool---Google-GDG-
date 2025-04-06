import { useChat } from "./chat-provider";
import { useState } from "react";

// Define traditional CSS styles as a string
const styles = `
  .typeview-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    padding: 1rem;
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, #1f2937, #111827);
    box-shadow: 0 -2px 6px rgba(0,0,0,0.4);
  }

  .textarea-container {
    flex: 1;
    max-width: 70vw;
    background-color: #111827;
    border-radius: 2rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    border: 1px solid #374151;
  }

  .custom-textarea {
    background: transparent;
    border: none;
    outline: none;
    color: #e5e7eb;
    font-size: 1rem;
    width: 100%;
    resize: none;
  }

  .send-button {
    background-color: #3b82f6;
    border: none;
    color: white;
    font-weight: bold;
    padding: 0.6rem 1.2rem;
    margin-left: 1rem;
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: background 0.3s ease;
  }

  .send-button:hover {
    background-color: #2563eb;
  }
`;


// Inject the CSS into the document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

async function getBotResponse(query) {
  const req_body = { userQuery: query };

  try {
    const response = await fetch("http://127.0.0.1:8080/datastore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the data format
      },
      body: JSON.stringify(req_body),
    });
    const responseJSON = await response.json();
    const Chat_response = responseJSON.answer;
    return Chat_response;
  } catch (error) {
    return "Error";
  }
}

export function TypeView() {
  const { addChat } = useChat();
  const [message, setMessage] = useState("");

  const appendMessage = async (content) => {
    addChat("user", content);
    const chatAns = await getBotResponse(content);
    addChat("bot", chatAns);
  };

  return (
    <div className="typeview-container">
      <div className="textarea-container">
        <textarea
          className="custom-textarea"
          placeholder="Raise your questions here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={() => {
          if (message.trim() !== "") {
            appendMessage(message);
            setMessage("");
          }
        }}
        className="send-button"
      >
        SEND
      </button>
    </div>
  );
}

export default getBotResponse;
