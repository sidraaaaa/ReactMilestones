import React,{Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
//connecting dashboard component with redux store, and connect is func which returns hoc:glue layer

export class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const {projects}=this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications projects={projects}/>
                    </div>

                        
                
                </div>
                
            </div>
        )
    }
}
const mapStatetoProps=(state)=>{
    return{
        projects:state.object.projects
    }
}

export default connect()(Dashboard)
