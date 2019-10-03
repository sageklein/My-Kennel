import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationForm from "./location/LocationFrom";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationEditForm from "./location/LocationEditForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        {/* Make sure you add the `exact` attribute here */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.props.user) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props => {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return <AnimalEditForm {...props} />;
          }}
        />

        {/* routes for employees */}
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.props.user) {
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/employees/:employeeId(\d+)"
          render={props => {
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/employees/new"
          render={props => {
            return <EmployeeForm {...props} />;
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)/edit"
          render={props => {
            return <EmployeeEditForm {...props} />;
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)/details"
          render={props => {
            return <EmployeeWithAnimals {...props} />;
          }}
        />

        {/* routes for location */}
        <Route
          exact
          path="/locations"
          render={props => {
            if (this.props.user) {
              return <LocationList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/locations/:locationId(\d+)"
          render={props => {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/locations/new"
          render={props => {
            return <LocationForm {...props} />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)/edit"
          render={props => {
            return <LocationEditForm {...props} />;
          }}
        />

        {/* owner routes */}
        <Route
          exact
          path="/owner"
          render={props => {
            if (this.props.user) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/owners/:ownerId(\d+)"
          render={props => {
            return (
              <OwnerDetail
                ownerId={parseInt(props.match.params.ownerId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)/edit"
          render={props => {
            return <OwnerEditForm {...props} />;
          }}
        />

        {/* login route */}
        <Route
          path="/login"
          render={props => {
            return <Login setUser={this.props.setUser} {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
export default ApplicationViews;
