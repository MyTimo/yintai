import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './Fenlei.scss';

import '../../style/font_uk6b27d47j1hsemi/iconfont.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'


var sb = 88;
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
						<Link to={`/Detail/${item.jumpurl.substring(item.jumpurl.indexOf('searchCondition=N%3D')+20,item.jumpurl.indexOf('searchCondition=N%3D')+28)}`}>

					 		<div className="pic1"><img src={item.imageurl} /></div>
					 		<div className="spa">{item.name}</div>
				 		</Link>
			 		</li>
			})																	 	
		}

		var itemes = null;
		if(this.props.lis.lis5) {
			itemes = this.props.lis.lis5.map((item,index)=>{
				return 	<li key={item.id} className="pit">
							<Link to={`/Detail/${item.jumpurl.substring(item.jumpurl.indexOf('searchCondition=N%3d')+20,item.jumpurl.indexOf('searchCondition=N%3d')+28)}`}>
					 			<div className="pic1"><img src={item.imageurl} /></div>
					 		</Link>
				 		</li>
				})														 	
		}	

	
		var itemess = null;
		if(this.props.lis.lis7) {
			itemess = this.props.lis.lis7.map((item,index)=>{
				return 	<li key={item.categoryid} className="pit">
						<Link to={`/Detail/${item.jumpurl.substring(item.jumpurl.indexOf('searchCondition=N%3D')+20,item.jumpurl.indexOf('searchCondition=N%3D')+28)}`}>
					 		<div className="pic1"><span className="it">{item.name}</span></div>
					 	</Link>	
				 		</li>
				})														 	
		}	


		
		
		
									
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
				<div className="hdf">
					<div className="pip">
						<ul className="ios">
							{
								this.props.lists.map((item,index)=>{
									// console.log(this.props.lis)
									return <li className="he" key={item.id}>
									<NavLink to={'/Fenlei/' + item.id}  onClick={()=>{this.props.sb=item.id}}>{item.name}</NavLink></li>
								})
							}					
						</ul>
					</div>
					<div className="pou">			
						<div className="pics">
						{
							<div className="lp">	
								<div className="pic">
									<div className="tit"><span>{this.props.lis.lis3}</span></div>
									
										<ul class="qw">
										 	{items}
										</ul>
									
								</div>	
								<div className="pic">
									<div className="tit"><span>{this.props.lis.lis6}</span></div>
										
										<ul class="qw">
										 	{itemes}
										</ul>
									
								</div>	
								<div className="pic">
									<div className="tit"><span>{this.props.lis.lis8}</span></div>
											
									<ul class="qw">
									 	{itemess}
									</ul>
									
								</div>	
							</div>

						}													
																										
						</div>					
					</div>	
				</div>	
									
			</div>
		)

	}


}

// var sb = 88;

// if(this.props.match.params.film_id){
// 	sb = this.props.match.params.film_id
// }else{
// 	sb = 88;
// }

function getData(dispatch){
	// console.log(this.props.match.params.detail_id);
	// var num = Math.random();
	// console.log(num);
			// console.log(this);


	axios.get(`/Services/Proxy.ashx?r=0.6206932046652436&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0&categoryid=${this.match.params.film_id}`)
	.then((res)=>{
		// console.log(res);
		dispatch({
			type:"Fen",
			payload:res.data.data.data
		})
	})
}

// var sb = 88;

function getDatas(dispatch){

	axios.get(`/Services/Proxy.ashx?r=0.7862047651984894&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=${this.match.params.film_id}`)
	.then((res)=>{
		console.log(sb);
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