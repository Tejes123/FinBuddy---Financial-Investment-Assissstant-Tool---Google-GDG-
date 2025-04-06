import React from "react";
import Navbar from "../components/Navbar";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.s8XqeBSOjliFcNouocUXQAHaEK&pid=Api"
          alt="Financial Advisor Chatbot"
          style={{
            width: "90%",
            maxWidth: "600px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
        <h1 style={{ marginTop: "20px" }}>Welcome to Financial Advisor</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Your personal financial assistant for investments, savings, and more.
        </p>
      </section>

      {/* Features Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "40px 20px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "250px", margin: "20px" }}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.2roYMLxxgKyp7OS0T9rPMAHaFg&pid=Api"
            alt="Multilingual"
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h3>Multi-Lingual</h3>
          <p>Talk to the bot in English, Hindi, Tamil, Japanese, and more.</p>
        </div>

        <div style={{ textAlign: "center", maxWidth: "250px", margin: "20px" }}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.zm5QziJirQ8WA8mLmNwlrgHaC8&pid=Api"
            alt="Voice Support"
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h3>Voice Support</h3>
          <p>Use natural speech to ask questions or get suggestions.</p>
        </div>

        <div style={{ textAlign: "center", maxWidth: "250px", margin: "20px" }}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.6ZO2qLYsAxMIsbiJro1ffAHaFM&pid=Api"
            alt="Smart Tools"
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h3>Smart Tools</h3>
          <p>Budget tracker, expense monitor, investment analyzer, and more!</p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2>Start Your Financial Journey Today 🚀</h2>
        <p>
          Join thousands using our AI-powered chatbot to improve their financial
          life.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Home;
