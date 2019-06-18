import React, { Component } from 'react'
import axios from 'axios'
//when we make a request we need axios

export class Post extends Component {
    state={
        post:null //we'll get back post
    }
    componentDidMount(){
        let id=this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(
            res=>{
                this.setState({
                    post:res.data
                })
                
            }
        )

        //.then() is used for that we received the response
        //after receiving the post we want to update the state of this component
       
        
    }
    render() {
        const post=this.state.post?(
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ):(
        <div className="center">loading post...</div>)
                return (
            <div className="container">
                {post} 
            </div>
        )//outputting post in return method
    }
}

export default Post
