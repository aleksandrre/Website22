import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer1">
      <h1>POVEDA</h1>
      <div className="footer11">
        <ul>
          <li>About us</li>
          <li>Visit</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="footer111">
          <h2>email@example.com</h2>
          <h3>123-456-7890</h3>
          <div className="footer1111">
            <div>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
