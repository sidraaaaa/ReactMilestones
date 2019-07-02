import React, { Component } from 'react'
import {connect} from 'react-redux'
//import axios from 'axios'
//when we make a request we need axios

export class Post extends Component {
    /*state={

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
       
        
    } */
    handleClick=()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/'); // / this means home page
    }
    render() {
        console.log(this.props)
        const post=this.props.post?(
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <div className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </div>
                </div>
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
const mapStateToProps=(state,ownProps)=>{
    let id=ownProps.match.params.post_id //post_id from app.js, where we grabbed it
    return{
        post:state.posts.find(
            post=>post.id===id
        )
    }
}
const mapDispatchToProps=(dispatch)=>{ //method as arg
return{
    deletePost:(id)=>{
        dispatch({type:'DELETE_POST',id:id})
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)
