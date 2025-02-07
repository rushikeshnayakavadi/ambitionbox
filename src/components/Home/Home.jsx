// src/components/Home/Home.jsx
import React, { useState } from "react";
import "./Home.css"; // Add your Home CSS file here
import "../Testimonials/Testimonials.css"; // Correct path to Testimonials.css
import { Testimonials } from "../Testimonials/Testimonials"; // Import Testimonials component
import JobAlerts from "../JobAlerts/JobAlerts"; // Import JobAlerts component

const Home = () => {
  const [testimonials] = useState([ // Static testimonials list
    {
      name: "John Doe",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      feedback: "This platform has been amazing for finding the right opportunities. Highly recommended!",
    },
    {
      name: "Jane Smith",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      feedback: "The user experience is seamless, and I've had great success using it for hiring.",
    },
    {
      name: "Michael Lee",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      feedback: "A game-changer in connecting employers and employees. Love the simplicity and effectiveness.",
    },
  ]);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to ManageJobs</h1>
        <p>Your one-stop destination for company reviews, salary insights, and more!</p>
      </header>

      <section className="hero-image-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Explore our features</h2>
            <p>
              At AmbitionBox, we offer detailed insights on salaries, interviews, company reviews, and much more.
              Find the information you need to make informed career decisions.
            </p>
          </div>
          <div className="hero-image-container">
            <img
              src="https://static.ambitionbox.com/static/homepage/hero-image.png"
              alt="AmbitionBox Hero"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Job Alerts Section */}
      <JobAlerts /> {/* Added JobAlerts component */}

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} /> {/* Pass static testimonials data to Testimonials component */}
    </div>
  );
};

export default Home;
