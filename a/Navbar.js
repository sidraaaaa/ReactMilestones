import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'
const Navbar=(props)=>{ 
    const {auth,profile}= props;
    const links=auth.uid?<SignedInLinks profile={profile}/> : <SignedOutLinks/>;

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
        auth:state.firebase.auth,
        //now we can access this property in this compoenent
        //firebase/auth has many properties including email and uid too, but it doesnt have firstName and lastName
        //these details are store in firestore property
        //we're trying to sync our firestore/profile with firebase/auth and we're using the same uid in both of them
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)
