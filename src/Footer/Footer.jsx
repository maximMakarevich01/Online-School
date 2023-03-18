import React from "react";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <img src="img/logo.png" alt="logo" className="footer-logo" />
        <p className="footer-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy a type
          specimen book.
        </p>
      </div>
      <div className="footer-row">
        <h3 className="footer-title"> Company</h3>
        <ul className="footer-list">
          <li className="footer-item">About us</li>
          <li className="footer-item">How to work</li>
          <li className="footer-item">Popular course</li>
          <li className="footer-item">Service</li>
        </ul>
      </div>
      <div className="footer-row">
        <h3 className="footer-title">Courses</h3>
        <ul className="footer-list">
          <li className="footer-item">Categories</li>
          <li className="footer-item">Online course</li>
          <li className="footer-item">Video course</li>
        </ul>
      </div>
      <div className="footer-row">
        <h3 className="footer-title">Support</h3>
        <ul className="footer-list">
          <li className="footer-item">FAQ</li>
          <li className="footer-item">Career centre</li>
          <li className="footer-item">Help</li>
          <li className="footer-item">Privacy</li>
        </ul>
      </div>
      <div className="footer-row">
        <h3 className="footer-title">Contact info</h3>
        <ul className="footer-list">
          <li className="footer-item">+0913-705-3875</li>
          <li className="footer-item">ElizabethJ@jourrapide.com</li>
          <li className="footer-item">
            4808 Skinner Hollow Road Days Creek, OR 97429
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
