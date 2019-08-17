import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'
const Navbar=(props)=>{
    const {auth}= props;
    const links=auth.uid?<SignedInLinks/> : <SignedOutLinks/>;

    //getting auth property that we get from the props
    
    return(
        <nav className="nav-wrapper grey darken-2">
        <div className="container">
            <Link to="/" className="brand-logo">MGMTTOOL</Link>
            {links}
        </div>
        </nav>
    )
    
}
const mapStateToProps=(state)=>{
   
    return{
        auth:state.firebase.auth
        //now we can access this property in this compoenent
    }
}
export default connect(mapStateToProps)(Navbar)
