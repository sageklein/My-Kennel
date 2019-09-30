import React, { Component } from "react";
class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <i class="fa fa-user"></i>
          <h3>
            Name:{" "}
            <span className="card-employeeName">
              {this.props.employee.name}
            </span>
          </h3>
          <p>Location: {this.props.employee.location}</p>
          <button
            type="button"
            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
          >
            Fire
          </button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
