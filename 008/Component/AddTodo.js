import React, { Component } from 'react'

export class AddTodo extends Component {
  state={
    title:''
  }
//component state; we dont need to go up 
//now, whenever the val is passed in, it will be assigned 
//to name 
  onChange=(e)=> this.setState({[e.target.name]:
     e.target.value});

  onSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title:''});
  }
//setting the title, whatever we type in
  render() {
    return (
      <form onSubmit={this.onSubmit} style ={{display:'flex'}}>
          <input 
          type='text' 
          name='title'
          style={{flex:'10', padding:'5px'}}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
          />
          <input 
          type='submit'
          value='submit'
          className='btn'
          style={{flex: '1'}}
          />
        </form>
    
    
    )
  }
}

export default AddTodo
