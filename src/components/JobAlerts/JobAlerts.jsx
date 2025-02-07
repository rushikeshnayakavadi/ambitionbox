// src/components/JobAlerts/JobAlerts.jsx
import React, { useState, useEffect } from "react";
import "./JobAlerts.css";

const JobAlerts = () => {
  const [alerts, setAlerts] = useState([
    {
      jobTitle: "Software Engineer",
      company: "TechCorp",
      deadline: "2025-02-15",
      applied: false,
    },
    {
      jobTitle: "Data Analyst",
      company: "DataSys",
      deadline: "2025-02-20",
      applied: false,
    },
  ]);

  const checkDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate - today <= 3 * 24 * 60 * 60 * 1000; // 3 days before the deadline
  };

  useEffect(() => {
    // Mark deadlines that are within 3 days of today
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) => ({
        ...alert,
        isDeadlineApproaching: checkDeadline(alert.deadline),
      }))
    );
  }, []);

  return (
    <div className="job-alerts">
      <h3>Job Application Deadlines</h3>
      {alerts.length === 0 ? (
        <p>No upcoming deadlines</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li
              key={index}
              className={alert.isDeadlineApproaching ? "alert-approaching" : ""}
            >
              <strong>{alert.jobTitle}</strong> at {alert.company} - Deadline:{" "}
              {alert.deadline}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobAlerts;
