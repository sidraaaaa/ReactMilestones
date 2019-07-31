import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//applyMiidleWare func takes in a list of middleware
// and it turns into a store enhancer
// and we could add many diff middlewares in it
//thunk returns a func inside our action creators which can then interact with a db
import {getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';

const store=createStore(rootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})));
//withExtraArgument allows to pass more args in projectAction's argument

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
