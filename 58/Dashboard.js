import React,{component} from 'react';
import Notifications from './Notifications';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"> </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>

                        
                
                </div>
                
            </div>
        )
    }
}

export default Dashboard
