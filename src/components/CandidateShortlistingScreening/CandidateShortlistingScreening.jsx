import React, { useState } from "react";
import "./CandidateShortlistingScreening.css";

const CandidateShortlistingScreening = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "John Doe", labels: [] },
    { id: 2, name: "Jane Smith", labels: [] },
    { id: 3, name: "Michael Johnson", labels: [] },
  ]);
  const [newLabel, setNewLabel] = useState("");

  const addLabel = (id) => {
    if (newLabel.trim() === "") return;
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, labels: [...candidate.labels, newLabel] }
          : candidate
      )
    );
    setNewLabel("");
  };

  const removeLabel = (id, labelToRemove) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? {
              ...candidate,
              labels: candidate.labels.filter((label) => label !== labelToRemove),
            }
          : candidate
      )
    );
  };

  return (
    <div className="candidate-shortlisting">
      <h2>Candidate Shortlisting & Screening</h2>
      <div className="candidate-list">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <h3>{candidate.name}</h3>
            <div className="labels">
              {candidate.labels.map((label, index) => (
                <span key={index} className="label">
                  {label}
                  <button
                    className="remove-btn"
                    onClick={() => removeLabel(candidate.id, label)}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <div className="label-input">
              <input
                type="text"
                placeholder="Add a label"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
              />
              <button onClick={() => addLabel(candidate.id)}>Add Label</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateShortlistingScreening;
