import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <i class="fas fa-map-marker-minus"></i>
          <h3>
            Name:{" "}
            <span className="card-locationName">
              {this.props.location.name}
            </span>
          </h3>
          <p>Address: {this.props.location.address}</p>
          <button
            type="button"
            onClick={() => this.props.deleteLocation(this.props.location.id)}
          >
            We Closed
          </button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
