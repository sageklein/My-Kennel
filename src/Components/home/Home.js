import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="homeFlex">
        <picture>
          <img src="dogroom.jpg" alt="Rooms"></img>
        </picture>
        <address class="address">
          <h6>Visit Us at the Nashville North Location</h6>
          <br />
          <h6>500 Puppy Way</h6>
          <p />
          <h6>Nashville TN, 37209</h6>
          <p />
          <br></br>
        </address>
        <picture>
          <img src="boarding.jpg" alt="Kennel"></img>
        </picture>
      </div>
    );
  }
}

export default Home;
