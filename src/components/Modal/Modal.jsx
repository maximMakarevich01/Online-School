import React from "react";
import "../Modal/ModalStyle.scss";

function Modal({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h1 className="greetings">Welcome</h1>
          <img src="img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="modal__main">
          <label for="inp" className="inp">
            <input type="text" id="inp" placeholder="&nbsp;" />
            <span className="label">Login</span>
            <span className="focus-bg"></span>
          </label>
          <label for="inp" className="inp">
            <input type="text" id="inp" placeholder="&nbsp;" />
            <span className="label">Password</span>
            <span className="focus-bg"></span>
          </label>
          <button className="modal__btn button-1">Submit</button>
        </div>
        <div className="modal__footer">
          <img src="img/instagram-logo.png" alt="" className="society-img" />
          <img src="img/linkedin-logo.png" alt="" className="society-img" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
