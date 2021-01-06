import React, { Component } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faSignal,
  faCog,
  faAngleRight,
  faLayerGroup,
  faRocket,
  faWindowRestore,
  faChartPie,
  faCopy,
  faLaptop,
  faDatabase,
  faGift,
  faCalendar,
  faAddressCard,
  faBacon,
  faBell,
  faArchway,
  faBalanceScale,
  faBusinessTime,
  faBatteryHalf,
} from "@fortawesome/free-solid-svg-icons";
class Sidebar extends Component {
  hide_sidebar = () => {
    this.props.hide_sidebar();
  };
  render() {
    return (
      <div className="sidebar">
        <div className="header">
          <div className="left-div">
            <div></div>
            <h5>keen</h5>
          </div>
          <button onClick={this.hide_sidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="dashboards-div">
          <div className="header">
            <div>
              <FontAwesomeIcon icon={faSignal} />
              <span>Dashboards</span>
            </div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>

          <li>Navy Aside</li>
          <li>Brand Aside</li>
          <li>Navy Header</li>
          <li>Light Aside</li>
          <li>Brand Header</li>
          <div className="header">
            <div>
              <FontAwesomeIcon icon={faCog} />
              <span>Layout Builder</span>
            </div>
          </div>
        </div>
        <div className="components-div">
          <div className="header">COMPONENTS</div>
          <li>
            <span>
              <FontAwesomeIcon icon={faLayerGroup} />
              Base
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faRocket} />
              Custom
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faWindowRestore} />
              Extended
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faChartPie} />
              Widgets
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCopy} />
              Forms
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faLaptop} />
              Keen Wizard
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faDatabase} />
              Keen Database
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faGift} />
              Datatables
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              Icons
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faAddressCard} />
              Portlets
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBacon} />
              Calender
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBell} />
              Charts
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
        </div>
        <div className="components-div">
          <div className="header">CUSTOM</div>
          <li>
            <span>
              <FontAwesomeIcon icon={faArchway} />
              Blog
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBalanceScale} />
              Pricing
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBatteryHalf} />
              Invoices
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              FAQS
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBusinessTime} />
              User Pages
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
        </div>
      </div>
    );
  }
}

export default Sidebar;
