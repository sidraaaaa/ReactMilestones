import React from 'react';
import {Component} from 'react';
import Ninja from './Ninja';

class App extends Component {
  render(){
  return (
    <div className="App">
     <h1>Bring it on</h1>
     <h2>React with react js</h2>
     <Ninja name="Fred" age="15" /> 
     <Ninja name="George" age="17" /> 
    </div>
  );
}
//The properties passed in Ninja's component, will be imparsed in Ninja.js through class based Component 
}

export default App;
