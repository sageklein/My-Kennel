import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/employees/${this.props.employee.id}`}>
            <button>Details</button>
          </Link>
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
