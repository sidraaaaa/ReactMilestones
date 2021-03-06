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
    return (
      <div style={this.getStyle()}>
      <p>
          <input type='CheckBox'></input>
          {this.props.todo.title}</p>
        
      </div>
    )
  }
}
//Proptypes are defined outside the class
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
/*
const itemStyle = {
        backgroundColor:f4f4f4;
}*/
  }

export default TodoItem
