import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import ReactDOM from 'react-dom';


import axios from 'axios';

import './Detail.scss';

import '../../style/font_uk6b27d47j1hsemi/iconfont.css';

import Footer from '../Footer/index';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class DetailUI extends Component{
	componentDidMount() {
		//this.node.scrollIntoView();
		console.log(this);
		console.log(this.props.index);
		this.props.getListes();
		//this.props.load();
		window.addEventListener("scroll",this.props.lazyLoad.bind(this));
	}
	render(){
		var man = null;
		if(this.props.listes.promotionlabel){
			man = this.props.listes.promotionlabel
		}
		var items = null;
		if(this.props.listes){
			items = this.props.listes.map((item,index)=>{
				return 	<div key={item+index}>
							<li name="21-465-6631" key={item.brandid}>
								<Link to={'/Goods/' + item.groupno}>
									<dl className="cf">
										<dd>
											<img src={item.image} width="90" height="120" />
										</dd>
										<dt>
											<p className="tit">{item.name}</p>
											<div className="tip"><span className={item.promotionlabel!=null?'dell':'delll'}>{item.promotionlabel}</span>	</div>
											<p className="shi">
												<span className="shichang">￥{item.price}.00</span>
											</p>
											<p className="int ">
												<span className="pink">￥{item.promotion_price}.00</span>
											</p>
										</dt>
									</dl>
								</Link>
							</li>							
						</div>
			})	
		}
		
		return (
			<div id="Detail">
				<div className='load'>Loading......</div>
				<div className='list'>
					<ul>
						<li>
							<Link to={'/'}>首页</Link>
						</li>
						<li>
							<Link to={'/Fenlei'}>分类</Link>
						</li>
						<li>
							<Link to={'/Shoppingcar'}>购物车</Link>
						</li>
						<li>
							<Link to={'/Mine'}>我的银泰</Link>
						</li>
					</ul>
				</div>
				<div className="hea">
					<a onClick={()=>{this.props.history.goBack()}} className="lef"><span className="iconfont">&#xe89f;</span></a>
					<div className="mid"><span>{this.props.listes.name}</span></div>
					<div className="rig"><span className="iconfont" onClick={this.props.list.bind(this)}>&#xe606;</span></div>
				</div>
				<div className="navs">
					<ul>
						<li className='default0'><span onClick={this.props.default0.bind(this)}>默认</span><i></i></li>
						<li className='sales'><span onClick={this.props.sales.bind(this)}>销量</span><i></i></li>
						<li className='price'><span onClick={this.props.price.bind(this)}>价格</span><b><i className="iconfont price-top ii">&#xe510;</i><i className="iconfont price-bot ii">&#xe501;</i></b></li>
						<li className='discount'><span onClick={this.props.discount.bind(this)}>折扣</span><b><i className="iconfont discount-top ii">&#xe510;</i><i className="iconfont discount-bot ii">&#xe501;</i></b></li>
						<li className='choose'><span onClick={this.props.choose.bind(this)}>筛选</span><i></i></li>
					</ul>	
				</div>
				<ul className="del">
					{
						items						
					}
				</ul>	
				<Footer />
			</div>	
		)
	}
}



function getDataes(dispatch){
	console.log(this);
	
	axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A0%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
	.then((res)=>{
		console.log(res);
		dispatch({
			type:"Detail_type",
			payload:res.data.data.product_list
		});
		load_flag = !load_flag;
		if(!load_flag){
			document.querySelector('.load').style.display = 'none';
		}
	})
	
}

const mapState2props = (state,props)=>{
	return {
		listes:state.list_Detail
	}
}

var lazyData = {
	flag:true,
	index:2
}
var sort = 0;
var sort_flag_price = true;
var sort_flag_discount = true;
var load_flag = true;
var list_flag = true;

const mapDispatch2props = (dispatch,props)=>{
	return {
		//初始页面，请求数据
		getListes:function (){
			// console.log(this);
			getDataes.bind(this)(dispatch)
		},
		//懒加载
		lazyLoad:function(e){
			//console.log(this)
			var all = document.documentElement.scrollHeight;
			var top = document.documentElement.scrollTop;
			if(all-top < 800){
				if(lazyData.flag){
					lazyData.flag = !lazyData.flag;				
					axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${sort}%2C%22page_index%22%3A${lazyData.index}%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.props.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
					.then((res)=>{
						console.log(res);
						dispatch({
							type:'lazyLoad',
							payload:res.data.data.product_list
						})
						lazyData.index += 1;
						lazyData.flag = !lazyData.flag;
					})
				}
			}
		},
		//点击热销按钮，重新请求数据，改变页面内容，按钮下划线
		sales:function(){

			document.querySelector('.load').style.display = 'block';
			document.querySelector('.ii').style.color = '#6d6d6d';			
			sort = 5;
			axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${sort}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.props.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
			.then((res)=>{
				dispatch({
					type:'Sort',
					payload:res.data.data.product_list
				});
				document.querySelector('.load').style.display = 'none';
			});
			document.querySelector('.sales').className += ' red';
			document.querySelector('.discount').className = 'discount';
			document.querySelector('.price').className = 'price';
			document.querySelector('.default0').className = 'default0';
			document.querySelector('.choose').className = 'choose';
		},
		//按价格排序，通过flag的值发送不同ajax实现正序倒序
		price:function(){
			document.querySelector('.load').style.display = 'block';

			document.querySelector('.discount-bot').style.color = '#6d6d6d';
			document.querySelector('.discount-top').style.color = '#6d6d6d';
			if(sort_flag_price){
				sort = 3;
				document.querySelector('.price-top').style.color = 'red';
				document.querySelector('.price-bot').style.color = '#6d6d6d';
				axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${sort}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.props.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
				.then((res)=>{
					dispatch({
						type:'Sort',
						payload:res.data.data.product_list
					})
					sort_flag_price = !sort_flag_price;
					document.querySelector('.load').style.display = 'none';
				})
			}else{
				sort = 4;
				document.querySelector('.price-bot').style.color = 'red';
				document.querySelector('.price-top').style.color = '#6d6d6d';
				axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${sort}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.props.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
				.then((res)=>{
					dispatch({
						type:'Sort',
						payload:res.data.data.product_list
					})
					sort_flag_price = !sort_flag_price;
					document.querySelector('.load').style.display = 'none';
				})
			}
			document.querySelector('.price').className += ' red';
			document.querySelector('.sales').className = 'sales';
			document.querySelector('.discount').className = 'discount';
			document.querySelector('.default0').className = 'default0';
			document.querySelector('.choose').className = 'choose';
		},
		//按折扣排序，通过flag的值发送不同ajax实现正序倒序
		discount:function(){
			document.querySelector('.load').style.display = 'block';

			document.querySelector('.price-top').style.color = '#6d6d6d';
			document.querySelector('.price-bot').style.color = '#6d6d6d';

			if(sort_flag_discount){
				document.querySelector('.discount-bot').style.color = '#6d6d6d';
				document.querySelector('.discount-top').style.color = 'red';
				sort = 7;
				axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${sort}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.props.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
				.then((res)=>{
					dispatch({
						type:'Sort',
						payload:res.data.data.product_list
					})
					sort_flag_discount = !sort_flag_discount;
					document.querySelector('.load').style.display = 'none';
				})
			}else{
				document.querySelector('.discount-bot').style.color = 'red';
				document.querySelector('.discount-top').style.color = '#6d6d6d';
				sort = 8;
				axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${sort}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.props.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
				.then((res)=>{
					dispatch({
						type:'Sort',
						payload:res.data.data.product_list
					})
					sort_flag_discount = !sort_flag_discount;
					document.querySelector('.load').style.display = 'none';
				})
			}
			document.querySelector('.discount').className += ' red';
			document.querySelector('.sales').className = 'sales';
			document.querySelector('.price').className = 'price';
			document.querySelector('.default0').className = 'default0';
			document.querySelector('.choose').className = 'choose';
		},
		//默认排序
		default0:function(){
			document.querySelector('.ii').style.color = '#6d6d6d';
			document.querySelector('.load').style.display = 'block';
			sort = 0;
			axios.get(`/Services/Proxy.ashx?r=201710311602&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${sort}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.props.match.params.detail_id}%22%2C%22keyword%22%3A%22%22%7D`)
			.then((res)=>{
				dispatch({
					type:'Sort',
					payload:res.data.data.product_list
				});
				document.querySelector('.load').style.display = 'none';
			});
			document.querySelector('.default0').className += ' red';
			document.querySelector('.sales').className = 'sales';
			document.querySelector('.price').className = 'price';
			document.querySelector('.discount').className = 'discount';
			document.querySelector('.choose').className = 'choose';
		},
		choose:function(){
			document.querySelector('.ii').style.color = '#6d6d6d';
			document.querySelector('.choose').className += ' red';
			document.querySelector('.sales').className = 'sales';
			document.querySelector('.price').className = 'price';
			document.querySelector('.default0').className = 'default0';
			document.querySelector('.discount').className = 'discount';
		},
		load:function(){
			if(load_flag){
				document.querySelector('.load').style.display = 'block';
			}else{
				document.querySelector('.load').style.display = 'none';

			}
		},
		list:function(){
			if(list_flag){
				document.querySelector('.list').style.display = 'block';
				list_flag = !list_flag;
			}else{
				document.querySelector('.list').style.display = 'none';
				list_flag = !list_flag;
			}
		}
	}
}

const Detail = connect(mapState2props,mapDispatch2props)(DetailUI);

export default Detail;









