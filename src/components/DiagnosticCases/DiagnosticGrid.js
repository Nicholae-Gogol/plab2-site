// components/DiagnosticCases/DiagnosticGrid.js
import React from "react";
import { Link } from "react-router-dom";
import diagnosticData from "./diagnosticData";

function DiagnosticGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      {diagnosticData.map((topic) => (
        <Link
          key={topic.id}
          to={`/diagnostic/${topic.id}`}
          style={{
            background: "#f0f4ff",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
            textDecoration: "none",
            color: "#333",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {topic.name}
        </Link>
      ))}
    </div>
  );
}

export default DiagnosticGrid;
