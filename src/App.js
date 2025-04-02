import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Stripe imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Your existing page/component imports
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing"; // Import Pricing page
import PaymentPage from "./Pages/PaymentPage"; // Import Payment page
import PresentingComplaints from "./Pages/PresentingComplaints";
import DiagnosticCases from "./Pages/DiagnosticCases";
import ConditionFollowUp from "./Pages/ConditionFollowUp";
import TestFollowUp from "./Pages/TestFollowUp";
import DischargeFollowUp from "./Pages/DischargeFollowUp";
import Ethics from "./Pages/Ethics";
import Counseling from "./Pages/Counseling";
import Practicals from "./Pages/Practicals";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import TopicPage from "./components/DiagnosticCases/TopicDetail"; // ✅ NEW
import NeurologyScenarios from "./Pages/NeurologyScenarios";

import "./App.css";

// Initialize Stripe with your test publishable key
const stripePromise = loadStripe(
  "pk_test_51R9DDXQ4wdaa0J5pD0qJlUSTr9HEvusn0U1IVbuAGxGfzz35bUp1Nc5x66wphimuzYPNCAB0Gtg6uV1KzrCj6AC00mJqQY1bB"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link> {/* Added Pricing link */}
          <Link to="/signin" style={{ marginLeft: "auto", fontWeight: "bold" }}>
            Sign In
          </Link>
          <Link to="/register">Register</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presenting" element={<PresentingComplaints />} />
          <Route path="/diagnostic" element={<DiagnosticCases />} />
          <Route path="/diagnostic/:topicId" element={<TopicPage />} /> {/* ✅ NEW */}
          <Route path="/condition-follow-up" element={<ConditionFollowUp />} />
          <Route path="/test-follow-up" element={<TestFollowUp />} />
          <Route path="/discharge-follow-up" element={<DischargeFollowUp />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/practicals" element={<Practicals />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/diagnostic/neurology" element={<NeurologyScenarios />} />
        </Routes>
      </Router>
    </Elements>
  );
}

export default App;





