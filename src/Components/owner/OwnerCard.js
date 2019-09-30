import React, { Component } from "react";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <i class="fas fa-user fa-5x"></i>
          </picture>
          <h3>
            Name: <span className="card-ownerName">Noodles O'Poodles</span>
          </h3>
          <p>Likes: Dogs</p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
