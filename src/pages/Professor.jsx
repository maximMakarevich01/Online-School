import React from "react";
import ProfessorBlock from "../components/ProfessorBlock/ProfessorBlock";
import "./style/Professor.scss";
import professors from "../assets/professors.json";

function Professor() {
  return (
    <div className="professor-content">
      <div className="professor-top">
        <div className="professor-text">
          <h1 className="professor-title">Our professors</h1>
          <p className="professor-subtitle">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>
      <div className="professor-list">
        {professors.map((obj) => (
          <ProfessorBlock
            imageUrl={obj.imageUrl}
            name={obj.name}
            mail={obj.mail}
            description={obj.description}
            profession={obj.profession}
          />
        ))}
      </div>
    </div>
  );
}

export default Professor;
