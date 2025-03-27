import React, { useState } from "react";
import "./PresentingComplaintCard.css";

function PresentingComplaintCard({ title, approach, scenarios }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="complaint-card">
      <div className="complaint-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="complaint-details">
          <p><strong>Approach:</strong> {approach}</p>
          <ul>
            {scenarios.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PresentingComplaintCard;
