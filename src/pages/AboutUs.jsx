import React from "react";
import "./style/AboutUs.scss";
import Slider from "../components/Slider/Slider";

function AboutUs() {
  return (
    <div className="content-about">
      <div className="about-column">
        <div className="about-column-img">
          <img src="img/about-picture.png" alt="" className="about-img" />
        </div>
        <div className="about-column-text">
          <h1 cassName="about-title">
            Premium <span>Learning</span>
            <br />
            Experience
          </h1>
          <div className="about-description">
            <div className="description-card">
              <img src="img/hearts.png" alt="" className="description-img" />
              <div className="card-text">
                <h4 className="description-title">Easily Accessible</h4>
                <p className="description-subtitle">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
            <div className="description-card">
              <img src="img/puzzle.png" alt="" className="description-img" />
              <div className="card-text">
                <h4 className="description-title">Fun learning expe</h4>
                <p className="description-subtitle">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
            <div className="description-card">
              <img src="img/hearts.png" alt="" className="description-img" />
              <div className="card-text">
                <h4 className="description-title">Easily Accessible</h4>
                <p className="description-subtitle">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-review">
        <div className="review-text">
          <h1 className="review-text-title">What students say</h1>
          <p className="review-text-subtitle">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <Slider />
      </div>
    </div>
  );
}

export default AboutUs;
