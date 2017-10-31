import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Detail.scss';

import '../../style/font_uk6b27d47j1hsemi/iconfont.css';

import '../Footer/index';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class DetailUI extends Component{
	componentDidMount() {
		console.log(this);
		var id = 50003759;
		this.props.getListes(id);		
	}
	render(){
		var items = null;
		if(this.props.listes){
			items = this.props.listes.map((item,index)=>{
				return 	<div>
							<img src={item.image} />
						</div>
			})	
		}
		
		return (
			<div id="Detail">
				<div className="hea">
					<div className="lef"><span className="iconfont">&#xe89f;</span></div>
					<div className="mid"><span>分类</span></div>
					<div className="rig"><span className="iconfont">&#xe606;</span></div>
				</div>
				<div className="navs">
					<ul>
						<li><span>默认</span><i></i></li>
						<li><span>销量</span><i></i></li>
						<li><span>价格</span><b><i className="iconfont">&#xe510;</i><i className="iconfont">&#xe501;</i></b></li>
						<li><span>折扣</span><b><i className="iconfont">&#xe510;</i><i className="iconfont">&#xe501;</i></b></li>
						<li><span>筛选</span><i></i></li>
					</ul>	
				</div>
				<div>
					{
						items						
					}
				</div>	
		
			</div>	
		)
	}
}



function getDataes(dispatch,id){
	console.log(this);
	if(id){
		axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A0%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${id}%22%2C%22keyword%22%3A%22%22%7D`)
	.then((res)=>{
		// console.log(res);
		dispatch({
			type:"Detail_type",
			payload:res.data.data.product_list
		})
	})
	}
}

const mapState2props = (state,props)=>{
	return {
		listes:state.list_Detail
	}
}

const mapDispatch2props = (dispatch,props)=>{
	return {
		getListes:function (id){
			getDataes.bind(this)(dispatch,id)
		}
	}
}

const Detail = connect(mapState2props,mapDispatch2props)(DetailUI);

export default Detail;