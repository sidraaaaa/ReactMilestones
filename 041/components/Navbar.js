import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';

//higher order component/withRouter to forcely give router powers
//i.e history.push or the props to a component which is
//not used with <Route> tag.

const Navbar = (props) => {
 // setTimeout(()=>{
 //   props.history.push('/about')},2000)
  
  return (
    <nav className="nav-wrapper brown darken">
      <div className="container">
        <a className="brand-logo">Poke Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/images">Images</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default withRouter(Navbar)
//applying the props to Navbar or supercharging the component
