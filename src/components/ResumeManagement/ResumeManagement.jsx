// src/components/ResumeManagement/ResumeManagement.jsx
import React, { useState } from "react";
import "./ResumeManagement.css";

const ResumeManagement = () => {
  const [resumes, setResumes] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumes([...resumes, file]);
      setSelectedFile(null);
    }
  };

  const handleFileDownload = (file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
  };

  return (
    <div className="resume-management">
      <h1>Resume Management</h1>
      <p>Create, upload, and download resumes easily.</p>
      
      <div className="upload-section">
        <label htmlFor="resume-upload" className="upload-label">
          Upload Resume:
        </label>
        <input
          type="file"
          id="resume-upload"
          onChange={handleFileUpload}
          accept=".pdf, .doc, .docx"
        />
      </div>

      <div className="resumes-list">
        <h2>Your Uploaded Resumes</h2>
        {resumes.length === 0 ? (
          <p>No resumes uploaded yet.</p>
        ) : (
          <ul>
            {resumes.map((resume, index) => (
              <li key={index}>
                <span>{resume.name}</span>
                <button
                  className="download-btn"
                  onClick={() => handleFileDownload(resume)}
                >
                  Download
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResumeManagement;
