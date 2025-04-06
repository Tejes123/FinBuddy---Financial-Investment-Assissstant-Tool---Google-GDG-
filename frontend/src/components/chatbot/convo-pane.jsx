import React from 'react';
import { AutoExpandingTextarea } from "./AutoExpandingTextArea";
import { useChat } from "./chat-provider";

// Define traditional CSS styles as a string
const styles = `
  .convo-pane {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 77vh;
    background: linear-gradient(to bottom, #1e1e28, #1a1a1f);
    padding-top: 1rem;
  }

  .convo-content {
    max-height: 72vh;
    height: 72vh;
    width: 90vw;
    overflow-y: auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .chat-not-user-container, .chat-user-container {
    display: flex;
    width: 100%;
  }

  .chat-user-container {
    justify-content: flex-end;
  }

  .chat-not-user-container {
    justify-content: flex-start;
  }

  .chat-message {
    max-width: 70%;
    padding: 0.75rem 1rem;
    border-radius: 16px;
    font-size: 1rem;
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.4;
    box-shadow: 0 2px 10px rgba(0,0,0,0.25);
    word-break: break-word;
  }

  .chat-user-container .chat-message {
    background-color: #3b82f6; /* Blue */
    color: white;
    border-bottom-right-radius: 4px;
  }

  .chat-not-user-container .chat-message {
    background-color: #374151; /* Gray */
    color: #e5e7eb;
    border-bottom-left-radius: 4px;
  }

  .pre-wrap {
    white-space: pre-wrap;
  }
`;


// Inject the styles into the document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

function addChat(chatInfo) {
  const { fromUser, content } = chatInfo;
  return fromUser !== "user" ? (
    <div className="chat-not-user-container">
      <div className="chat-message">
        <label className="pre-wrap">{content}</label>
      </div>
    </div>
  ) : (
    <div className="chat-user-container">
      <div className="chat-message">
        <label className="pre-wrap">{content}</label>
      </div>
    </div>
  );
}

export function ConvoPane() {
  const { chats } = useChat();

  return (
    <div className="convo-pane">
      <div className="convo-content">
        {chats.map((chat, index) => (
          <div key={index}>{addChat(chat)}</div>
        ))}
      </div>
    </div>
  );
}
