import React, { useState } from "react";
import "./CompanyReviews.css";


const CompanyReviews = () => {
  const [reviews, setReviews] = useState([
    {
      company: "Company A",
      isFeatured: true,  // Featured employer flag
      rating: { overall: 4.2, workLife: 4.5, growth: 4.0, culture: 4.3 },
      review: "Great work-life balance!",
      department: "Engineering",
    },
    {
      company: "Company B",
      isFeatured: false,
      rating: { overall: 4.0, workLife: 4.2, growth: 3.8, culture: 4.1 },
      review: "Amazing growth opportunities.",
      department: "Marketing",
    },
  ]);


  const [newReview, setNewReview] = useState({
    company: "",
    review: "",
    workLife: "",
    growth: "",
    culture: "",
    department: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const overallRating =
      (parseFloat(newReview.workLife) +
        parseFloat(newReview.growth) +
        parseFloat(newReview.culture)) /
      3;
    const reviewData = {
      company: newReview.company,
      logo: newReview.companyLogo || "", // New logo field
      isFeatured: newReview.isFeatured || false, // New featured flag
      rating: {
        overall: overallRating.toFixed(1),
        workLife: parseFloat(newReview.workLife),
        growth: parseFloat(newReview.growth),
        culture: parseFloat(newReview.culture),
      },
      review: newReview.review,
      department: newReview.department,
    };
    setReviews([...reviews, reviewData]);
    setNewReview({
      company: "",
      review: "",
      workLife: "",
      growth: "",
      culture: "",
      department: "",
    });
  };


  return (
    <div className="company-reviews">
      <h2>Company Reviews</h2>
      <p>Read reviews about various companies from real employees.</p>


      {/* Reviews Section */}
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="company-card" key={index}>
            <div className="company-logo">
              {review.logo && <img src={review.logo} alt={`${review.company} logo`} />}
            </div>
            <h3>{review.company}</h3>
            {review.isFeatured && <span className="featured-tag">Featured Employer</span>}
            <p><strong>Overall Rating:</strong> {review.rating.overall}</p>
            <div className="detailed-ratings">
              <p>Work-Life Balance: {review.rating.workLife}</p>
              <p>Growth: {review.rating.growth}</p>
              <p>Culture: {review.rating.culture}</p>
            </div>
            <p><strong>Review:</strong> {review.review}</p>
            <p><strong>Department:</strong> {review.department}</p>
          </div>
        ))}
      </div>


      {/* Comparison Section */}
      <div className="comparisons">
        <h3>Compare Companies</h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Overall Rating</th>
                <th>Work-Life Balance</th>
                <th>Growth</th>
                <th>Culture</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={index}>
                  <td>{review.company}</td>
                  <td>{review.rating.overall}</td>
                  <td>{review.rating.workLife}</td>
                  <td>{review.rating.growth}</td>
                  <td>{review.rating.culture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* Anonymous Review Submission */}
      <div className="review-form">
        <h3>Submit a Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            value={newReview.company}
            onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewReview({ ...newReview, companyLogo: URL.createObjectURL(e.target.files[0]) })}
          />
          <textarea
            placeholder="Your Review"
            value={newReview.review}
            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            required
          ></textarea>
          <input
            type="number"
            placeholder="Work-Life Balance (1-5)"
            value={newReview.workLife}
            onChange={(e) => setNewReview({ ...newReview, workLife: e.target.value })}
            required
            min="1"
            max="5"
          />
          <input
            type="number"
            placeholder="Growth (1-5)"
            value={newReview.growth}
            onChange={(e) => setNewReview({ ...newReview, growth: e.target.value })}
            required
            min="1"
            max="5"
          />
          <input
            type="number"
            placeholder="Culture (1-5)"
            value={newReview.culture}
            onChange={(e) => setNewReview({ ...newReview, culture: e.target.value })}
            required
            min="1"
            max="5"
          />
          <input
            type="text"
            placeholder="Department/Role"
            value={newReview.department}
            onChange={(e) => setNewReview({ ...newReview, department: e.target.value })}
            required
          />
          <label>
            <input
              type="checkbox"
              checked={newReview.isFeatured}
              onChange={(e) => setNewReview({ ...newReview, isFeatured: e.target.checked })}
            />
            Mark as Featured Employer
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};


export default CompanyReviews;







