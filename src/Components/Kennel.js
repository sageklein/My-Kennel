import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./animal/Kennel.css";

class Kennel extends Component {
  state = {
    user: false
  };

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  setUser = authObj => {
    localStorage.setItem("credentials", JSON.stringify(authObj));
    this.setState({
      user: this.isAuthenticated()
    });
  };
  clearUser = () => {
    localStorage.clear();

    this.setState({
      user: this.isAuthenticated()
    });
  };

  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    });
  }

  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user} setUser={this.setUser} />
      </>
    );
  }
}

export default Kennel;
