export const createProject =(project)=>{
   // return{ //in here we usually return an object or an action

    //    type:'ADD_PROJECT',
    //    project:project
    //}
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //we're halting the dispatch by calling it directly through function
         //making async call to db
         const firestore=getFirestore();
            firestore.collection('projects').add({
                //object or document
                ...project,//the project which we received from createProject 
                authorFirstName:'Jane',
                authorLastName:'sport',
                authorId:123,
                createdAt:new Date()
            }).then( //takes in a arrow/call back func
                ()=>{
                    dispatch({type:'CREATE_PROJECT',project});

                }
            ).catch((err)=>{
                dispatch({type:'CREATE_PROJECT_ERROR',err});
            })
            //above will create a new document in our firestore db and this code is async i.e. it will take some time to complete it and this is async so
            //it means it will return a promise i.e. look at the time when it is going to complete 
            //dispatching the actual action^
        }
};
