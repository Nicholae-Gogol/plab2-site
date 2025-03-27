import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PresentingComplaints from "./Pages/PresentingComplaints";
import DiagnosticCases from "./Pages/DiagnosticCases";
import ConditionFollowUp from "./Pages/ConditionFollowUp";
import TestFollowUp from "./Pages/TestFollowUp";
import DischargeFollowUp from "./Pages/DischargeFollowUp";
import Ethics from "./Pages/Ethics";
import Counseling from "./Pages/Counseling";
import Practicals from "./Pages/Practicals";

import "./App.css"; // Make sure this import exists

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/presenting">Presenting Complaints</Link>
        <Link to="/diagnostic">Diagnostic Cases</Link>
        <Link to="/condition-follow-up">Condition Follow-up</Link>
        <Link to="/test-follow-up">Test Follow-up</Link>
        <Link to="/discharge-follow-up">Discharge Follow-up</Link>
        <Link to="/ethics">Ethics</Link>
        <Link to="/counseling">Counseling</Link>
        <Link to="/practicals">Practicals</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presenting" element={<PresentingComplaints />} />
        <Route path="/diagnostic" element={<DiagnosticCases />} />
        <Route path="/condition-follow-up" element={<ConditionFollowUp />} />
        <Route path="/test-follow-up" element={<TestFollowUp />} />
        <Route path="/discharge-follow-up" element={<DischargeFollowUp />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/practicals" element={<Practicals />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}


export default App;


