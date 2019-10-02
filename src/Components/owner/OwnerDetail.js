import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";

class OwnerDetail extends Component {
  state = {
    name: "",
    location: "",
    loadingStatus: true
  };
  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({ loadingStatus: true });
    OwnerManager.delete(this.props.ownerId).then(() =>
      this.props.history.push("/owners")
    );
  };

  componentDidMount() {
    console.log("OwnerDetail: ComponentDidMount");
    OwnerManager.get(this.props.ownerId).then(owner => {
      this.setState({
        name: owner.name,
        address: owner.address,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name:{" "}
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>
          <p>Location: {this.state.address}</p>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Get Rid Of This Guy!!
          </button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;
