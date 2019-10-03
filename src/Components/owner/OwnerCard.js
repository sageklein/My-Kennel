import React, { Component } from "react";
// import { Link } from "react-router-dom";
class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <i className="fa fa-poo"></i>
          <h3>
            Name:{" "}
            <span className="card-ownerName">{this.props.owner.name}</span>
          </h3>
          <p>Location: {this.props.owner.location}</p>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/owners/${this.props.owner.id}/details`);
            }}
          >
            Details
          </button>
          <button
            type="button"
            onClick={() => this.props.deleteOwner(this.props.owner.id)}
          >
            Fire
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/owners/${this.props.owner.id}/edit`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
