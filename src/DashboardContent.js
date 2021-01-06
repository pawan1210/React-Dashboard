import React, { Component } from "react";
import "./DashboardContent.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faAngleLeft,
  faAngleRight,
  faMapMarkerAlt,
  faLayerGroup,
  faSignal,
  faCode,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  AuthorSalesChart,
  TechnologiesChart,
  TotalOrdersChart,
  SalesStatisticsChart,
} from "./Charts";

class DashboardContent extends Component {
  render() {
    return (
      <div className="DashboardContent">
        <div className="dashboard-item">
          <div className="dashboard-item-header1">
            <h3> Author Sales</h3>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
          <div className="dashboard-item-content-div">
            <h2>
              <span>$</span>64M
            </h2>
            <div className="dashboard-item-chart">
              <AuthorSalesChart />
            </div>
          </div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-item-header1">
            <h3> Technologies</h3>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
          <div className="dashboard-item-content-div">
            <h2>9.3M</h2>
            <div className="dashboard-item-chart donut">
              <TechnologiesChart />
            </div>
          </div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-item-header1">
            <h3> Total Orders</h3>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
          <div className="dashboard-item-content-div">
            <h2>17M</h2>
            <div className="dashboard-item-chart">
              <TotalOrdersChart />
            </div>
          </div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-item-header2">
            <h3> ANNOUNCEMENTS</h3>
            <div>
              <span>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </div>
          <div className="dashboard-item-content2">
            <h5> Incredibly Positive Reviews</h5>
            <p>
              To start the blog think of a topic about and first brainstorm
              party is ways to write details.
            </p>
            <div className="button-div">
              <button className="button1">17 Nov 2018</button>
              <button className="button2">View</button>
            </div>
          </div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-item-header2">
            <h3> PROJECTS</h3>
            <div>
              <span>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </div>
          <div className="dashboard-item-content2">
            <h5> First Milestone Achievement</h5>
            <p>
              To start the blog think of a topic about and first brainstorm
              party is ways to write details.
            </p>
            <div className="progress-bar-div">
              <div className="progress-bar-label-div">
                <h3>Progress</h3>
                <h3>55%</h3>
              </div>
              <ProgressBar now={55} />
            </div>
          </div>
        </div>

        <div className="dashboard-item">
          <div className="dashboard-item-header2">
            <h3> TODAY'S SCHEDULE</h3>
            <div>
              <span>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </div>
          <div className="dashboard-item-content2 schedule-item">
            <h5>UX/UI Design Updates</h5>
            <h5 className>11:15AM - 12:30 PM</h5>
            <div className="schedule-div">
              <h3>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                265R St. Manhatten NY..
              </h3>
              <button>View Map</button>
            </div>
          </div>
        </div>

        <div className="dashboard-item">
          <div className="dashboard-item-header1 top-products-div">
            <h3> Top Products</h3>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
          <div className="icon-div">
            <li>
              <span>
                <FontAwesomeIcon icon={faSignal} />
              </span>
              <span>Settings</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faCode} />
              </span>
              <span>Code</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faLayerGroup} />
              </span>
              <span>Design</span>
            </li>
          </div>
          <div className="products-list-div">
            <li>
              <div className="left-div">
                <h6>HTML 5 Templates</h6>
                <h6>Front-end Admin & Email</h6>
              </div>
              <div className="right-div">
                <h6>+79%</h6>
                <ProgressBar now={79} variant="success" />
              </div>
            </li>
            <li>
              <div className="left-div">
                <h6>Wordpress Themes</h6>
                <h6>eCommerce Website Plugin</h6>
              </div>
              <div className="right-div">
                <h6>+21%</h6>
                <ProgressBar now={70} />
              </div>
            </li>
            <li>
              <div className="left-div">
                <h6>eCommerce Websites</h6>
                <h6>Shops Fashion web sites & otc</h6>
              </div>
              <div className="right-div">
                <h6>-16%</h6>
                <ProgressBar now={90} variant="info" />
              </div>
            </li>
            <li>
              <div className="left-div">
                <h6>UI/UX Design</h6>
                <h6>Everything you ever imagine</h6>
              </div>
              <div className="right-div">
                <h6>+4%</h6>
                <ProgressBar now={70} />
              </div>
            </li>
            <li>
              <div className="left-div">
                <h6>Freebie Themes</h6>
                <h6>Front-end Admin & Email</h6>
              </div>
              <div className="right-div">
                <h6>+34%</h6>
                <ProgressBar now={34} variant="warning" />
              </div>
            </li>
          </div>
        </div>
        <div className="dashboard-item statistics-div">
          <div className="dashboard-item-header1 top-products-div">
            <h3>Sales Statistics</h3>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
          <div className="chart-label-div">
            <div>
              <li>
                <div></div>Author
              </li>
              <li>
                <div></div>Customer
              </li>
            </div>
            <button>
              <span>August</span>
              <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            </button>
          </div>
          <SalesStatisticsChart />
        </div>
      </div>
    );
  }
}

export default DashboardContent;
