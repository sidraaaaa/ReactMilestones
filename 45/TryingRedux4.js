const {createStore}= Redux;
const initialState={
  todos:[],
  posts:[]
}
function myReducerFunc(state=initialState,action){
  if(action.type=="ADD_TODO"){
    return{
      ...state,                        //passing posts because getState() tells us about the 
                                        //things updated here
      todos:[...state.push,action.todo] //creating new array and overriding the previous objec
    }
  }
  
  if(action.type=="ADD_POST"){
    return{
      ...state, 
       posts:[...state.push,action.post]
    }
 
    
  }
  
  
const store=createStore(myReducerFunc);

store.subscribe(()=>{
  console.log("Store updated");
  console.log(store.getState());
})
const todoAction={type:'ADD_TODO',todo:'buy milk'};
store.dispatch(todoAction);
store.dispatch({type:'ADD_TODO',todo:'buy glitter'});
store.dispatch({type:'ADD_POST',post:'Decorate the room'});
