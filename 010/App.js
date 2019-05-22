import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from
 'react-router-dom';
import './App.css';
import Header from './Component/layout/header';
import Todos from './Component/Todos';
import AddTodo from './Component/AddTodo';
import about from './Component/pages/about';
//import uuid from 'uuid'; dont need this when using post req
import axios from 'axios';


class App extends Component {
  state={
    todos:[]

  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res=>this.setState({todos:res.data}));
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
axios.delete(`https://jsonplaceholder.typicode.com/todos/$
{id}`)
.then(res=> this.setState({todos:[...this.state.todos.filter(todo=>todo.id
  !==id)]}));
  //delete on the server also update the ui

   
  }

  addTodo=(title)=>{
  /*{
    //adding the title to our state
    //making a copy through spread operator
    //todos is state obj
    const newTodo={// uuid= make sep ids when u create new obj
      id:uuid.v4(), //when using json placeholder, they give id
      title,  //for ES6 this is same as title=title
      completed: false
    }
    */

    
      axios.post('https://jsonplaceholder.typicode.com/todos',
      {title,
      completed:false})
  
      .then(res=>this.setState({todos:[...this.state.todos, res.data]}));
   
      }

  render() {

    return(
      <Router>
          <div className='App'>
                <div className="container">
                    <Header/>
                    <Route exact path="/" render={props=>(
                      <React.Fragment>
                        <AddTodo addTodo={this.addTodo}/>
                        <Todos todos= {this.state.todos} markComplete=
                        {this.markComplete} delTodo={this.delTodo}/>
                      </React.Fragment>
                    )}/>

                    <Route path="/about" component={about}/>
                </div>

            </div>
        </Router>
    );}
}



export default App;
