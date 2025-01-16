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

  const [passwordChecker, setPasswordChecker] = useState({
    minLength: false,
    specialChar: false,
    number: false,
    capital: false,
    match: false,
  });

  const validatePassword = (password, confirmPassword) => {
    const minLength = password.length >= 8;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/g.test(password);
    const number = /\d/.test(password);
    const capital = /[A-Z]/.test(password);
    const match = password && password === confirmPassword; // Ensure password is not empty

    setPasswordChecker({
      minLength,
      specialChar,
      number,
      capital,
      match,
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePassword(password, newConfirmPassword);
  };

  const createNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };
  };

  return (
    <div className={showModal}>
      <form
        onSubmit={createNewUser}
        action=""
        className="booking-form modal-booking-form"
        
      >
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
              required
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
              required
            />
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf023; Password"
              type="password"
              name="registerModalpassword"
              id="registerModalpassword"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handlePasswordChange}
              autoComplete="new-password"
              required
            />
            <input
              className="open-sans booking-name-email"
              placeholder="&#xf023; Confirm Password"
              type="password"
              name="registerModalconfirmPassword"
              id="registerModalconfirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              // onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />

            {/* <div className="">
              <PasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match",
                ]}
                minLength={8}
                value={password}
                valueAgain={confirmPassword}
              />
            </div> */}

            <div className="password-checklist">
              <ul>
                <li className={passwordChecker.minLength ? "valid" : "invalid"}>
                  <i
                    className={
                      passwordChecker.minLength
                        ? "fa-solid fa-check"
                        : "fa-solid fa-sharp fa-xmark"
                    }
                  ></i>{" "}
                  At least 8 characters
                </li>
                <li
                  className={passwordChecker.specialChar ? "valid" : "invalid"}
                >
                  <i
                    className={
                      passwordChecker.specialChar
                        ? "fa-solid fa-check"
                        : "fa-solid fa-sharp fa-xmark"
                    }
                  ></i>{" "}
                  Contains a special character
                </li>
                <li className={passwordChecker.number ? "valid" : "invalid"}>
                  <i
                    className={
                      passwordChecker.number
                        ? "fa-solid fa-check"
                        : "fa-solid fa-sharp fa-xmark"
                    }
                  ></i>{" "}
                  Contains a number
                </li>
                <li className={passwordChecker.capital ? "valid" : "invalid"}>
                  <i
                    className={
                      passwordChecker.capital
                        ? "fa-solid fa-check"
                        : "fa-solid fa-sharp fa-xmark"
                    }
                  ></i>{" "}
                  Contains a capital letter
                </li>
                <li className={passwordChecker.match ? "valid" : "invalid"}>
                  <i
                    className={
                      passwordChecker.match
                        ? "fa-solid fa-check"
                        : "fa-solid fa-sharp fa-xmark"
                    }
                  ></i>{" "}
                  Passwords match
                </li>
              </ul>
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
