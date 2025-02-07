import React from 'react';
import './SupportAndAccessibility.css';

const SupportAndAccessibility = () => {
  return (
    <div className="support-accessibility">
      <h2>Support & Accessibility</h2>
      
      <section className="chat-support">
        <h3>Chat Support for Job Seekers</h3>
        <p>
          Our chat support is available 24/7 to assist job seekers with any queries regarding job applications, account issues, and more. 
          Get real-time help by chatting with our support team directly!
        </p>
      </section>

      <section className="help-center">
        <h3>Help Center for Platform Usage</h3>
        <p>
          Explore our Help Center for comprehensive guides, FAQs, and troubleshooting tips to navigate the platform and get the most out of it. 
          Whether you're a job seeker or an employer, we’ve got the answers you need.
        </p>
      </section>
    </div>
  );
};

export default SupportAndAccessibility;
