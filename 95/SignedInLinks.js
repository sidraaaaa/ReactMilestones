import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)


//this is a functional comp therefore we need to takthe belowe in props first then we can say
//so when we click on <a> tag of sign out,
//it will fire props.signOut immediately (not putting () in the end of signOut because it will immediately fire w/o clicking)
//then it will go down to mapDispatchToProps which dispatches 'dispatch(signOut())' action creator i.e. authActions.js and it has signOut func
//inside action creator we sign out using firebase to auth().signout
//then we dispatch an action of type: 'signout_success'
//then inside authReducer.js we can see logout success on console.log 
