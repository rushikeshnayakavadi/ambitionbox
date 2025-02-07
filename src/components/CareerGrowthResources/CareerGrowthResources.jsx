import React from "react";
import "./CareerGrowthResources.css";

const CareerGrowthResources = () => {
  return (
    <div className="career-growth-resources">
      <h2>Career Growth Resources</h2>
      <p>Explore resources and insights that can help you advance your career and stay updated with workplace trends.</p>

      {/* Career Tips Section */}
      <div className="resource-card">
        <h3>Career Tips and Advice</h3>
        <p>
          Explore articles on effective resume building, interview preparation, and professional networking.  
          Check out expert tips on{" "}
          <a href="https://www.indeed.com/career-advice" target="_blank" rel="noopener noreferrer">
            Indeed Career Advice
          </a>.
        </p>
        <div className="article-snippet">
          <h4>Featured Article: "How to Write a Winning Resume"</h4>
          <p>
            Your resume is your first impression—make it count! Learn the best formatting, keyword optimization, and storytelling techniques to stand out. 
            <a href="https://hbr.org/2023/05/how-to-make-your-resume-stand-out" target="_blank" rel="noopener noreferrer">
              Read more on HBR
            </a>.
          </p>
        </div>
      </div>

      {/* Work-Life Balance Section */}
      <div className="resource-card">
        <h3>Guides for Work-Life Balance</h3>
        <p>
          Learn strategies to achieve a healthy balance between your personal and professional life.  
          Read insights from{" "}
          <a href="https://www.forbes.com/work-life-balance/" target="_blank" rel="noopener noreferrer">
            Forbes Work-Life Balance
          </a>.
        </p>
        <div className="article-snippet">
          <h4>Featured Article: "The New Rules of Work-Life Balance"</h4>
          <p>
            The way we work has changed—so should the way we manage stress. Discover the latest techniques for maintaining productivity while avoiding burnout.
            <a href="https://www.forbes.com/sites/work-in-progress/2024/01/10/the-new-rules-of-work-life-balance" target="_blank" rel="noopener noreferrer">
              Read more on Forbes
            </a>.
          </p>
        </div>
      </div>

      {/* High-Growth Roles Section */}
      <div className="resource-card">
        <h3>High-Growth Roles and Skills</h3>
        <p>
          Insights into roles like Data Scientist, Cloud Engineer, and AI Specialist, and the skills needed to excel.  
          Learn more from{" "}
          <a href="https://www.coursera.org/articles/high-demand-jobs" target="_blank" rel="noopener noreferrer">
            Coursera Career Trends
          </a>.
        </p>
        <div className="article-snippet">
          <h4>Featured Article: "Top 10 Fastest Growing Careers in 2024"</h4>
          <p>
            The job market is evolving rapidly. Find out which careers are in high demand and what skills can set you apart. 
            <a href="https://www.cnbc.com/2024/01/15/top-growing-jobs-of-the-future.html" target="_blank" rel="noopener noreferrer">
              Read more on CNBC
            </a>.
          </p>
        </div>
      </div>

      {/* Career Path Exploration Section */}
      <div className="resource-card">
        <h3>Career Path Exploration</h3>
        <p>
          Interactive tools to explore different career paths based on your skills, interests, and goals.  
          Use the{" "}
          <a href="https://www.mynextmove.org/" target="_blank" rel="noopener noreferrer">
            My Next Move
          </a>{" "}
          tool for career insights.
        </p>
        <div className="article-snippet">
          <h4>Featured Article: "Choosing the Right Career Path in a Changing World"</h4>
          <p>
            How do you align your career with your strengths and passions? This guide provides insights into navigating career choices in today's dynamic job market.
            <a href="https://www.businessinsider.com/career-path-guide-2024" target="_blank" rel="noopener noreferrer">
              Read more on Business Insider
            </a>.
          </p>
        </div>
      </div>

      {/* Blogs on Workplace Trends */}
      <div className="resource-card">
        <h3>Workplace Trends and Blogs</h3>
        <p>
          Read blogs on remote work trends, evolving office culture, and the future of work.  
          Stay updated with{" "}
          <a href="https://hbr.org/topic/workplace" target="_blank" rel="noopener noreferrer">
            Harvard Business Review Workplace Trends
          </a>.
        </p>
        <div className="article-snippet">
          <h4>Featured Article: "The Future of Work in 2025 and Beyond"</h4>
          <p>
            Hybrid work, AI, and gig economies are shaping the workplace of tomorrow. Stay ahead of the curve with expert insights. 
            <a href="https://www.hbr.org/2024/01/the-future-of-work-2025" target="_blank" rel="noopener noreferrer">
              Read more on HBR
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerGrowthResources;
