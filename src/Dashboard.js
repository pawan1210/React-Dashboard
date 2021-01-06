import React, { Component } from "react";
import Navbarr from "./Navbarr";
import Innerbar from "./Innerbar";
import DashboardContent from "./DashboardContent";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-div">
        <Navbarr />
        <Innerbar />
        <DashboardContent />
      </div>
    );
  }
}

export default Dashboard;
