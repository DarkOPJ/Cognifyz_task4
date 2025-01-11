import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterModal = ({ isActive = false, close }) => {
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

          <p className="signup-welcome open-sans">Hello!</p>
          <p className="signup-text open-sans">Sign Up to Get Started</p>
          <div className="booking-form1">
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf007; Full Name"
              type="text"
              name="name"
              id="name"
            />
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf003; Email Address"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="booking-form1">
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
          <Link className="navigate-forms-link" to="/login">
            Login
          </Link>
        </p>
        </div>

      </form>
    </div>
  );
};

export default RegisterModal;
