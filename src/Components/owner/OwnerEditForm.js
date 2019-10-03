import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";

class OwnerEditForm extends Component {
  //set the initial state
  state = {
    ownerName: "",
    location: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingOwner = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedOwner = {
      id: this.props.match.params.ownerId,
      name: this.state.ownerName,
      location: this.state.location
    };

    OwnerManager.update(editedOwner).then(() =>
      this.props.history.push("/owners")
    );
  };

  componentDidMount() {
    OwnerManager.get(this.props.match.params.ownerId).then(owner => {
      this.setState({
        ownerName: owner.name,
        location: owner.location,
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
                id="ownerName"
                value={this.state.ownerName}
              />
              <label htmlFor="ownerName">Owner name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="location"
                value={this.state.location}
              />
              <label htmlFor="location">Location</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
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

export default OwnerEditForm;
