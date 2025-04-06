import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .navbar {
        background-color: #1e293b; /* slate-800 */
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      
      .navbar ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        margin: 0;
        padding: 0;
      }

      .navbar a {
        text-decoration: none;
        color: white;
        font-weight: 500;
        font-size: 1.1rem;
        transition: color 0.3s ease;
      }

      .navbar a:hover {
        color: #38bdf8; /* sky-400 */
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
        <li><Link to="/investment">Investment</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
