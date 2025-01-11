import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";

import { Link } from "react-router-dom";

const RegisterModal = ({ isActive = false, close }) => {
  const showModal = isActive
    ? "outer-8 popup-container active"
    : "outer-8 popup-container";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createNewUser = () => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };

    // if (password!== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }
  };

  return (
    <div className={showModal}>
      <form onSubmit={createNewUser} action="" className="booking-form modal-booking-form">
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
              name="registerModalname"
              id="registerModalname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf003; Email Address"
              type="email"
              name="registerModalemail"
              id="registerModalemail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf023; Password"
              type="password"
              name="registerModalpassword"
              id="registerModalpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf023; Confirm Password"
              type="password"
              name="registerModalconfirmPassword"
              id="registerModalconfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />

            <div className="">
              <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital", "match"]}
                minLength={8}
                value={password}
                valueAgain={confirmPassword}
              />
            </div>

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
