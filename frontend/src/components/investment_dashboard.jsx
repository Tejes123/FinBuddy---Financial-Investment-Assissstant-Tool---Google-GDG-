import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

// 🌟 Styled Components for Clean UI
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const ResultsContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ResultTitle = styled.h3`
  color: #444;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin-top: 10px;
`;

const ErrorText = styled.p`
  color: red;
`;

export function InvestmentDashboard() {
  const [formData, setFormData] = useState({
    income: "",
    expenses: "",
    current_investment: "",
    risk_tolerance: "medium",
    investment_horizon: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/investment-plan", // ✅ Port remains 8080
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setResult(response.data);
    } catch (err) {
      setError("Error fetching investment plan");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Container>
      <Title>Investment Planner 📈</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          name="income"
          placeholder="Monthly Income (₹)"
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="expenses"
          placeholder="Monthly Expenses (₹)"
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="current_investment"
          placeholder="Current Investments (₹)"
          onChange={handleChange}
          required
        />
        <Select name="risk_tolerance" onChange={handleChange}>
          <option value="low">Low Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="high">High Risk</option>
        </Select>
        <Input
          type="number"
          name="investment_horizon"
          placeholder="Investment Horizon (years)"
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Get Investment Plan"}
        </Button>
      </Form>

      {loading && <p>Loading...</p>}
      {error && <ErrorText>{error}</ErrorText>}
      {result && (
        <ResultsContainer>
          <ResultTitle>📊 Portfolio Allocation</ResultTitle>
          <p>✅ Stocks: {result.portfolio_allocation.stocks}%</p>
          <p>✅ Bonds: {result.portfolio_allocation.bonds}%</p>
          <p>✅ Alternatives: {result.portfolio_allocation.alternatives}%</p>

          <ResultTitle>💡 AI Investment Insights</ResultTitle>
          <p>{result.ai_insights}</p>

          <ResultTitle>📉 Monte Carlo Simulation Chart</ResultTitle>
          <Image
            src={`data:image/png;base64,${result.monte_carlo_simulation}`}
            alt="Monte Carlo Simulation Chart"
          />
        </ResultsContainer>
      )}
    </Container>
  );
};