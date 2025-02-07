import React from "react";
import "./EmployerInsights.css";

const EmployerInsights = () => {
  const companies = [
    {
      name: "Company A",
      workLifeBalance: 4.5,
      growthOpportunities: 4,
      ceoApproval: 92,
      industry: "Technology",
      profile:
        "Company A specializes in innovative software solutions and values employee satisfaction.",
    },
    {
      name: "Company B",
      workLifeBalance: 3.8,
      growthOpportunities: 4.3,
      ceoApproval: 89,
      industry: "Finance",
      profile:
        "Company B is a leader in financial services, fostering career development and growth.",
    },
    {
      name: "Company C",
      workLifeBalance: 4.2,
      growthOpportunities: 4.1,
      ceoApproval: 95,
      industry: "Healthcare",
      profile:
        "Company C is dedicated to improving healthcare solutions and nurturing talent.",
    },
  ];

  return (
    <div className="employer-insights">
      <h2>Employer Insights</h2>
      <p>Discover key insights about top employers and their workplace cultures.</p>

      {/* Top Companies List */}
      <div className="top-companies">
        <h3>Best Places to Work</h3>
        <ul>
          {companies.map((company, index) => (
            <li key={index}>{company.name} - Industry: {company.industry}</li>
          ))}
        </ul>
      </div>

      {/* Detailed Company Profiles */}
      {companies.map((company, index) => (
        <div className="insight-card" key={index}>
          <h3>{company.name}</h3>
          <p>
            <strong>Work-life balance:</strong> {company.workLifeBalance}/5
          </p>
          <p>
            <strong>Growth opportunities:</strong> {company.growthOpportunities}/5
          </p>
          <p>
            <strong>CEO Approval Rating:</strong> {company.ceoApproval}%
          </p>
          <p>
            <strong>Company Profile:</strong> {company.profile}
          </p>
        </div>
      ))}

      {/* Industry-Specific Rankings */}
      <div className="industry-rankings">
        <h3>Industry-Specific Employer Rankings</h3>
        <ul>
          <li>Technology: Company A</li>
          <li>Finance: Company B</li>
          <li>Healthcare: Company C</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployerInsights;
