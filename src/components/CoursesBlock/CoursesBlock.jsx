import React from "react";
import StarRating from "../Stars/StarRating";
import "../CoursesBlock/CoursesBlock.scss";

function CoursesBlock({
  imageUrl,
  shortName,
  fullName,
  price,
  time,
  duration,
  sales,
}) {
  return (
    <div className="courses-card">
      <div className="card-top">
        <img src={imageUrl} alt="" className="card-img" />
      </div>
      <div className="card-main">
        <div className="card-rate">
          <p className="courses-mail">{shortName}</p>
          <p className="card-star">
            <StarRating />
          </p>
        </div>
        <h3 className="courses-name">{fullName}</h3>
        <h5 className="card-price">{price}</h5>
      </div>
      <div className="card-footer">
        <ul className="card-property">
          <div className="card-item">
            <img src="/img/time.svg" alt="" className="property-img" />
            <p className="property-text">{time}</p>
          </div>
          <div className="card-item">
            <img src="/img/video.svg" alt="" className="property-img" />
            <p className="property-text">{duration}</p>
          </div>
          <div className="card-item">
            <img src="/img/download.svg" alt="" className="property-img" />
            <p className="property-text">{sales}</p>
          </div>
        </ul>
        <div className="button-wrapper">
          <button className="card-btn">Join Course</button>
        </div>
      </div>
    </div>
  );
}
export default CoursesBlock;
