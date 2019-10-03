import React, { Component } from "react";
// import { Link } from "react-router-dom";
class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <i className="fa fa-poo"></i>
          <h3>
            Name:{" "}
            <span className="card-employeeName">
              {this.props.employee.name}
            </span>
          </h3>
          <p>Location: {this.props.employee.location}</p>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(
                `/employees/${this.props.employee.id}/details`
              );
            }}
          >
            Details
          </button>
          <button
            type="button"
            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
          >
            Fire
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(
                `/employees/${this.props.employee.id}/edit`
              );
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
