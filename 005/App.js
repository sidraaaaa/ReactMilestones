import React,{Component} from 'react';
import './App.css';
import Todos from './Component/Todos';

class App extends Component {
  state={
    todos:[
      {id:1, title:'Wake up early', completed:true},
      {id:2, title:'Perform ablution', completed:true},
      {id:3, title:'Pray fajr', completed:false}
    ]

  }
  //Toggle Complete
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    })});
  }

  //Delete
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id
      !==id)]});
  }

  render() {
    return(
      <div className='App'>
      <Todos todos= {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );}
}



export default App;
