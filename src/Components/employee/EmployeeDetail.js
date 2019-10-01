import React, { Component } from "react";
import EmployeeManager from "../../modules/EmployeeManager";

class EmployeeDetail extends Component {
  state = {
    name: "",
    breed: "",
    loadingStatus: true
  };
  handleDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the employee list.
    this.setState({ loadingStatus: true });
    EmployeeManager.delete(this.props.employeeId).then(() =>
      this.props.history.push("/employees")
    );
  };

  componentDidMount() {
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to that data; put it into state
    EmployeeManager.get(this.props.employeeId).then(employee => {
      this.setState({
        name: employee.name,
        location: employee.location,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture> */}
          <h3>
            Name:{" "}
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>
          <p>Location: {this.state.location}</p>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Fire Them!
          </button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
