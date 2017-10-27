import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ShouyeReducer from './reducers/ShouyeReducer';
import FenleiReducer from './reducers/FenleiReducer';
import Routes from './renders/index';

const reducer =combineReducers({
	list:ShouyeReducer,
	lists:FenleiReducer
})

const store = createStore(reducer,{list:[],lists:[]});

function add(){
	ReactDOM.render(<Provider store={store}><div><Routes /></div></Provider>, document.getElementById('root'));
}

store.subscribe(add)

add();
registerServiceWorker();
