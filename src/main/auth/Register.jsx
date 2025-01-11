import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";

import RegisterModal from "../../components/RegisterModal";

const Register = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen((prevState) => !prevState);
  };

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
    <div className="auth-outer-1">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="left-inner">
        <div className="auth-lin-text">
          <h1 className="domine auth-main-heading">Tonara AI</h1>
          <p className="open-sans auth-main-p">
            Our ML models predict VoIP call quality to help administrators
            maintain high service standards.
          </p>
          <div>
            <Link className="auth-main-btn open-sans" to="/">
              Read More
            </Link>
            <button
              onClick={() => setModalOpen((prevState) => !prevState)}
              className="auth-main-btn open-sans show-popup"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="right-inner">
        <form onSubmit={createNewUser} className="signup-form">
          <p className="signup-welcome open-sans">Hello!</p>
          <p className="signup-text open-sans">Sign Up to Get Started</p>

          <input
            className="open-sans booking-name-email"
            placeholder="&#xf007; Full Name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
          <input
            className="open-sans booking-name-email"
            placeholder="&#xf003; Email Address"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            className="open-sans booking-name-email"
            placeholder="&#xf023; Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <input
            className="open-sans booking-name-email"
            placeholder="&#xf023; Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />

          <div className="password-check">
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={password}
              valueAgain={confirmPassword}
            />
          </div>
          <input
            className="signup-form-btn open-sans"
            type="submit"
            value="Register"
          />

          <p className="navigate-form open-sans">
            I want to{" "}
            <Link className="navigate-forms-link" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
      <RegisterModal isActive={modalOpen} close={close} />
    </div>
  );
};

export default Register;
