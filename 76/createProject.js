import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectActions';
import {connect} from 'react-redux';
//connecting this component with the redux store


class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state)
    //this.state is a project and it will pass this project down to the func createProject
    
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create your new Project</h5>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project content goes here!</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Whoppy Create Project!</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
return{
  //whatever property we want to add to the props, we'll add it to this object
  createProject:(project)=>dispatch(createProject(project))
}
}

export default connect(null,mapDispatchToProps)(CreateProject)
//used null because we dont have state in this component, and the first
//param always used in connect func is state
