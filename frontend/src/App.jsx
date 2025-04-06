import { Routes, Route, Link } from 'react-router-dom';
import {Home} from './components/home';
import {Chatbot} from './components/Chatbot';
import {Navbar} from './components/Navbar';
import {InvestmentDashboard} from './components/investment_dashboard'
import {Header} from "./components/header"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/investment" element={<InvestmentDashboard/>} />
      </Routes>
    </div>
  );
}
