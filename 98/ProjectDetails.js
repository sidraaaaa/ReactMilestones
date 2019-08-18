import React from 'react'
//we need to connect this to firebase and also redux state i.e using HOC connect and firestoreConnect
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

const ProjectDetails=(props)=> {
    //const id=props.match.params.id; //this is a router information
    const{project,auth} =props; //applying destructuring and getting project property
                        //from the props down from mapStateToProps
    
    
    
    if (!auth.uid) return <Redirect to='/signin'/>
    if(project){
        //returning jsx
        return(
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project.title} </span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                            <div>July 12, 2019</div> 

                        </div>
                    </div>
                </div>
        )
    }
    else{
        return (
        <div className="container center">
            <p>Loading project...</p>
        </div>
            )

    }
    
}
const mapStateToProps=(state,ownProps)=>{ //ownProps is a prop of this component before we attach anything to it

    const id=ownProps.match.params.id; //copied this from above but id or props arent accessible but we are getting it on a second param
    const projects=state.firestore.data.projects;
    const project=projects? projects[id]:null //using ternary operator '?' assuming that we already have projects(object),
                                            // and if we have it/true,
                                            // then we want project(individuals with key like SZ21681IHK4) on the projects object with 
                                            //that ID and then we will put that project into this constant

    
    return{ //we return an object over here that represents what we want to attach to our props
            //now getting in a single individual project from project collection after firestoreConnect execution
            //redux state to props
            project:project, //after doing all of this stuff this ProjectDetails.js will have a prop which will contain the project which we return in here
            auth:state.firebase.auth
        }
}
export default compose(
connect(mapStateToProps),
firestoreConnect([ //here we pass an array of objects, and rn we want one object i.e. collections, which means we are still listening to projects
    //after a single project
    {collection:'projects'} //here project is synced with our state and we've access to our project collection now,
                            //on the state via a firestore object

])
)(ProjectDetails)
