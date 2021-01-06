import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import CollapsedSidebar from "./CollapsedSidebar";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
class App extends Component {
  constructor() {
    super();
    this.state = {
      show_sidebar: true,
    };
    this.show_sidebar = this.show_sidebar.bind(this);
    this.hide_sidebar = this.hide_sidebar.bind(this);
  }
  show_sidebar = () => {
    this.setState({ show_sidebar: true });
  };
  hide_sidebar = () => {
    this.setState({ show_sidebar: false });
  };
  render() {
    return (
      <div className="App">
        {this.state.show_sidebar ? (
          <Sidebar hide_sidebar={this.hide_sidebar} />
        ) : (
          <CollapsedSidebar show_sidebar={this.show_sidebar} />
        )}
        <Dashboard />
      </div>
    );
  }
}

export default App;
