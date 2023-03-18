import React from "react";
import "../ProfessorBlock/ProfessorBlock.scss";

function ProfessorBlock({ imageUrl, name, mail, description, profession }) {
  return (
    <div className="professor-card">
      <div className="card-top">
        <img src={imageUrl} className="card-img" />
      </div>
      <div className="card-main">
        <h3 className="professor-name">{name}</h3>
        <p className="professor-mail">{mail}</p>
        <span className="professor-description">{description}</span>
      </div>
      <div className="card-footer">
        <h5 className="card-profession">{profession}</h5>
        <div className="card-society">
          <img src="img/instagram-logo.png" alt="" className="society-img" />
          <img src="img/linkedin-logo.png" alt="" className="society-img" />
        </div>
      </div>
    </div>
  );
}

export default ProfessorBlock;
