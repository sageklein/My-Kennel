import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import "./Employee.css";

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: []
  };
  deleteEmployee = id => {
    EmployeeManager.delete(id).then(() => {
      EmployeeManager.getAll().then(newEmployees => {
        this.setState({
          employees: newEmployees
        });
      });
    });
  };

  componentDidMount() {
    console.log("EMPLOYEE CARD: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll().then(employees => {
      this.setState({
        employees: employees
      });
    });
  }

  render() {
    console.log("EMPLOYEE CARD: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/employees/new");
            }}
          >
            Admit Employee
          </button>
        </section>
        <div className="container-cards">
          {this.state.employees.map(employee => (
            <EmployeeCard
              deleteEmployee={this.deleteEmployee}
              key={employee.id}
              employee={employee}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}
export default EmployeeList;
