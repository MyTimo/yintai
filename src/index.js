import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ShouyeReducer from './reducers/ShouyeReducer';
import FenleiReducer from './reducers/FenleiReducer';
import FenleiReducer2 from './reducers/FenleiReducer2';
import DetailReducer from './reducers/DetailReducer';
import QiangxianReducer from './reducers/QiangxianReducer';
import Routes from './renders/index';
import Footer from './components/Footer/index';
import GoodsReducer from './reducers/GoodsReducer';

const reducer =combineReducers({
	list:ShouyeReducer,
	lists:FenleiReducer,
	lis:FenleiReducer2,
	list_Detail:DetailReducer,
	goods:GoodsReducer,
	list_Qiangxian:QiangxianReducer
})

const store = createStore(reducer,{list:[],lists:[],lis:[],list_Detail:[],list_Qiangxian:[],goods:{slider:[],name:"",price:"",market:""}});


function add(){
	ReactDOM.render(<Provider store={store}><div><Routes /></div></Provider>, document.getElementById('root'));
}

store.subscribe(add)

add();
registerServiceWorker();
