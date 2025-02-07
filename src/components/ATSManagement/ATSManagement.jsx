import React, { useState } from "react";
import "./ATSManagement.css";

const ATSManagement = () => {
  const [applicants, setApplicants] = useState([
    { id: 1, name: "John Doe", status: "Shortlisted", history: ["Applied", "Reviewed", "Shortlisted"] },
    { id: 2, name: "Jane Smith", status: "Rejected", history: ["Applied", "Reviewed", "Rejected"] },
    { id: 3, name: "Mark Johnson", status: "Under Review", history: ["Applied", "Under Review"] },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: newStatus, history: [...applicant.history, newStatus] } : applicant
      )
    );
  };

  return (
    <div className="ats-management">
      <h2>Applicant Tracking System</h2>
      <div className="applicant-list">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="applicant-card">
            <h3>{applicant.name}</h3>
            <p><strong>Status:</strong> {applicant.status}</p>
            <div className="status-update">
              <label htmlFor={`status-${applicant.id}`}>Update Status:</label>
              <select
                id={`status-${applicant.id}`}
                value={applicant.status}
                onChange={(e) => updateStatus(applicant.id, e.target.value)}
              >
                <option value="Applied">Applied</option>
                <option value="Under Review">Under Review</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="application-history">
              <strong>Application History:</strong>
              <ul>
                {applicant.history.map((status, index) => (
                  <li key={index}>{status}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ATSManagement;
