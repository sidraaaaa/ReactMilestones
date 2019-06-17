import React,{Component} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path="/:post_id" component={Post}/>
      </div>
      </BrowserRouter> 
  );}
}
export default App;
//here, home,about, contact are under <Route> tag.
//but <Navbar/> component isnot. so we use high order component
//to forcedly give powers to Navbar so that we can 
//enjoy the props.history.push i.e programmatic redirect
//in navbar too which will be our current page automatically redirecting to /about
