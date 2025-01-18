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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

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
    console.log(newUser);
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
            className="open-sans booking-name-email" //name
            placeholder="&#xf007; Full Name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />

          <input
            className="open-sans booking-name-email" //email
            placeholder="&#xf003; Email Address"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <div className="password-div">
            <input
              className="open-sans booking-name-email password-no-margin" //password
              placeholder="&#xf023; Password"
              type={isPasswordVisible ? "text" : "password"} // Dynamic type
              name="password"
              id="password"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              onChange={handlePasswordChange}
              required
            />
              <i
                className={`fa-solid ${
                  isPasswordVisible ? "fa-eye-slash" : "fa-eye"
                } password-view`}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle visibility
                style={{ cursor: "pointer" }}
              ></i>
          </div>

          <div className="password-div">
            <input
              className="open-sans booking-name-email password-no-margin" //confirm password
              placeholder="&#xf023; Confirm Password"
              type={isConfirmPasswordVisible ? "text" : "password"} // Dynamic type
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              // onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              onChange={handleConfirmPasswordChange}
              required
            />
              <i
                className={`fa-solid ${
                  isConfirmPasswordVisible  ? "fa-eye-slash" : "fa-eye"
                } password-view`}
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} // Toggle visibility
                style={{ cursor: "pointer" }}
              ></i>
          </div>

          {/* <div className="password-check">
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
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
              <li className={passwordChecker.specialChar ? "valid" : "invalid"}>
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
