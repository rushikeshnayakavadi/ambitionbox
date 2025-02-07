import React, { useState } from "react";
import "./ResumeDatabaseAccess.css";

const ResumeDatabaseAccess = () => {
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [bookmarkedResumes, setBookmarkedResumes] = useState([]);
  const [savedSearches, setSavedSearches] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResults = [
      {
        name: "John Doe",
        location: "New York",
        experience: "5 years",
        skills: "React, Node.js",
      },
      {
        name: "Jane Smith",
        location: "San Francisco",
        experience: "3 years",
        skills: "Python, Data Analysis",
      },
    ];
    setResults(searchResults);
  };

  const saveSearch = () => {
    const searchCriteria = { location, experience, skills };
    setSavedSearches([...savedSearches, searchCriteria]);
    setLocation("");
    setExperience("");
    setSkills("");
  };

  const bookmarkResume = (resume) => {
    if (!bookmarkedResumes.includes(resume)) {
      setBookmarkedResumes([...bookmarkedResumes, resume]);
    }
  };

  return (
    <div className="resume-database-access">
      <h2 className="title">Resume Database Access</h2>

      {/* Search Form */}
      <form className="search-form" onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience (Years)</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter experience in years"
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter skills (e.g., React, Python)"
          />
        </div>

        <button type="submit" className="search-btn">
          Search
        </button>
        <button type="button" onClick={saveSearch} className="save-btn">
          Save Search
        </button>
      </form>

      {/* Search Results */}
      <div className="results-section">
        <h3 className="section-title">Search Results</h3>
        {results.length > 0 ? (
          results.map((resume, index) => (
            <div key={index} className="resume-card">
              <h4>{resume.name}</h4>
              <p><strong>Location:</strong> {resume.location}</p>
              <p><strong>Experience:</strong> {resume.experience}</p>
              <p><strong>Skills:</strong> {resume.skills}</p>
              <button onClick={() => bookmarkResume(resume)} className="bookmark-btn">
                Bookmark
              </button>
            </div>
          ))
        ) : (
          <p>No results found. Try searching with different filters.</p>
        )}
      </div>

      {/* Saved Searches */}
      <div className="saved-section">
        <h3 className="section-title">Saved Searches</h3>
        {savedSearches.length > 0 ? (
          savedSearches.map((search, index) => (
            <div key={index} className="saved-search">
              <p>
                <strong>Location:</strong> {search.location} |{" "}
                <strong>Experience:</strong> {search.experience} |{" "}
                <strong>Skills:</strong> {search.skills}
              </p>
            </div>
          ))
        ) : (
          <p>No saved searches.</p>
        )}
      </div>

      {/* Bookmarked Resumes */}
      <div className="bookmarked-section">
        <h3 className="section-title">Bookmarked Resumes</h3>
        {bookmarkedResumes.length > 0 ? (
          bookmarkedResumes.map((resume, index) => (
            <div key={index} className="bookmarked-card">
              <h4>{resume.name}</h4>
              <p><strong>Location:</strong> {resume.location}</p>
              <p><strong>Experience:</strong> {resume.experience}</p>
              <p><strong>Skills:</strong> {resume.skills}</p>
            </div>
          ))
        ) : (
          <p>No resumes bookmarked yet.</p>
        )}
      </div>
    </div>
  );
};

export default ResumeDatabaseAccess;
