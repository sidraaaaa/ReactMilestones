import React,{Component} from 'react'
import axios from 'axios'
//functional components cant use lifecycle hooks
//such as componentDidMount etc thats why using class based component
class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
//the command below is asynchronous:takes sometime to go and do, doesnt happen automatically
//and the command below will return a promise:
//which means this action will complete at some point
//afterwards '.then()' fires once the link below is executed
//it contains a callback func 
axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,10) //to get the first 10
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
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
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home
