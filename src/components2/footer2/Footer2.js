import React from "react";
import "./footer2.css";
const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="containerr">
        <div className="footer21">
          <h1>COME VISIT US</h1>
          <p>
            We’ve been obsessed with exploring this island for several years -
            let us show the best we’ve found! Contact us so we can help you
            organize a memorable stay at one of the most magical places on the
            planet!
          </p>
        </div>
        <div className="footer22">
          <div>
            <h3>Name*</h3>
            <input placeholder="Your name" />
          </div>
          <div>
            <h3>Last name*</h3>
            <input placeholder="Your lastname " />
          </div>
          <div>
            <h3>Your email*</h3>
            <input placeholder="Your email address" />
          </div>
          <div>
            <h3>Message*</h3>
            <input placeholder="Enter your message" />
          </div>
          <div className="button">SUMBIT</div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
