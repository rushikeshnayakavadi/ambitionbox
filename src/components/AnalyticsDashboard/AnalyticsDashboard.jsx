import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registering necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const AnalyticsDashboard = () => {
  // Example bar chart data for trend analysis
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Job Market Trend",
        data: [200, 250, 300, 280, 350], // Trend data
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ], // Bar colors
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ], // Border colors
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Job Market Trend Analysis (Bar Chart)",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analytics-dashboard">
      <div className="header">
        <h2>Analytics Dashboard</h2>
        <p>
          Welcome to your personalized dashboard. Here, you'll find insights and tools to help you make informed
          career decisions.
        </p>
      </div>

      <div className="section">
        <h3>Saved Jobs and Reviews</h3>
        <p>Keep track of your favorite jobs and the reviews you've left for companies.</p>
        <ul>
          <li><strong>Job 1:</strong> Software Engineer at Company A</li>
          <li><strong>Job 2:</strong> Data Analyst at Company B</li>
          <li><strong>Review:</strong> Great company culture and work-life balance!</li>
        </ul>
      </div>

      <div className="section">
        <h3>Personalized Notifications</h3>
        <p>
          Stay updated with job alerts and insights tailored to your preferences:
        </p>
        <ul>
          <li>3 new job postings for "Frontend Developer"</li>
          <li>Salary increase in the "Data Science" domain</li>
          <li>Top companies hiring in your area</li>
        </ul>
      </div>

      <div className="section">
        <h3>AI-Powered Recommendations</h3>
        <p>
          Based on your profile, we recommend the following companies and roles:
        </p>
        <ul>
          <li><strong>Company:</strong> TechCorp - Role: Full Stack Developer</li>
          <li><strong>Company:</strong> DataWorld - Role: Machine Learning Engineer</li>
        </ul>
      </div>

      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>

      <div className="section">
        <h3>Insights on Best-Paying Industries</h3>
        <p>Discover the top-paying industries for your skill set:</p>
        <ul>
          <li>Software Development: Average Salary - $120,000</li>
          <li>Data Science: Average Salary - $110,000</li>
          <li>Cloud Computing: Average Salary - $130,000</li>
        </ul>
      </div>

      <div className="section">
        <h3>Job Market Trend Analysis</h3>
        <p>
          Analyze the trends in the job market to understand shifts and prepare for upcoming opportunities:
        </p>
        <p>
          The bar chart above highlights a steady increase in job openings in the tech industry over the last few months.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
