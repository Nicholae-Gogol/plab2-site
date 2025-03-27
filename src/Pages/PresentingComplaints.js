import React from "react";
import PresentingComplaintCard from "../components/PresentingComplaintCard";

function PresentingComplaints() {
  const complaints = [
    {
      title: "Chest Pain",
      approach: "Take a detailed history of pain, associated symptoms, and rule out cardiac causes.",
      scenarios: ["MI", "Angina", "GERD", "Costochondritis"]
    },
    {
      title: "Shortness of Breath",
      approach: "Check for duration, triggers, associated wheeze or cough, smoking history.",
      scenarios: ["Asthma", "COPD", "Heart Failure", "PE"]
    },
    {
      title: "Headache",
      approach: "Ask about severity, frequency, aura, photophobia, and neck stiffness.",
      scenarios: ["Migraine", "Tension headache", "Cluster headache", "Meningitis"]
    },
    // Add more complaints here as needed...
  ];

  return (
    <div>
      <h2>Presenting Complaints</h2>
      <p>Cases focused on initial patient symptoms and history-taking.</p>
      
      <div className="complaint-grid">
        {complaints.map((item, index) => (
          <PresentingComplaintCard
            key={index}
            title={item.title}
            approach={item.approach}
            scenarios={item.scenarios}
          />
        ))}
      </div>
    </div>
  );
  
}

export default PresentingComplaints;




