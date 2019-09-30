import React, { Component } from "react";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name: <span className="card-employeeName">Mr. Bean</span>
          </h3>
          <p>Likes: Poodles</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
