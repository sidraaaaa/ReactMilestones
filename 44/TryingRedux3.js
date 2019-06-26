const {createStore}= Redux;
const initialState={
  todos:[],
  posts:[]
}
function myReducerFunc(state=initialState,action){
  if(state="ADD_TODO"){
    return{
      todos:[...state.push,action.todo] //creating new array
    }
  }
}
const store=createStore(myReducerFunc);
const todoAction={type:'ADD_TODO',todo:'buy milk'};
store.dispatch(todoAction);
