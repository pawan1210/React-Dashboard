import React, { Component } from "react";
import "./CollapsedSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArchway,
  faAtom,
  faBars,
  faBatteryHalf,
  faBiking,
  faBookmark,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";

class CollapsedSideber extends Component {
  show_sidebar = () => {
    this.props.show_sidebar();
  };
  render() {
    return (
      <div className="collapsedsidebar">
        <span>
          <button onClick={this.show_sidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </span>
        <span>
          <FontAwesomeIcon icon={faAddressBook} />
        </span>
        <span>
          <FontAwesomeIcon icon={faArchway} />
        </span>
        <span>
          <FontAwesomeIcon icon={faAtom} />
        </span>
        <span>
          <FontAwesomeIcon icon={faBatteryHalf} />
        </span>
        <span>
          <FontAwesomeIcon icon={faBookmark} />
        </span>
        <span>
          <FontAwesomeIcon icon={faCameraRetro} />
        </span>
      </div>
    );
  }
}

export default CollapsedSideber;
