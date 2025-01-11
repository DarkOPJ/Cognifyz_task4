import React from "react";

const Footer = ({ isHome = true}) => {
  const footerStyle = (isHome) ? "footer-7" : "footer-codec footer-7";
  return (
    <footer id="footer" className={footerStyle}>
      <iframe
        className="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.675774003288!2d-0.19137262873316185!3d5.652376558284568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c861b1ba223%3A0xe283f1ed8c2d9b09!2sSchool%20of%20Engineering%20Sciences!5e0!3m2!1sen!2sgh!4v1719192561377!5m2!1sen!2sgh"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="footer-links">
        <div className="location-name">
          <i className="faw fa-solid fa-location-dot"></i>
          <h4 className="domine">Annie Jiagge Rd, Accra</h4>
        </div>
        <div className="footer-icons">
          <a
            target="_blank"
            href="https://web.facebook.com/share/qZmdWPE6tURPDafD/"
          >
            <i className="faw fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/ug_engineering?igsh=Mmc5OHUyOGl2ZGp6"
          >
            <i className="faw fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" href="https://x.com/ug_engineering">
            <i className="faw fa-brands fa-x-twitter"></i>
          </a>
          <a target="_blank" href="http://engineering.ug.edu.gh/">
            <i className="faw fa-solid fa-earth-americas"></i>
          </a>
        </div>
        <div className="footer-email">
          <i className="faw fa-regular fa-envelope"></i>
          <h5 className="domine">admissions@ug.edu.gh</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
