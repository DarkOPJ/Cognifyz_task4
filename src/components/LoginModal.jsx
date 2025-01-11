import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginModal = ({ isActive = false, close }) => {
  const showModal = isActive
    ? "outer-8 popup-container active"
    : "outer-8 popup-container";

  return (
    <div className={showModal}>
      <form action="" className="booking-form">
        <button type="button" onClick={close} className="close-btn">
          <i className="fa-regular fa-circle-xmark"></i>
        </button>

        <div className="modal-form">

          <p className="signup-welcome open-sans">Hello Again!</p>
          <p className="signup-text open-sans">Welcome Back</p>
          <div className="booking-form2">
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf007; Full Name"
              type="text"
              name="name"
              id="name"
            />
            
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf023; Password"
              type="password"
              name="password"
              id="password"
            />

            <input
              className="signup-form-btn open-sans booking-name-email"
              type="submit"
              value="Register"
            />
          </div>

        <p className="navigate-form open-sans">
          I want to{" "}
          <Link className="navigate-forms-link" to="/register">
            Register
          </Link>
        </p>
        </div>

      </form>
    </div>
  );
};

export default LoginModal;
