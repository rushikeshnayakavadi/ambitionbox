import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LearningUpskilling.css";

const LearningUpskilling = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "Web Development Bootcamp", platform: "Udemy", description: "Learn full-stack web development from scratch" },
    { id: 2, title: "Data Science and AI", platform: "Coursera", description: "Master data science and AI concepts" },
    { id: 3, title: "Digital Marketing Certification", platform: "Google", description: "Gain practical skills in digital marketing" },
    { id: 4, title: "Graphic Design Fundamentals", platform: "LinkedIn Learning", description: "Learn the basics of graphic design" },
  ]);

  const [recommendedCourses, setRecommendedCourses] = useState([
    { id: 1, title: "Cloud Computing Essentials", platform: "Pluralsight", description: "Learn the fundamentals of cloud computing" },
    { id: 2, title: "Python for Data Analysis", platform: "DataCamp", description: "Learn Python for data analysis and visualization" },
  ]);

  return (
    <div className="learning-upskilling">
      <h2>Learning & Upskilling</h2>
      
      {/* Access to Online Certification Courses */}
      <div className="courses-section">
        <h3>Access to Online Certification Courses</h3>
        <ul className="courses-list">
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              <h4>{course.title}</h4>
              <p><strong>Platform:</strong> {course.platform}</p>
              <p>{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-link">View Course</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendations for Relevant Courses */}
      <div className="recommendations-section">
        <h3>Recommendations for Relevant Courses</h3>
        <ul className="recommended-courses-list">
          {recommendedCourses.map((course) => (
            <li key={course.id} className="recommended-course-item">
              <h4>{course.title}</h4>
              <p><strong>Platform:</strong> {course.platform}</p>
              <p>{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-link">View Course</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearningUpskilling;
