// FresherJobListings.jsx
import React from "react";
import "./FresherJobListings.css"; // Import the CSS for styling

const FresherJobListings = () => {
  // Sample job listings for freshers (static data for now)
  const jobs = [
    {
      title: "Software Engineer (Fresher)",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      description: "A great opportunity for freshers to kickstart their career in software development.",
    },
    {
      title: "Junior Marketing Executive",
      company: "Creative Hub",
      location: "Los Angeles, CA",
      description: "Looking for fresh graduates to join our marketing team.",
    },
    {
      title: "Fresher Data Analyst",
      company: "Data Trends Ltd.",
      location: "San Francisco, CA",
      description: "A data analyst role ideal for recent graduates with an interest in data analysis.",
    },
  ];

  // Sample internship opportunities (static data for now)
  const internships = [
    {
      title: "Software Development Intern",
      company: "Innovative Tech Ltd.",
      location: "Remote",
      description: "Join our software development team and gain hands-on experience while working on cutting-edge projects.",
    },
    {
      title: "Marketing Intern",
      company: "Creative Minds",
      location: "San Francisco, CA",
      description: "We are looking for creative interns to assist our marketing team with digital campaigns and strategies.",
    },
    {
      title: "Data Science Intern",
      company: "Data Insights Corp.",
      location: "New York, NY",
      description: "Work alongside experienced data scientists to analyze data and build predictive models during your internship.",
    },
  ];

  return (
    <div className="fresher-job-listings">
      <h1>Fresher Job Listings</h1>
      <p>Here are some great job opportunities for freshers! These positions are ideal for recent graduates or those just starting their careers.</p>

      <div className="job-list">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>

      {/* Internship Opportunities Section */}
      <h1>Internship Opportunities</h1>
      <p>Kickstart your career with these amazing internship opportunities. Gain valuable work experience while working with top companies.</p>

      <div className="internship-list">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <h2>{internship.title}</h2>
            <p><strong>Company:</strong> {internship.company}</p>
            <p><strong>Location:</strong> {internship.location}</p>
            <p>{internship.description}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FresherJobListings;
