import React from "react";

function ContactForm() {
  return (
    <div className="form">
      <div className="form-wrapper">
        <h1 className="form-title">Subscribe to our newsletter</h1>
        <h5 className="form-subtitle">
          Lorem Ipsum is simply dummy text of the printing.
        </h5>
        <div className="input-wrapper">
          <input
            placeholder="Email Adress"
            type="text"
            className="form-input"
          />
          <button className="form-btn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
