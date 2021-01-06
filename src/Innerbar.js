import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./Innerbar.css";

class Innerbar extends Component {
  render() {
    return (
      <div className="Innerbar">
        <div className="left-div">
          <h5>Dashboard</h5>
          <div className="inner-left-div">
            <FontAwesomeIcon icon={faHome} />
            <li>Dashboards</li>
            <li>Navy Aside</li>
          </div>
        </div>
        <div className="right-div">
          <button>
            Today{" "}
            <span>
              Aug 16
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Innerbar;
