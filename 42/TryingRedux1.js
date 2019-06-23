const {createStore}= Redux;                              //here we are grabbing something from Redux and then storing it into createStore
const initialState={                                     //Creating an initial state to pass it to the Reducer function
  todos:[],                                              //will insert data in todos and posts.
  posts:[]
}
function myReducerFunc(state=initialState,action){      //this is the reducer function, which takes in 2 params, the state of store and the action to apply on the store
  
}
const store=createStore(myReducerFunc);                 //this states that, this createStore has myReducerFunc, both are linked
