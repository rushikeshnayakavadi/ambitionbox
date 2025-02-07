import React, { useState } from "react";
import "./JobPostingManagement.css";

const JobPostingManagement = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [logo, setLogo] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [category, setCategory] = useState("");
  const [functionArea, setFunctionArea] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [highlight, setHighlight] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [customFields, setCustomFields] = useState([]);
  const [newField, setNewField] = useState({ label: "", type: "", required: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      jobTitle,
      logo,
      jobDescription,
      category,
      functionArea,
      experienceLevel,
      highlight,
      customFields
    };
    setJobPosts([...jobPosts, newJob]);
    resetForm();
  };

  const handleFieldSubmit = (e) => {
    e.preventDefault();
    setCustomFields([...customFields, newField]);
    setNewField({ label: "", type: "", required: false });
  };

  const resetForm = () => {
    setJobTitle("");
    setLogo(null);
    setJobDescription("");
    setCategory("");
    setFunctionArea("");
    setExperienceLevel("");
    setHighlight(false);
    setCustomFields([]);
  };

  return (
    <div className="job-posting-management">
      <h2 className="title">Job Posting & Management</h2>

      {/* Job Posting Form */}
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title (e.g., Software Engineer)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="logo">Company Logo</label>
          <input
            type="file"
            id="logo"
            onChange={(e) => setLogo(e.target.files[0])}
            accept="image/*"
          />
        </div>

        <div className="form-group">
          <label htmlFor="job-description">Job Description</label>
          <textarea
            id="job-description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter job description"
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Retail">Retail</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="function-area">Function Area</label>
          <select
            id="function-area"
            value={functionArea}
            onChange={(e) => setFunctionArea(e.target.value)}
            required
          >
            <option value="">Select Function Area</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experience-level">Experience Level</label>
          <select
            id="experience-level"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="Entry">Entry Level</option>
            <option value="Mid">Mid Level</option>
            <option value="Senior">Senior Level</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={highlight}
              onChange={(e) => setHighlight(e.target.checked)}
            />
            Highlight this job post
          </label>
        </div>

        {/* Display Custom Fields in the Main Form */}
        {customFields.map((field, index) => (
          <div key={index} className="form-group">
            <label>{field.label}</label>
            {field.type === "text" && (
              <input
                type="text"
                placeholder={`Enter ${field.label}`}
                required={field.required}
              />
            )}
            {field.type === "email" && (
              <input
                type="email"
                placeholder={`Enter ${field.label}`}
                required={field.required}
              />
            )}
            {field.type === "number" && (
              <input
                type="number"
                placeholder={`Enter ${field.label}`}
                required={field.required}
              />
            )}
          </div>
        ))}

        {/* Custom Fields Form */}
        <div className="custom-field-form">
          <h3>Customize Application Form</h3>
          <div className="form-group">
            <label htmlFor="custom-field-label">Field Label</label>
            <input
              type="text"
              id="custom-field-label"
              value={newField.label}
              onChange={(e) => setNewField({ ...newField, label: e.target.value })}
              placeholder="Enter field label"
            />
          </div>

          <div className="form-group">
            <label htmlFor="custom-field-type">Field Type</label>
            <select
              id="custom-field-type"
              value={newField.type}
              onChange={(e) => setNewField({ ...newField, type: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="number">Number</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={newField.required}
                onChange={(e) => setNewField({ ...newField, required: e.target.checked })}
              />
              Required Field
            </label>
          </div>

          <button type="submit" onClick={handleFieldSubmit} className="submit-btn">
            Add Custom Field
          </button>
        </div>

        <button type="submit" className="submit-btn">
          Post Job
        </button>
      </form>

      {/* Displaying Job Posts */}
      <div className="job-list">
        <h3 className="job-list-title">Job Postings</h3>
        {jobPosts.length > 0 ? (
          jobPosts.map((job, index) => (
            <div key={index} className={`job-card ${job.highlight ? "highlighted" : ""}`}>
              <h4>{job.jobTitle}</h4>
              <p>{job.jobDescription}</p>
              <p><strong>Category:</strong> {job.category}</p>
              <p><strong>Function Area:</strong> {job.functionArea}</p>
              <p><strong>Experience Level:</strong> {job.experienceLevel}</p>
              <p><strong>Custom Fields:</strong></p>
              <ul>
                {job.customFields.map((field, idx) => (
                  <li key={idx}>
                    {field.label} ({field.type}) - {field.required ? "Required" : "Optional"}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No job postings available. Start adding now!</p>
        )}
      </div>
    </div>
  );
};

export default JobPostingManagement;
