import React from "react";
import "./ContactPage.css";
import axios from "axios";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://iamvengeance.pythonanywhere.com/api/send-email/", formData);
      if (response.data.success) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email: " + response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div className="contact-page">
      <h2 className="contact-heading">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" onChange={handleChange} required></textarea>
      </div>
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
    </div>
  );
};

export default ContactPage;
