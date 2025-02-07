import React, { useState } from "react";
import "./CommunicationTools.css";

const CommunicationTools = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [template, setTemplate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [bulkEmails, setBulkEmails] = useState([]);
  const [privateMessage, setPrivateMessage] = useState("");
  const [showPrivateChat, setShowPrivateChat] = useState(false);

  const templates = {
    interview: "Dear Candidate, Your interview is scheduled for...",
    rejection: "Thank you for applying. Unfortunately...",
    offer: "Congratulations! You have been selected...",
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
    setMessage(templates[e.target.value]);
  };

  return (
    <div className="communication-tools">
      <h2>Communication Tools</h2>

      {/* Email Form */}
      <div className="email-section">
        <h3>Send Email</h3>
        <input
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <select onChange={handleTemplateChange}>
          <option value="">Select a Template</option>
          <option value="interview">Interview Invite</option>
          <option value="rejection">Rejection Letter</option>
          <option value="offer">Offer Letter</option>
        </select>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send Email</button>
      </div>

      {/* SMS Alerts */}
      <div className="sms-section">
        <h3>Send SMS Alert</h3>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          placeholder="SMS Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send SMS</button>
      </div>

      {/* Email Follow-Up Reminders */}
      <div className="follow-up-section">
        <h3>Set Follow-Up Reminder</h3>
        <input
          type="date"
          value={followUpDate}
          onChange={(e) => setFollowUpDate(e.target.value)}
        />
        <button>Set Reminder</button>
      </div>

      {/* Bulk Email Sending */}
      <div className="bulk-email-section">
        <h3>Send Bulk Emails</h3>
        <textarea
          placeholder="Enter emails separated by commas"
          value={bulkEmails}
          onChange={(e) => setBulkEmails(e.target.value.split(","))}
        />
        <button>Send Bulk Emails</button>
      </div>

      {/* Private Messaging */}
      <div className="private-message-section">
        <h3>Private Messaging</h3>
        <button onClick={() => setShowPrivateChat(true)}>Start Chat</button>
      </div>

      {showPrivateChat && (
        <div className="private-chat-modal">
          <textarea
            placeholder="Type your private message..."
            value={privateMessage}
            onChange={(e) => setPrivateMessage(e.target.value)}
          />
          <button>Send Message</button>
          <button onClick={() => setShowPrivateChat(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CommunicationTools;
