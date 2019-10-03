import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";
// import "./LocationForm.css";

class LocationEditForm extends Component {
  //set the initial state
  state = {
    locationName: "",
    address: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingAnimal = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedLocation = {
      id: this.props.match.params.locationId,
      name: this.state.locationName,
      address: this.state.address
    };

    LocationManager.update(editedLocation).then(() =>
      this.props.history.push("/locations")
    );
  };

  componentDidMount() {
    LocationManager.get(this.props.match.params.locationId).then(location => {
      this.setState({
        locationName: location.name,
        address: location.address,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationName"
                value={this.state.locationName}
              />
              <label htmlFor="locationName">Location name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                value={this.state.location}
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
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

export default LocationEditForm;
