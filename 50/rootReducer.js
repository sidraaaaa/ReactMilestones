const initState={
    posts:[
    {id:'1',title:'Squirtle laid an egg', body:'lorem ipsim'},
    {id:'2',title:'this is a title',body:'this is its body'},
    ]
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='DELETE_POST'){
        //filter method doesnt alter orig array b ut creates the new one
        let newPosts=state.posts.filter(
            post=>{ //takinf in individual post cycling through at the time
                return action.id!==post.id

            }
        );
        return{
            ...state, //all of the properties are spreaded first and then we override the newPosts array
            posts:newPosts
        }
    }
return state;
}
export default rootReducer 
