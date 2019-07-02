//action reducers are used when complex coding(like asynchronous tabs to go out and grab some external data) is done 
//or when there are more dispatches
export const deletePost=(id)=>{
    return {//returning an object
        type:'DELETE_POST',
        id:id //or we can write id only because of es6

    }
}
