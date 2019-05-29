import React from 'react';

//building functional component:
//when we dont need states and are concerned with UI
//destructuring directly as we receive the props
//const{ninjas}=props; into const Ninjas=({ninjas})
const Ninjas=({ninjas})=>{
    //props help to transfer data fom parent to child
   //this is a js func we can add js in it
       // console.log(this.props);
       //we can get props by destructuring
       //we dont need to call the properties individually by this.props.name in return
      // const {name,age}=this.props;
      
      const ninjaList=ninjas.map(ninja=>
        {
            return (
             <div className="ninja" key={ninja.id}>
                <div>name:{ninja.name}</div>
                <div>age:{ninja.age}</div>
                <div>task:{ninja.task}</div>
            
            </div>
                   )
        }                       )
        return (
          <div className="ninja-list">
              {ninjaList}
          </div>
           
        )
    }

export default Ninjas
