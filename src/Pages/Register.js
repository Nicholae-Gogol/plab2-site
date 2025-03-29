// src/Pages/Register.js

import React, { useState } from "react";
import "./Register.css"; // We'll create this CSS file in a moment

const Register = () => {
  // Local state for input handling (optional, but useful)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreed: false,
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handler to simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register form data:", formData);
    // here you could call an API or do some validation
  };

  return (
    <div className="register-container">
      {/* Left section: background, welcome text, brand, or illustration */}
      <div className="register-left">
        {/* You can replace this with a background image or illustration */}
        <h1>Welcome Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec pharetra lacus lectus, faucibus ultrices nibh bibendum non.
        </p>
        <div className="social-connect">
          <span>Get Connected With</span>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
      </div>

      {/* Right section: form */}
      <div className="register-right">
        <div className="form-wrapper">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <label htmlFor="terms">
                I agree to all the statements in <a href="#terms">Terms of Service</a>
              </label>
            </div>

            <button type="submit" className="btn-signup">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
