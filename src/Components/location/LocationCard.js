import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture>
          <h3>
            Name:{" "}
            <span className="card-locationName">
              {this.props.location.name}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default LocationCard;
