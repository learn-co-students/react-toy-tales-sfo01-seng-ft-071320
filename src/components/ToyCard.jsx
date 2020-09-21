import React, { Component } from 'react';

class ToyCard extends Component {

  render() {

    const {id, name, image, likes} = this.props.toy

    // destructor our toy data here
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn">Like {'<3'} </button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }
// we need a clicking function for our two buttons, one for deleting and one for likes.
// I assume we need to pass in the id t make sure we are deleting and liking the right toy
}

export default ToyCard;
