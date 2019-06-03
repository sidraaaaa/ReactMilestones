import React from 'react';
import {Component} from 'react';
import Ninja from './Ninja';
import AddNinja from './AddNinja';

class App extends Component {
state={
  ninjas:[
  {name:"Fred", age:"15" ,task:"done", id:1},
  {name:"Greg", age:"18" ,task:"not done", id:2},
  {name:"George", age:"20", task:"done", id:3}
]

}

addNinja=(ninja)=>{
  //console.log(ninja);
  ninja.id=Math.random();
  //this ninjas is the cc of above ninjas
  let ninjas=[...this.state.ninjas,ninja]
  this.setState({
  ninjas: ninjas //assigning new array value
  })
}
deleteNinja=(id)=>{
console.log(id);
}


  render(){
  return (
    <div className="App">

     <h1>Check it off</h1>
     <h2>React with react js</h2>
     <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/> 
     <AddNinja addNinja={this.addNinja}/>    
    </div>
  );
}
//The properties passed in Ninja's component, will be imparsed in Ninja.js through class based Component 
}

export default App;
