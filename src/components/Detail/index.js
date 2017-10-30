import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Detail.scss';

import '../../style/font_ii41e5eutmkdfgvi/iconfont.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class DetailUI extends Component{
	render(){
		return (
			<div id="Detail">
				<div className="hea">
					<div className="lef"><span className="iconfont">&#xe89f;</span></div>
					<div className="mid"><span>分类</span></div>
					<div className="rig"><span className="iconfont">&#xe606;</span></div>
				</div>
			</div>	
		)
	}
}

const mapState2props = (state,props)=>{
	return {
		listes:state.list_Detail
	}
}

const mapDispatch2props = (dispatch,props)=>{
	return {
		// getList:function (){
		// 	getData.bind(this)(dispatch)
		// },
		// getLists:function(){
		// 	getDatas.bind(this)(dispatch)
		// }
	}
}

const Detail = connect(mapState2props,mapDispatch2props)(DetailUI);

export default Detail;