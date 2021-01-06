import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import {
  faSearch,
  faBell,
  faCog,
  faFlagUsa,
  faAlignJustify,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
const Navbarr = () => {
  return (
    <div className="navbar">
      <div className="left-div">
        <li>
          <span>Pages</span> <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          <span>Reports</span> <FontAwesomeIcon icon={faAngleDown} />
        </li>
        <li>
          <span>Apps</span> <FontAwesomeIcon icon={faAngleDown} />
        </li>
      </div>
      <div className="right-div">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faFlagUsa} />
        <h6>Hi, Alex</h6>
        <div className="photo-div"></div>
      </div>
      <div className="nav-btn">
        <FontAwesomeIcon icon={faAlignJustify} />
      </div>
    </div>
  );
};

export default Navbarr;
