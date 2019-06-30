import React,{Component} from 'react'
//import axios from 'axios' //not using this and removing state and axios coding too.
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux' //for obtaining HOC to connect redux with this component
//{connect} is a function to bring back a HOC component


//functional components cant use lifecycle hooks
//such as componentDidMount etc thats why using class based component
class Home extends Component {

  /*
  state = {
    posts: []
  }
*/

  /*
  componentDidMount(){
//the command below is asynchronous:takes sometime to go and do, doesnt happen automatically
//and the command below will return a promise:
//which means this action will complete at some point
//afterwards '.then()' fires once the link below is executed
//it contains a callback func 
axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        //console.log(res);
        this.setState({
          posts: res.data.slice(0,10) //to get the first 10
        });
      })
  }

  */



  render(){
    console.log(this.props)
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">

              <Link  to={'/'+post.id}>
              <span className="card-title red-text">{post.title}</span>
              </Link> 
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{ //taking in state of redux store as an argument
return{
  posts:state.posts //on RHS we're grabbing data from redux and assigning to the props of this component
//on LHS we're applying post property to our props
}
}
export default connect(mapStateToProps)(Home)
//connect is returning a HOC and that HOC is taking home component
// as an argument

//so if we need a data from redux store, we'll map that data to the props of the component
