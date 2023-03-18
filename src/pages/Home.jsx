import React from "react";
import "./style/Home.scss";

function Home() {
  return (
    <div className="content-home">
      <div className="home-text">
        <h1 cassName="home-title">
          The <span>Smart</span>
          <br />
          Choice For <span>Future</span>
        </h1>
        <p className="home-subtitle">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush
          the...
        </p>
        <div className="text-field-group">
          <input
            type="search"
            className="home-search"
            placeholder="search for a location"
          />
          <button className="home-btn">Continue</button>
        </div>
      </div>
      <div className="home-image">
        <img src="img/home-picture.png" alt="" className="home-picture" />
      </div>
    </div>
  );
}

export default Home;
