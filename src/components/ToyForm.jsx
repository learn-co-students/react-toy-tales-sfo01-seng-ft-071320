import React, { Component } from 'react';

class ToyForm extends Component {


 

  render() {
  // give the forms values
  // this looks like an onSubmit action 
  // go back in the labs for form details
    const {submit, toyChange, name, image } = this.props

    return (
    
      <div className="container">
        <form className="add-toy-form" onSubmit={submit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={toyChange} value={name}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={toyChange} value={image} />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }
// note to self the onSubmit event doesnt go on the submit button, it goes on the form tag
}

export default ToyForm;
