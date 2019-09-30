import React, { Component } from "react";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <i class="fa fa-user-tie"></i>
          </picture>
          <h3>
            Name:{" "}
            <span className="card-ownerName">{this.props.owner.name}</span>
          </h3>
          <p>Location: {this.props.owner.location}</p>
          <button
            type="button"
            onClick={() => this.props.deleteOwner(this.props.owner.id)}
          >
            He Gone
          </button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
