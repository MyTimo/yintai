import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Fenlei.scss';

import '../../style/font_ii41e5eutmkdfgvi/iconfont.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class FenleiUI extends Component{
	componentWillMount() {
		this.props.getList();
		this.props.getLists();
	}
	render(){
		
		var items = null;
		if(this.props.lis.lis4) {
			items = this.props.lis.lis4.map((item,index)=>{
			return 	<li key={item.categoryid} className="pit">
				 		<div className="pic1"><img src={item.imageurl} /></div>
				 		<div className="spa">{item.name}</div>
			 		</li>
			})																	 	
		}

		var itemes = null;
		if(this.props.lis.lis5) {
			itemes = this.props.lis.lis5.map((item,index)=>{
				return 	<li key={item.id} className="pit">
					 		<div className="pic1"><img src={item.imageurl} /></div>
					 		
				 		</li>
				})														 	
		}	

		var itemess = null;
		if(this.props.lis.lis7) {
			itemess = this.props.lis.lis7.map((item,index)=>{
				return 	<li key={item.categoryid} className="pit">
					 		<div className="pic1"><span className="it">{item.name}</span></div>
					 		
				 		</li>
				})														 	
		}	



		
		// document.querySelector('.pic1 span:nth-of-type(9)').value.slice(0,4);
									
		return(
			<div id="fenlei">
				<div className="hea">
					<div className="lef"><span className="iconfont">&#xe89f;</span></div>
					<div className="mid"><span>分类</span></div>
					<div className="rig"><span className="iconfont">&#xe606;</span></div>
				</div>
				<div className="inp">
					<div className="inpt">
						<input type="text" placeholder="搜索商品or品牌" />
						<span><i className="iconfont">&#xe610;</i></span>	
					</div>					
				</div>
				<div className="pip">
					<ul className="ios">
						{
							this.props.lists.map((item,index)=>{
								// console.log(this.props.lis)
								return <li className="he" active-class="red" key={item.id}>
								<Link to={'/Fenlei/' + item.id}>{item.name}</Link></li>
							})
						}					
					</ul>
					<div className="pics">
					{
						<div className="lp">	
							<div className="pic">
								<div className="tit"><span>{this.props.lis.lis3}</span></div>
								<Link to={'/detail/'}>
									<ul class="qw">
									 	{items}
									</ul>
								</Link>	
							</div>	
							<div className="pic">
								<div className="tit"><span>{this.props.lis.lis6}</span></div>
								<Link to={'/detail/'}>	
									<ul class="qw">
									 	{itemes}
									</ul>
								</Link>
							</div>	
							<div className="pic">
								<div className="tit"><span>{this.props.lis.lis8}</span></div>
								<Link to={'/detail/'}>		
								<ul class="qw">
								 	{itemess}
								</ul>
								</Link>
							</div>	
						</div>

					}													
																									
					</div>					
				</div>						
			</div>
		)

	}


}

function getData(dispatch){
	// console.log(this.props.match.params.film_id);
	// var num = Math.random();
	// console.log(num);
			// console.log(this);
	axios.get(`/Services/Proxy.ashx?r=0.6206932046652436&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0`)
	.then((res)=>{
		// console.log(res);
		dispatch({
			type:"Fen",
			payload:res.data.data.data
		})
	})
}

function getDatas(dispatch){
	axios.get(`/Services/Proxy.ashx?r=0.40535104772911246&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=${this.match.params.film_id}`)
	.then((res)=>{
		console.log(res);
		dispatch({
			type:"Fens",
			payload:{lis1:res.data.data.recommend,
				lis2:res.data.data.more,
				lis3:res.data.data.recommend.name,
				lis4:res.data.data.recommend.categoryrecommend,
				lis5:res.data.data.brand.brandrecommend,
				lis6:res.data.data.brand.name,
				lis7:res.data.data.more.morerecommend,
				lis8:res.data.data.more.name}
		})
	})
}

const mapState2props = (state,props)=>{
	return {
		lists:state.lists,
		lis:state.lis
	}
}

const mapDispatch2props = (dispatch,props)=>{
	return {
		getList:function (){
			getData.bind(this)(dispatch)
		},
		getLists:function(){
			getDatas.bind(this)(dispatch)
		}
	}
}

const Fenlei = connect(mapState2props,mapDispatch2props)(FenleiUI);

export default Fenlei;