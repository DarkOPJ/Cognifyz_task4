import React, {useState} from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import RegisterModal from "../../components/RegisterModal";

const Register = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen((prevState) => !prevState);
  }
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
            <button onClick={() => setModalOpen((prevState) => !prevState)} className="auth-main-btn open-sans show-popup">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="right-inner">
        <form action="" className="signup-form">
          <p className="signup-welcome open-sans">Hello!</p>
          <p className="signup-text open-sans">Sign Up to Get Started</p>

          <input
            className="open-sans"
            placeholder="&#xf007; Full Name"
            type="text"
            name="name"
            id="name"
          />
          <input
            className="open-sans"
            placeholder="&#xf003; Email Address"
            type="email"
            name="email"
            id="email"
          />
          <input
            className="open-sans"
            placeholder="&#xf023; Password"
            type="password"
            name="password"
            id="password"
          />
          <input
            className="signup-form-btn open-sans"
            type="submit"
            value="Register"
          />

          <p className="navigate-form open-sans">
            I want to <Link className="navigate-forms-link" to="/login">Login</Link>
          </p>
        </form>
      </div>
      <RegisterModal isActive={modalOpen} close={close}/>
    </div>
  );
};

export default Register;
