export const createProject =(project)=>{
   // return{ //in here we usually return an object or an action

    //    type:'ADD_PROJECT',
    //    project:project
    //}
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //we're halting the dispatch by calling it directly through function
         //making async call to db
         dispatch({type:'CREATE_PROJECT',project});
            //dispatching the actual action^
        };
}
