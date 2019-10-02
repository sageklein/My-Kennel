import React, { Component } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

class LocationForm extends Component {
  state = {
    locationName: "",
    location: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create employee      
  object, invoke the EmployeeManager post method, and redirect to the full employee list
   */
  constructNewAEmployee = evt => {
    evt.preventDefault();
    if (this.state.employeeName === "" || this.state.location === "") {
      window.alert("Please input an employee name and location");
    } else {
      this.setState({ loadingStatus: true });
      const location = {
        name: this.state.locationName,
        location: this.state.location
      };

      // Create the employee and redirect user to employee list
      EmployeeManager.post(employee).then(() =>
        this.props.history.push("/employees")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="employeeName"
                placeholder="Employee name"
              />
              <label htmlFor="employeeName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="location"
                placeholder="Location"
              />
              <label htmlFor="location">Location</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewAnimal}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeForm;
