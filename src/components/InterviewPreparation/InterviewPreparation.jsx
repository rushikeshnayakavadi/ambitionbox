import React from "react";
import "./InterviewPreparation.css";

const InterviewPreparation = () => {
  const interviewQuestions = [
    { question: "Tell me about yourself" },
    { question: "Why should we hire you?" },
    { question: "What are your strengths and weaknesses?" },
  ];

  const roleSpecificExperiences = [
    {
      role: "Software Engineer",
      experience: "Focus on coding challenges and system design.",
    },
    {
      role: "Product Manager",
      experience: "Emphasis on problem-solving and business scenarios.",
    },
  ];

  const interviewProcesses = [
    {
      company: "Company A",
      difficulty: "Medium",
      steps: [
        "Phone Screening",
        "Technical Interview",
        "On-site Interview",
        "HR Discussion",
      ],
    },
    {
      company: "Company B",
      difficulty: "Hard",
      steps: ["Online Assessment", "Technical Round 1", "Final Round"],
    },
  ];

  const commonQuestionsByCompanies = [
    {
      company: "Company A",
      questions: ["Explain your projects", "How do you handle pressure?"],
    },
    {
      company: "Company B",
      questions: ["What is your greatest achievement?", "Explain OOP concepts"],
    },
  ];

  return (
    <div className="interview-preparation">
      <h2>Interview Preparation</h2>
      <p>Prepare yourself with interview questions, experiences, and tips.</p>

      <div className="section">
        <h3>Interview Questions Shared by Previous Candidates</h3>
        <ul>
          {interviewQuestions.map((item, index) => (
            <li key={index}>{item.question}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Role-specific Interview Experiences</h3>
        {roleSpecificExperiences.map((item, index) => (
          <div key={index} className="role-experience">
            <h4>{item.role}</h4>
            <p>{item.experience}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h3>Difficulty Ratings for Interview Processes</h3>
        {interviewProcesses.map((item, index) => (
          <div key={index} className="process-card">
            <h4>{item.company}</h4>
            <p>Difficulty: {item.difficulty}</p>
            <p>Steps:</p>
            <ol>
              {item.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="section">
        <h3>Commonly Asked Questions by Companies</h3>
        {commonQuestionsByCompanies.map((item, index) => (
          <div key={index} className="company-questions">
            <h4>{item.company}</h4>
            <ul>
              {item.questions.map((q, qIndex) => (
                <li key={qIndex}>{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewPreparation;

