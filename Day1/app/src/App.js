import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
state={
  todos:[
    {
      id:1,
      title:'Wake up early',
      completed:true
    },

    {
      id:2,
      title:'Perform ablution',
      completed:false
    },

    {
      id:3,
      title:'Pray fajr',
      completed:false
    }
  ]
}

 render(){

  return (
    <div className="App">
    <Todos todos={this.state.todos}/>
      
    </div>
  );
}
}

export default App;

