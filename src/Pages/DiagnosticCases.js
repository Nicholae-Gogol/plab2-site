// Pages/DiagnosticCases.js
import React from "react";
import DiagnosticGrid from "../components/DiagnosticCases/DiagnosticGrid";

function DiagnosticCases() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Diagnostic Cases</h2>
      <p>Explore clinical reasoning and diagnosis-focused OSCE cases.</p>
      <DiagnosticGrid />
    </div>
  );
}

export default DiagnosticCases;
