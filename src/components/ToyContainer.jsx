import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => { 

  // const {toyDelete} = this.props
  // always pass in props as an argument when its a functional component
  return(
    <div id="toy-collection">
      { props.toys.map(toy => (
        <ToyCard key={toy.id} toy={toy} onDelete={props.onDelete} onUpdateLikes={props.onUpdateLikes} />
      )) }
    </div>
  );
}
// now that we have iterated our toys and passed then to the toycard child we can pass in specific data 
//success

export default ToyContainer;
