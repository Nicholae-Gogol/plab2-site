import React from 'react';
import { useParams } from 'react-router-dom';
import topicsData from './diagnosticData'; // Ensure correct path

function TopicPage() {
  const { topicId } = useParams();

  // Retrieve topic details from topicsData array
  const topic = topicsData.find((t) => t.id === topicId);

  if (!topic) {
    return <div style={{ padding: "2rem" }}>Topic not found.</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "1rem", textTransform: "capitalize" }}>
        {topic.name}
      </h2>

      <h3 style={{ marginTop: "1rem" }}>General Approach:</h3>
      <p>{topic.approach}</p>

      {topic.scenarios && topic.scenarios.length > 0 ? (
        <>
          <h3 style={{ marginTop: "1rem" }}>Scenarios:</h3>
          <ul>
            {topic.scenarios.map((scenario, idx) => (
              <li key={idx}>{scenario}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No scenarios available.</p>
      )}
    </div>
  );
}

export default TopicPage;

