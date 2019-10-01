import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import LocationList from "./location/LocationList";
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from "./animal/AnimalForm";
//only include these once they are built - previous practice exercise

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
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList {...props} />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/locations"
          render={props => {
            return <LocationList />;
          }}
        />
        <Route
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
          exact
          path="/employees"
          render={props => {
            return <EmployeeList />;
          }}
        />
        <Route
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
          exact
          path="/owners"
          render={props => {
            return <OwnerList />;
          }}
        />
        <Route
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
          path="/animals/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
