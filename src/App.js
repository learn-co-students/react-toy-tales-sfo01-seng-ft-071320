import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: [],
    name: "",
    image: "",
    likes: 0,
    id: 0
  }

  componentDidMount(){
    const url = `http://localhost:3000/toys`
    fetch(url)
    .then(res => res.json())
    .then(toys => this.setState({
      toys: toys
    }))
    // success
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.state.addNewToy()
    e.target.reset()
  }


  handleToyChange= (e) => {
    console.log('toyChange',e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  addNewToy = (toy) =>{
    this.setState({
     toys: [...this.state.toys, toy]
    })
  }

 

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm 
          submit={(e) => this.handleSubmit(e)}
          toyChange={this.handleToyChange}
          addToy={this.addNewToy}
          />
          // toy form info here
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
