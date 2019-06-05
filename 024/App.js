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
//filter out some itrems; non destructive method, in filter we call call back method
let ninjas=this.state.ninjas.filter(ninja=>{
  return ninja.id!==id
});
this.setState({
  ninjas:ninjas
})
}
//in return true and false condition is passed. if true, then ninja object (recycled through whole
//array will remain the same in ninjas). if false condition, then ninja recycled through will take that object and delete it in ninjas
//and filter it out

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
