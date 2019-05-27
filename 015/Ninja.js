import React, { Component } from 'react'

export class Ninja extends Component {
    //props help to transfer data fom parent to child
    render() {//this is a js func we can add js in it
       // console.log(this.props);
       //we can get props by destructuring
       //we dont need to call the properties individually by this.props.name in return
       const {name,age}=this.props;
        return (
            
            

            <div>
                <p>
                build customized web apps
                Hello !
                <div>name:{name}</div>
                <div>age:{age}</div>
                </p>
            </div>
        )
    }
}

export default Ninja
