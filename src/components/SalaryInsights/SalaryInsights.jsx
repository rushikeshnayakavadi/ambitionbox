import React, { useState } from "react";
import "./SalaryInsights.css";

const SalaryInsights = () => {
  const [role, setRole] = useState("Software Engineer");
  const [location, setLocation] = useState("New York");
  const [experience, setExperience] = useState("3-5 years");

  const salaryData = {
    "Software Engineer": {
      "New York": { "0-2 years": 80000, "3-5 years": 100000, "6+ years": 130000 },
      "San Francisco": { "0-2 years": 90000, "3-5 years": 110000, "6+ years": 140000 },
    },
    "Data Scientist": {
      "New York": { "0-2 years": 85000, "3-5 years": 105000, "6+ years": 135000 },
      "San Francisco": { "0-2 years": 95000, "3-5 years": 115000, "6+ years": 145000 },
    },
  };

  const handleRoleChange = (e) => setRole(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleExperienceChange = (e) => setExperience(e.target.value);

  const selectedSalary = salaryData[role]?.[location]?.[experience] || "N/A";

  return (
    <div className="salary-insights">
      <h2>Salary Insights and Benchmarking</h2>
      <p>Discover salary trends and compare benchmarks across roles, industries, and locations.</p>

      {/* Filters for role, location, and experience */}
      <div className="filters">
        <select value={role} onChange={handleRoleChange}>
          {Object.keys(salaryData).map((roleOption, index) => (
            <option key={index} value={roleOption}>
              {roleOption}
            </option>
          ))}
        </select>
        <select value={location} onChange={handleLocationChange}>
          {Object.keys(salaryData[role]).map((locationOption, index) => (
            <option key={index} value={locationOption}>
              {locationOption}
            </option>
          ))}
        </select>
        <select value={experience} onChange={handleExperienceChange}>
          {Object.keys(salaryData[role][location]).map((expOption, index) => (
            <option key={index} value={expOption}>
              {expOption}
            </option>
          ))}
        </select>
      </div>

      {/* Salary Visualization */}
      <div className="salary-display">
        <h3>Selected Role: {role}</h3>
        <p>
          Location: {location} | Experience: {experience}
        </p>
        <h4>Median Salary: ${selectedSalary}</h4>
      </div>

      {/* Salary Trends Across Industries */}
      <div className="salary-trends">
        <h3>Salary Trends Across Industries</h3>
        <ul>
          <li>
            <strong>Software Engineer:</strong> Median salary is increasing by 5% annually.
          </li>
          <li>
            <strong>Data Scientist:</strong> Salaries are up 10% in the last two years.
          </li>
          <li>
            <strong>Marketing Manager:</strong> Steady growth with opportunities in digital marketing.
          </li>
        </ul>
      </div>

      {/* Role-wise Salary Comparison */}
      <div className="role-comparison">
        <h3>Role-wise Salary Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>New York</th>
              <th>San Francisco</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(salaryData).map((roleKey, index) => (
              <tr key={index}>
                <td>{roleKey}</td>
                <td>
                  $
                  {salaryData[roleKey]["New York"]["3-5 years"] || "N/A"}
                </td>
                <td>
                  $
                  {salaryData[roleKey]["San Francisco"]["3-5 years"] || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Salary Benchmarking Tools */}
      <div className="benchmarking-tools">
        <h3>Salary Benchmarking Tools</h3>
        <p>
          Use tools like <a href="https://www.payscale.com/">PayScale</a> and <a href="https://www.glassdoor.com/">Glassdoor</a> to explore more detailed salary data.
        </p>
      </div>
    </div>
  );
};

export default SalaryInsights;
