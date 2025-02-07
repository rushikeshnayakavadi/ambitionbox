import React, { useState } from 'react';
import './RecruitmentCampaigns2.css';

const RecruitmentCampaigns = () => {
  const [activeTab, setActiveTab] = useState('bulkHiring');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="recruitment-campaigns">
      <h1>Recruitment Campaigns</h1>
      <p className="intro-text">
        Streamline your hiring process with specialized recruitment campaigns, including Bulk Hiring and Walk-in Drives.
      </p>

      {/* Tab Navigation */}
      <div className="tab-container">
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

      {/* Content Section */}
      <div className="content-container">
        {activeTab === 'bulkHiring' ? (
          <div className="content-card fade-in">
            <h2>Bulk Hiring Campaigns</h2>
            <p>Organize large-scale recruitment drives efficiently.</p>
            <div className="features">
              <div className="feature-card">
                <h3>🎯 Tailored Job Listings</h3>
                <p>Post customized job listings for specific positions.</p>
              </div>
              <div className="feature-card">
                <h3>📢 Targeted Outreach</h3>
                <p>Leverage various platforms to reach potential candidates.</p>
              </div>
              <div className="feature-card">
                <h3>📊 Real-Time Analytics</h3>
                <p>Track and optimize hiring campaign effectiveness.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="content-card fade-in">
            <h2>Walk-in Drive Management</h2>
            <p>Manage and track walk-in interviews effortlessly.</p>
            <div className="features">
              <div className="feature-card">
                <h3>📍 Event Scheduling</h3>
                <p>Plan, schedule, and automate walk-in drives.</p>
              </div>
              <div className="feature-card">
                <h3>📆 Seamless Registrations</h3>
                <p>Monitor and track candidate registrations in real-time.</p>
              </div>
              <div className="feature-card">
                <h3>✅ Instant Feedback</h3>
                <p>Collect and manage candidate feedback on the spot.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruitmentCampaigns;
