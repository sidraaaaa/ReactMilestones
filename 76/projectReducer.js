const initState = {
    projects:[
    {id:'1',title:'help me find peach', content:'some extra lil offer'},
    {id:'2',title:'join admissions team', conetent:'project workout'},
    {id:'3',title:'focus on scholarship details',content:'check out your whole summary'}
]
}
//projectReducer received the project which is dispatched from createProject.js and projectActions.js


const projectReducer = (state = initState, action) => {
  //first checking the action type
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project',action.project)
  }
  return state;
};

export default projectReducer;
