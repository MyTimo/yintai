import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Fenlei.scss';

import '../../style/font_ii41e5eutmkdfgvi/iconfont.css';

class FenleiUI extends Component{
	componentDidMount() {
		this.props.getList();
	}
	render(){
		return(
			<div id="fenlei">
				<div className="hea">
					<div className="lef iconfont">&#xe89f;</div>
					<div className="mid">分类</div>
					<div className="rig">...</div>
				</div>
			</div>
		)
	}
}

function getData(dispatch){
	axios.get('/Services/Proxy.ashx?r=0.8250198110285878&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0')
	.then((res)=>{
		console.log(res);
		dispatch({
			type:"Fen",
			payload:res.data.data.data
		})
	})
}

const mapState2props = (state,props)=>{
	return {
		list:state.lists
	}
}

const mapDispatch2props = (dispatch,props)=>{
	return {
		getList:()=>{
			getData(dispatch)
		}
	}
}

const Fenlei = connect(mapState2props,mapDispatch2props)(FenleiUI);

export default Fenlei;