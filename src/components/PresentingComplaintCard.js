import React from "react";
import "./PresentingComplaintCard.css";

function PresentingComplaintCard({ title, approach, scenarios, isOpen, onClick }) {
  return (
    <div className={`complaint-card ${isOpen ? "open" : ""}`}>
      <div className="complaint-header" onClick={onClick}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="complaint-details">
          <p><strong>Approach:</strong> {approach}</p>

          {Array.isArray(scenarios) && scenarios.length > 0 ? (
            typeof scenarios[0] === "string" ? (
              <ul>
                {scenarios.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              // ✅ Grouped regions with links
              scenarios.map((block, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0" }}>{block.region}</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {block.cases.map((caseItem, idx) => (
                      <a
  href={caseItem.link}
  target="_blank"
  rel="noopener noreferrer"
  className="case-chip-link"
>
  {caseItem.name}
</a>

                    ))}
                  </div>
                </div>
              ))
            )
          ) : (
            <p style={{ fontStyle: "italic" }}>No scenarios available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PresentingComplaintCard;

