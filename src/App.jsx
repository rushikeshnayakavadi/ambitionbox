import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CompanyReviews from "./components/CompanyReviews/CompanyReviews";
import SalaryInsights from "./components/SalaryInsights/SalaryInsights";
import InterviewPreparation from "./components/InterviewPreparation/InterviewPreparation";
import EmployerInsights from "./components/EmployerInsights/EmployerInsights";
import CareerGrowthResources from "./components/CareerGrowthResources/CareerGrowthResources";
import LearningDevelopment from "./components/LearningDevelopment/LearningDevelopment";
import FresherJobListings from "./components/FresherJobListings/FresherJobListings";
import SupportAndAccessibility from "./components/SupportAndAccessibility/SupportAndAccessibility";
import RecruitmentCampaigns2 from "./components/RecruitmentCampaigns2/RecruitmentCampaigns2";
import AnalyticsDashboard from "./components/AnalyticsDashboard/AnalyticsDashboard";
import Community from "./components/Community/Community";
import Login from "./components/Login/Login";
import JobPostingManagement from "./components/JobPostingManagement/JobPostingManagement";
import ATSManagement from "./components/ATSManagement/ATSManagement";
import ProfileCustomization from "./components/ProfileCustomization/ProfileCustomization";
import CommunicationTools from "./components/CommunicationTools/CommunicationTools";
import NetworkingTools from "./components/NetworkingTools/NetworkingTools";  // ✅ Imported Networking Tools

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Referral and Opportunities",
      company: "works at Accenture",
      content: "I can refer to ACCENTURE, please like and DM with your skill set. Thanks.",
      likes: 1486,
      comments: 1056,
      liked: false,
    },
  ]);
  const [newPost, setNewPost] = useState("");

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  const handlePostSubmit = () => {
    if (newPost.trim() === "") return;

    const newPostData = {
      id: Date.now(),
      author: "You",
      company: "Logged-in User",
      content: newPost,
      likes: 0,
      comments: 0,
      liked: false,
    };

    setPosts([newPostData, ...posts]);
    setNewPost("");
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1, liked: true } : post
      )
    );
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <div>
        <Header loggedIn={loggedIn} logout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-reviews" element={<CompanyReviews />} />
          <Route path="/salary-insights" element={<SalaryInsights />} />
          <Route path="/interview-preparation" element={<InterviewPreparation />} />
          <Route path="/employer-insights" element={<EmployerInsights />} />
          <Route path="/career-growth-resources" element={<CareerGrowthResources />} />
          <Route path="/fresher-job-listings" element={<FresherJobListings />} />
          <Route path="/support-and-accessibility" element={<SupportAndAccessibility />} />
          <Route path="/recruitment-campaigns" element={<RecruitmentCampaigns2 />} />
          <Route path="/learning-development" element={<LearningDevelopment />} />
          <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
          <Route 
            path="/community" 
            element={
              <Community
                posts={posts}
                setNewPost={setNewPost}
                handlePostSubmit={handlePostSubmit}
                newPost={newPost}
                handleLike={handleLike}
                handleDelete={handleDelete}
              />
            } 
          />
          <Route path="/job-posting-management" element={<JobPostingManagement />} />
          <Route path="/ats-management" element={<ATSManagement />} />
          <Route path="/profile-customization" element={<ProfileCustomization />} />
          <Route path="/login" element={<Login login={handleLogin} />} />
          <Route path="/communication-tools" element={<CommunicationTools />} />
          <Route path="/networking-tools" element={<NetworkingTools />} />  {/* ✅ Added Networking Tools Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
