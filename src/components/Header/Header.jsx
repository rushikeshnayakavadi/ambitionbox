import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ loggedIn, logout }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    jobManagement: false,
    careerGrowth: false,
    learning: false,
    communicationTools: false,
    employerInsights: false,
    additionalTools: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://www.managejob.com/images/icons/web-logo.png"
            alt="Manage Job Logo"
            className="logo"
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/company-reviews">Company Reviews</Link></li>

          {/* Salary Insights Dropdown */}
          <li><Link to="/salary-insights">Salary Insights</Link></li>

          <li><Link to="/interview-preparation">Interview Preparation</Link></li>

          {/* Employer Insights Dropdown */}
          <li className="dropdown">
            <button
              onClick={() => toggleDropdown("employerInsights")}
              className="dropbtn"
            >
              Employer Insights
            </button>
            {dropdownOpen.employerInsights && (
              <ul className="dropdown-menu">
                <li><Link to="/employer-insights">Employer Insights</Link></li>
                <li><Link to="/recruitment-campaigns">Recruitment Campaigns</Link></li>
              </ul>
            )}
          </li>

          {/* Job Management Dropdown */}
          <li className="dropdown">
            <button
              onClick={() => toggleDropdown("jobManagement")}
              className="dropbtn"
            >
              Job Management
            </button>
            {dropdownOpen.jobManagement && (
              <ul className="dropdown-menu">
                <li><Link to="/job-posting-management">Job Posting Management</Link></li>
                <li><Link to="/ats-management">ATS Management</Link></li>
              </ul>
            )}
          </li>

          {/* Career Growth Dropdown */}
          <li className="dropdown">
            <button
              onClick={() => toggleDropdown("careerGrowth")}
              className="dropbtn"
            >
              Career Growth
            </button>
            {dropdownOpen.careerGrowth && (
              <ul className="dropdown-menu">
                <li><Link to="/career-growth-resources">Career Growth Resources</Link></li>
                <li><Link to="/fresher-job-listings">Fresher Job Listings</Link></li>
                <li><Link to="/support-and-accessibility">Support & Accessibility</Link></li>
              </ul>
            )}
          </li>

          {/* Learning and Development Dropdown */}
          <li className="dropdown">
            <button
              onClick={() => toggleDropdown("learning")}
              className="dropbtn"
            >
              Learning and Development
            </button>
            {dropdownOpen.learning && (
              <ul className="dropdown-menu">
                <li><Link to="/learning-development">Learning and Development</Link></li>
              </ul>
            )}
          </li>

          {/* Communication Tools Dropdown */}
          <li className="dropdown">
            <button
              onClick={() => toggleDropdown("communicationTools")}
              className="dropbtn"
            >
              Communication Tools
            </button>
            {dropdownOpen.communicationTools && (
              <ul className="dropdown-menu">
                <li><Link to="/communication-tools">Communication Tools</Link></li>
              </ul>
            )}
          </li>

          {/* Additional Tools Dropdown */}
          <li className="dropdown">
            <button
              onClick={() => toggleDropdown("additionalTools")}
              className="dropbtn"
            >
              Additional Tools
            </button>
            {dropdownOpen.additionalTools && (
              <ul className="dropdown-menu">
                <li><Link to="/analytics-dashboard">Analytics Dashboard</Link></li>
                <li><Link to="/community">Community</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className="auth">
        {loggedIn ? (
          <>
            <li><Link to="/profile-customization" className="profile-link">Profile</Link></li>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <button onClick={() => window.location.href = "/login"} className="login-btn">Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;
