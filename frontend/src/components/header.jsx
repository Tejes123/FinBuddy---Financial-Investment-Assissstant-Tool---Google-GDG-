import React, { useEffect } from "react";

export function Header() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .header {
        background-color: #0f172a; /* dark navy */
        color: yellow;
        padding: 1rem 0;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <header className="header">FinBuddy</header>;
}