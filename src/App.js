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
    id: 0,
    name: "",
    image: "",
    likes: 0,
 
  }

// fetch the toys
  componentDidMount(){
    const url = `http://localhost:3000/toys`
    fetch(url)
    .then(res => res.json())
    .then(toys => this.setState({
      toys: toys
    }))
    // success
  }


// handle the toys
  handleToyChange = (e) => {
    console.log('toyChange',e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log('did i submit a post?')
    e.preventDefault()

    let toy = {
      name: this.state.name,
      image: this.state.image,
      likes: 0,
    }
    fetch(`http://localhost:3000/toys`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }, 
      body:JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(toy => {
      this.setState((prevState) => {
        return { 
          toys: [...prevState.toys, toy]
        }})
    })
    e.target.reset()
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleDelete = (toyId) => {
    fetch(`http://localhost:3000/toys/${toyId}`,{
      method: "Delete",
    })
    .then(res => {
    const deletedToy = this.state.toys.filter(toy => toy.id !== toyId)
    this.setState({ toys: deletedToy });
  }
    )}

    handleLikes = (toy) => {
console.log(toy)

      let updateLikes = {
        likes: parseInt(toy.likes) + 1 
      }

      fetch(`http://localhost:3000/toys/${toy.id}`,{
        method: "PATCH",
        headers:{
          "Content-Type" : "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(updateLikes)
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        const likeToy = this.state.toys.filter(toy => toy.id !== json.id)
        likeToy.push(json)
        console.log(likeToy)
        this.setState({toys: likeToy}) //all the toys with our new updated toy
          // console.log('hello from handleLikes')
      })}


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm 
          submit={this.handleSubmit}
          toyChange={this.handleToyChange}
          name={this.state.name}
          image={this.state.image}
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
        toys={this.state.toys}
        onDelete={this.handleDelete}
        onUpdateLikes={this.handleLikes}
        />
      </>
    );
  }

}

export default App;
