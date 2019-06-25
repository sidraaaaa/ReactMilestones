const {createStore}= Redux;
const initialState={
  todos:[],
  posts:[]
}
function myReducerFunc(state=initialState,action){		//reducer runs at first, before even we dispatch it.
  console.log(action,state);
}
const store=createStore(myReducerFunc);
const todoAction={type:'ADD_TODO',todo:'buy milk'};
store.dispatch(todoAction);
