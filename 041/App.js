import React,{Component} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Images from './components/Images'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch> 
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path="/images" component={Images}/>
            <Route path="/:post_id" component={Post}/>
            
          </Switch>
      </div>
      </BrowserRouter> 
  );} //switch says that these routes with take precedence one at a time. not both(or many comp listed below) at a time 
}
export default App;
//here, home,about, contact are under <Route> tag.
//but <Navbar/> component isnot. so we use high order component
//to forcedly give powers to Navbar so that we can 
//enjoy the props.history.push i.e programmatic redirect
//in navbar too which will be our current page automatically redirecting to /about
