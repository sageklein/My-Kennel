import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./animal/Kennel.css";

class Kennel extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default Kennel;
