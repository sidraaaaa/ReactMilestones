import React from 'react'

function about() {
  return (
      //used in place of divs, if u dont
      //want your entities to wrap up
        //like a ghost element; doesnt show up in the dom but you might need it 
        //for jsx when you're retutrning smth
    <React.Fragment> 
      <h1>About</h1>
      <p> This is TodoList app v1.0.0
          </p>
    </React.Fragment>
  )
}
export default about;
