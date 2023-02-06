import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(false);
  const handle = () => setState(!state);
  const handle1 = () => setCount(!count);
  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <Link to="/">POVEDA</Link>
        </h1>

        <ul
          className={`${state ? "nav-menu active" : "nav-menu"}
        ${count ? "kk1" : ""}`}
        >
          <li className="li1 li111">
            <Link to="/aboutus">ABOUT US </Link>
          </li>
          <li className="li1">
            <Link to="/visit"> VISIT</Link>
            <i
              className={
                count
                  ? "fa-sharp fa-solid fa-sort-down arrow1"
                  : "fa-sharp fa-solid fa-sort-up arrow2"
              }
              onClick={handle1}
            ></i>{" "}
            <ul className={count ? "nav-ul active1" : "nav-ul"}>
              <li>ADVENTURE</li>
              <li>
                <Link to="/culture">CULTURE</Link>
              </li>
              <li>
                <Link to="/relax">RELAX</Link>
              </li>
            </ul>
          </li>
          <li className={count ? "li1 li11" : "li1"}>
            <Link to="/pricing">PRICING </Link>
          </li>
          <li className="li1">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handle}>
          {!state ? (
            <i className="fa-solid fa-bars icon "></i>
          ) : (
            <i className="fa-sharp fa-solid fa-x icon"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
