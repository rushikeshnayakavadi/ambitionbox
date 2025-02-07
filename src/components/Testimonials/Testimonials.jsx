import React from "react";
import "./Testimonials.css"; // Styling specific to testimonials

export const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="user-image"
            />
            <div className="testimonial-text">
              <p className="user-feedback">"{testimonial.feedback}"</p>
              <h4 className="user-name">- {testimonial.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
