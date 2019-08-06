import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { projects } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   
    projects: state.firestore.ordered.projects
  }
}

export default compose( //for joining diff hoc
  connect(mapStateToProps),
  firestoreConnect([ //this takes in array, collection :for which collection to go inside of firestore

    {collection:'projects'} //object

  ])//this mean whenever this component is loaded we waNT THE info from this collection
    //and whenever the data is changed the firestoreReducer willl sync the data state with that projects collection
)(Dashboard)
