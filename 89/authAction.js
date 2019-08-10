export signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
    }
}
