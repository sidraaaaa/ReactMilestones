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
export const signUp=(newUser)=>{//auth service will store credentials and info etc from the signup form and the component will send data here,i.e. taking in newUser
return(dispatch,getState,{getFirebase,getFirestore })=>{
    const firebase=getFirebase();
    const firestore=getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
        //this will communicate with firebase and create a new user for us in firebase

    ).then((resp)=>{
        return firestore.collection('users').doc(resp.user.uid).set({
            firstName:newUser.firstName,
            lastName:newUser.lastname,
            initials:newUser.firstName[0]+newUser.lastName(0)

        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err=>{
            dispatch({type:'SIGNUP_ERROR',err})
        })
    })
}

}
