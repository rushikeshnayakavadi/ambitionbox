import React, { useState } from 'react';
import './RecruitmentCampaigns.css';  

const RecruitmentCampaigns = () => {
  const [activeTab, setActiveTab] = useState('bulkHiring');  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="recruitment-campaign-container">
      <h1>Recruitment Campaigns</h1>
      <p className="intro-text">
        Recruitment campaigns help employers reach the right candidates with targeted job postings. 
        Our platform allows you to manage and track recruitment campaigns, ensuring that your hiring process is efficient and impactful.
      </p>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'bulkHiring' ? 'active' : ''}`}
          onClick={() => handleTabClick('bulkHiring')}
        >
          Bulk Hiring Campaigns
        </button>
        <button
          className={`tab-button ${activeTab === 'walkInDrive' ? 'active' : ''}`}
          onClick={() => handleTabClick('walkInDrive')}
        >
          Walk-in Drive Management
        </button>
      </div>

      {/* Active Content Display */}
      <div className="content-container">
        {activeTab === 'bulkHiring' ? (
          <div className="content-card fade-in">
            <h2>Bulk Hiring Campaigns</h2>
            <p>Manage large-scale recruitment drives, track candidates, and organize campaigns effectively.</p>
            <div className="features">
              <div className="feature-card">
                <h3>🎯 Targeted Job Listings</h3>
                <p>Customize job postings for specific roles to attract the right talent.</p>
              </div>
              <div className="feature-card">
                <h3>📢 Multi-Platform Outreach</h3>
                <p>Share job postings across multiple platforms to maximize reach.</p>
              </div>
              <div className="feature-card">
                <h3>📊 Real-Time Analytics</h3>
                <p>Track campaign effectiveness and optimize recruitment strategies.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="content-card fade-in">
            <h2>Walk-in Drive Management</h2>
            <p>Track registrations, manage events, and monitor walk-in drives seamlessly.</p>
            <div className="features">
              <div className="feature-card">
                <h3>📍 Location-Based Drives</h3>
                <p>Organize and track walk-in events across multiple locations.</p>
              </div>
              <div className="feature-card">
                <h3>📆 Seamless Scheduling</h3>
                <p>Automate candidate scheduling and manage interviews efficiently.</p>
              </div>
              <div className="feature-card">
                <h3>✅ Instant Candidate Feedback</h3>
                <p>Receive real-time candidate responses and streamline hiring.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruitmentCampaigns;
