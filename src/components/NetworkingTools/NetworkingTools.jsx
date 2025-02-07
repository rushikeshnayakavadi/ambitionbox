import React, { useState } from "react";
import "./NetworkingTools.css";

const NetworkingTools = () => {
  const [recommendation, setRecommendation] = useState("");
  const [message, setMessage] = useState("");
  const [followingCompanies, setFollowingCompanies] = useState([]);

  const companies = [
    { id: 1, name: "Google", reviews: "★★★★★", jobs: "10 New Openings" },
    { id: 2, name: "Microsoft", reviews: "★★★★☆", jobs: "8 New Openings" },
    { id: 3, name: "Amazon", reviews: "★★★★☆", jobs: "12 New Openings" },
  ];

  const jobSeekers = ["Alice Johnson", "Bob Smith", "Charlie Davis"];
  const industryGroups = ["AI Enthusiasts", "Software Engineers", "Marketing Professionals"];
  const events = ["Tech Virtual Job Fair", "Data Science Webinar", "Cybersecurity Summit"];

  const followCompany = (company) => {
    setFollowingCompanies([...followingCompanies, company]);
  };

  return (
    <div className="networking-tools">
      <h2>Networking Tools</h2>

      {/* View Company Profiles & Follow */}
      <div className="company-section">
        <h3>Companies</h3>
        {companies.map((company) => (
          <div key={company.id} className="company-card">
            <h4>{company.name}</h4>
            <p>Reviews: {company.reviews}</p>
            <p>{company.jobs}</p>
            <button onClick={() => followCompany(company.name)}>
              {followingCompanies.includes(company.name) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      {/* Request Recommendations */}
      <div className="recommendation-section">
        <h3>Request a Recommendation</h3>
        <textarea
          placeholder="Write your recommendation request..."
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
        />
        <button>Send Request</button>
      </div>

      {/* Connect with Job Seekers */}
      <div className="connections-section">
        <h3>Connect with Job Seekers</h3>
        {jobSeekers.map((seeker, index) => (
          <p key={index}>{seeker} <button>Connect</button></p>
        ))}
      </div>

      {/* Send In-mail to Recruiters */}
      <div className="message-section">
        <h3>Send In-Mail to Recruiters</h3>
        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send Message</button>
      </div>

      {/* Join Industry Groups */}
      <div className="groups-section">
        <h3>Join Industry Groups</h3>
        {industryGroups.map((group, index) => (
          <p key={index}>{group} <button>Join</button></p>
        ))}
      </div>

      {/* Attend Virtual Events */}
      <div className="events-section">
        <h3>Upcoming Events</h3>
        {events.map((event, index) => (
          <p key={index}>{event} <button>Register</button></p>
        ))}
      </div>
    </div>
  );
};

export default NetworkingTools;
