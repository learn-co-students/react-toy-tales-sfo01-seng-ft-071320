import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    const {id, name, image, likes} = this.props.toy
    const {onDelete, onUpdateLikes} = this.props
    // destructor our toy data here
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={() => onUpdateLikes(this.props.toy)}>Like {'<3'} </button>
        <button className="del-btn" onClick={() => onDelete(id)}>Donate to GoodWill</button>
      </div>
    );
  }
// we need a clicking function for our two buttons, one for deleting and one for likes.
// I assume we need to pass in the id t make sure we are deleting and liking the right toy
}

export default ToyCard;
