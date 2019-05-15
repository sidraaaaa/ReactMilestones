import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
 render(){
     
  return this.props.todos.map((todo)=>(
    <TodoItem key={todo.id} todo={todo}/>
    //The above TodoItem also has a prop of todo so 
    //we are going to do the same thing in TodoItem.js
  ));
}
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;