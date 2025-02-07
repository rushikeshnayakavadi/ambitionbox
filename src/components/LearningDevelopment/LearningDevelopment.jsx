import React from "react";
import "./LearningDevelopment.css";

const LearningDevelopment = () => {
  return (
    <div className="learning-development">
      <h2>Learning & Development</h2>
      <p>Enhance your skills with learning and development resources.</p>

      {/* Soft Skills Development Card */}
      <div className="learning-card">
        <h3>Soft Skills Development</h3>
        <p>
          Improve your communication, leadership, and interpersonal skills. Access platforms like{" "}
          <a href="https://www.linkedin.com/learning" target="_blank" rel="noopener noreferrer">
            LinkedIn Learning
          </a>{" "}
          and{" "}
          <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">
            Coursera
          </a>{" "}
          for exclusive courses on soft skills.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Y7m9eNoB3NU"
            frameBorder="0"
            allowFullScreen
            title="Soft Skills Development"
          ></iframe>
        </div>
      </div>

      {/* Technical Skills Development Card */}
      <div className="learning-card">
        <h3>Technical Skills Development</h3>
        <p>
          Master technical tools and programming languages for career growth. Platforms like{" "}
          <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">
            Udemy
          </a>
          ,{" "}
          <a href="https://www.pluralsight.com/" target="_blank" rel="noopener noreferrer">
            Pluralsight
          </a>
          , and{" "}
          <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">
            Codecademy
          </a>{" "}
          offer in-depth technical courses.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/htifZ9lOBi0"
            frameBorder="0"
            allowFullScreen
            title="Preparing Students for Success in the Workforce"
          ></iframe>
        </div>
      </div>

      {/* Industry-Specific Career Webinars Card */}
      <div className="learning-card">
        <h3>Industry-Specific Career Webinars</h3>
        <p>
          Attend live webinars and workshops that provide industry-specific insights. Join webinars hosted by leading professionals in your field on platforms like{" "}
          <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer">
            Eventbrite
          </a>{" "}
          and{" "}
          <a href="https://www.webinarcare.com/" target="_blank" rel="noopener noreferrer">
            WebinarCare
          </a>.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/RkvR8Vco2Ls"
            frameBorder="0"
            allowFullScreen
            title="Webinar 7: Career Transitions Within and Across Organizations"
          ></iframe>
        </div>
      </div>

      {/* Personalized Learning Recommendations Card */}
      <div className="learning-card">
        <h3>Personalized Learning Recommendations</h3>
        <p>
          Get personalized learning recommendations based on your career goals. Platforms like{" "}
          <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">
            Coursera
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/learning" target="_blank" rel="noopener noreferrer">
            LinkedIn Learning
          </a>{" "}
          offer tailored suggestions.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/iHDEg-6kEA0"
            frameBorder="0"
            allowFullScreen
            title="Training and Development Competencies"
          ></iframe>
        </div>
      </div>

      {/* Certifications Mapped to Specific Roles Card */}
      <div className="learning-card">
        <h3>Certifications Mapped to Specific Roles</h3>
        <p>
          Earn certifications recognized by industry leaders. For example,{" "}
          <a href="https://grow.google/certificates/" target="_blank" rel="noopener noreferrer">
            Google
          </a>
          ,{" "}
          <a href="https://learn.microsoft.com/en-us/certifications/" target="_blank" rel="noopener noreferrer">
            Microsoft
          </a>
          , and{" "}
          <a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer">
            AWS
          </a>{" "}
          offer role-specific certifications.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/XC4HNLciK88"
            frameBorder="0"
            allowFullScreen
            title="Role-Based Certifications - A Complete List in 2024"
          ></iframe>
        </div>
      </div>

      {/* Skill Enhancement Platforms Card */}
      <div className="learning-card">
        <h3>Skill Enhancement Platforms</h3>
        <p>
          Enhance your skills through platforms like{" "}
          <a href="https://www.skillshare.com/" target="_blank" rel="noopener noreferrer">
            Skillshare
          </a>
          ,{" "}
          <a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer">
            Udacity
          </a>
          , and others, where you can access a wide range of courses from renowned instructors.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/sJjlsts7c7w"
            frameBorder="0"
            allowFullScreen
            title="An Overview of SkillShare"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LearningDevelopment;
