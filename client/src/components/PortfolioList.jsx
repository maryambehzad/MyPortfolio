import React, { useEffect, useState } from 'react';

export default function PortfolioList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/portfolios')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching portfolio items:", err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>My Portfolio Projects (from MongoDB)</h2>
      {projects.length === 0 ? (
        <p>No projects found in the database yet!</p>
      ) : (
        <ul>
          {projects.map((proj) => (
            <li key={proj._id} style={{ marginBottom: '10px' }}>
              <strong>{proj.title}</strong> - {proj.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}