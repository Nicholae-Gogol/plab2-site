import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to PLAB 2 Companion</h1>
        <p>Your structured, smart approach to mastering the PLAB 2 exam</p>
        <Link to="/presenting" className="start-btn">Start Exploring</Link>
      </header>

      <section className="home-section">
        <h2>Presenting Complaints</h2>
        <p>Explore 130+ presenting complaints with general approach and scenarios.</p>
        <Link to="/presenting">Go to Complaints</Link>
      </section>

      <section className="home-section">
        <h2>Condition Follow-up</h2>
        <p>Master common chronic conditions with clear structure and follow-up plans.</p>
        <Link to="/condition">Go to Conditions</Link>
      </section>

      <section className="home-section">
        <h2>Diagnostic Cases</h2>
        <p>Practice unseen cases that require clinical reasoning and diagnosis.</p>
        <Link to="/diagnostic">Go to Diagnostic</Link>
      </section>

      <section className="home-section">
        <h2>Test & Discharge Follow-up</h2>
        <p>Handle results and discharge discussions with empathy and clarity.</p>
        <div className="link-group">
          <Link to="/test">View Tests</Link>
          <Link to="/discharge">View Discharges</Link>
        </div>
      </section>

      <section className="home-section">
        <h2>Ethics, Counseling, Practicals</h2>
        <p>Solidify your approach to ethical dilemmas, counseling, and practicals.</p>
        <div className="link-group">
          <Link to="/ethics">Ethics</Link>
          <Link to="/counseling">Counseling</Link>
          <Link to="/practicals">Practicals</Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>Built with ❤️ by a fellow PLAB 2 candidate</p>
      </footer>
    </div>
  );
}

export default Home;



