import React, { useState } from "react";
import "./ContactPage.css";
import axios from "axios";
import Stepper, { Step } from "./Stepper";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Name is required.");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Email is required.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage("Enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Message cannot be empty.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove the error message when the user starts fixing the first issue
    if (errorMessage) {
      if (e.target.name === "name" && formData.name.trim()) {
        setErrorMessage("");
      } else if (e.target.name === "email" && formData.email.trim()) {
        setErrorMessage("");
      } else if (e.target.name === "message" && formData.message.trim()) {
        setErrorMessage("");
      }
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setShowPopup(true); // Show error popup
      setTimeout(() => setShowPopup(false), 2000); // Hide after 2 sec
      return;
    }

    setSending(true);
    setShowPopup(true);

    try {
      const response = await axios.post(
        "https://iamvengeance.pythonanywhere.com/api/send-email/",
        formData
      );
      if (response.data.success) {
        setErrorMessage(""); // Clear any errors
        setFormData({ name: "", email: "", message: "" }); // Clear fields
        setErrorMessage("Email sent successfully!");
      } else {
        setErrorMessage("Error sending email: " + response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while sending the email.");
    } finally {
      setSending(false);
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 sec
    }
  };

  return (
    <div className="contact-page">
      <Stepper
        initialStep={1}
        onFinalStepCompleted={handleSubmit}
        backButtonText="Previous"
        nextButtonText="Next"
        sending={sending}
      >
        <Step>
          <h2 style={{ color: "#1d3557" }}>Want to connect with me?</h2>
          <p style={{color: "#383838"}}>Send me a quick email!</p>
        </Step>
        <Step>
          <h2 style={{ color: "#1d3557" }}>What's your name?</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name?"
            required
          />
        </Step>
        <Step>
          <h2 style={{ color: "#1d3557" }}>Your email address:</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email?"
            required
          />
        </Step>
        <Step>
          <h2 style={{ color: "#1d3557" }}>What do you have to Say?</h2>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message?"
            rows="4"
            required
          />
        </Step>
      </Stepper>

      {/* Error / Sending Popup */}
      {showPopup && (
        <div className={`popup ${sending ? "sending-popup" : "error-popup"}`}>
          <span className="blinking-dot"></span> {sending ? "Sending..." : errorMessage}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
