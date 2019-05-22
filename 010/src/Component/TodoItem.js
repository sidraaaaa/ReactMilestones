import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
getStyle=()=>{
    return{
        backgroundColor: 'f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration: this.props.todo.completed? 
        'line-through':'none'
    }
    //Ternary operator is used above
}


  render() {
    //destructuring the items in todo
    const{id, title}=this.props.todo;
    return (
      <div style={this.getStyle()}>
      <p>
          <input type='CheckBox' onChange={this.props.markComplete.bind(this,id)}/>
          {' '}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)} >x</button>
          </p>
        
      </div>
    )
  }
}
//Proptypes are defined outside the class
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
/*
const itemStyle = {
        backgroundColor:f4f4f4;
}*/
  }

  const btnStyle={
    background:"#ff0000",
    color:'#fff',
    border:'none',
    padding:'3px 7px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
  }

export default TodoItem