import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

function Header() {
  const [modalActive, setModalActive] = React.useState(false);

  return (
    <header className="header">
      <Link to="/">
        <img src="img/logo.png" alt="logo" className="header-logo" />
      </Link>
      <div className="header-navbar">
        <ul className="header-list">
          <Link to="/">
            <li className="header-item">Home</li>
          </Link>
          <Link to="/about">
            <li className="header-item">About us</li>
          </Link>
          <Link to="/courses">
            <li className="header-item">Our courses</li>
          </Link>
          <Link to="/professor">
            <li className="header-item">Our Professors</li>
          </Link>
          <Link to="/">
            <li className="header-item">Contact us</li>
          </Link>
          <button className="header-btn" onClick={() => setModalActive(true)}>
            Sign In
          </button>
          <Modal active={modalActive} setActive={setModalActive} />
        </ul>
      </div>
    </header>
  );
}

export default Header;
