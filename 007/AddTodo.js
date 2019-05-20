import React, { Component } from 'react'

export class AddTodo extends Component {
  state={
    title:''
  }
//component state; we dont need to go up 
  onChange=(e)=> this.setState({title: e.target.value});
//setting the title, whatever we type in
  render() {
    return (
      <form style ={{display:'flex'}}>
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
