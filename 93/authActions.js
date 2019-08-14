export const signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({ type:'LOGIN_SUCCESS'
        });
    }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err});
        });
        
        
    }
}
export const signOut=()=>{
    //getFirebase is used to log out
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'});

            //this is an async signout therefore, we can call .then() call back function
            // and then when this is complete we can dispatch an action i.e. sign out has a success 
        });
    }
}
