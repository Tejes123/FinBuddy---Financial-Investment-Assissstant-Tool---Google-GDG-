import { useRef, useState, useEffect } from "react";

// Add CSS styles directly in the same file
const styles = `
  .auto-expanding-textarea {
    background-color: transparent;
    border: none;
    outline: none;
    color: #E0E0E0;
    width: 96%;
    height: auto;
    min-height: fit-content;
    resize: none;
    overflow: hidden;
  }
  .auto-expanding-textarea:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

// Append the styles to the document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export function AutoExpandingTextarea({ value }) {
  const textareaRef = useRef(null);
  const [text, setText] = useState(value);

  const handleInput = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.width = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, []);

  return (
    <textarea
      ref={textareaRef}
      className="auto-expanding-textarea"
      placeholder="..."
      value="Muruga"
      onInput={handleInput}
      readOnly
    />
  );
}
