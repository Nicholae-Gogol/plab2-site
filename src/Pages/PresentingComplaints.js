import React from "react";

function PresentingComplaints() {
  const complaints = [
    "Chest Pain",
    "Shortness of Breath",
    "Abdominal Pain",
    "Headache",
    "Dizziness",
    "Back Pain",
    "Fever",
    "Palpitations",
    "Vomiting",
    "Fatigue"
  ];

  return (
    <div>
      <h2>Presenting Complaints</h2>
      <p>Cases focused on initial patient symptoms and history-taking.</p>
      <ul>
        {complaints.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PresentingComplaints;



