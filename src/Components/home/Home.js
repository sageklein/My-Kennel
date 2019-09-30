import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="homeFlex">
        <div class="homePic">
          <picture>
            <img src="../../../public/dogroom.jpg" alt="Rooms"></img>
          </picture>
        </div>
        <address class="address">
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
        <div class="homePic">
          <picture>
            <img src="../../../public/boarding.jpg" alt="Kennel"></img>
          </picture>
        </div>
      </div>
    );
  }
}

export default Home;
