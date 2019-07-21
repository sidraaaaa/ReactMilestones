import React from 'react';
import {NavLink} from 'react-router-dom';
const SignedInLinks=()=>{
    return(
        <ul className="right">
            <li><NavLink to="/create">New Projects</NavLink></li>
            <li><NavLink to="/">Signed Out</NavLink></li>
            <li><NavLink to="/" className='btn btn-floating orange lighten-1'>SR</NavLink></li>
        </ul>
    )
    
}
export default SignedInLinks
