    
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer//syncing fb info including authentication too
                          //this will sync auth status on fb to our redux state and will load it in our firebase object here.

});



export default rootReducer
