
import React ,{ Component } from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import './goods.scss'

import { Carousel } from 'antd';
import 'antd/dist/antd.css';

class GoodsUI extends Component{
	componentDidMount() {		
		this.props.getList();

		var choice = document.querySelectorAll('.choice');
		var flag = true;
		for(var i = 0;i < choice.length;i ++){
			choice[i].onclick=function(){
				if(flag){
					this.className += " red";
					flag = !flag;
				}
				else{
					this.className -= " red"
					flag = !flag;
				}
			}
		}
		var add = document.querySelector('.add');
		var numbers = document.querySelector('.numbers');
		add.onclick = function(){
			numbers.innerHTML = parseInt(numbers.innerHTML)+1;
		}
		var add = document.querySelector('.sup');
		add.onclick = function(){
			numbers.innerHTML = parseInt(numbers.innerHTML)-1;
			if(numbers.innerHTML < 1){
				numbers.innerHTML = 1;
			}
		}

	}
	render(){
		var items = null;
		console.log(this)
		if(this.props){
			items = this.props.goods.slider.map((item,index)=>{
				console.log(this.props.goods.slider)
				return <p key={item+index}>111</p>
			})
		}
		var slide = null;
		if(this.props.goods.slider){
			slide = this.props.goods.slider.map((item,index)=>{
				return <a key={item+index}><img src={item} /></a>
			})
		}
		return(
			<div>
				<div id="header">
					<a onClick={()=>{this.props.history.goBack()}}></a>
					<div className="header-name">商品详情</div>
					<div className="drop">
						<span className="dian"></span>
					</div>
				</div>
				<div id="content">
					<Carousel className="my-carousel" autoplay={false} infinite dots={true}>
      					{slide}
    				</Carousel>
    				<div className="info">
    					<div className='info0'>
    						<div className='word'>
    							{this.props.goods.name}
    						</div>
    						<span><i className='heart'></i></span>
    					</div>
    					<div className='priceall'>
    						<p className='price'>
    							￥<span>{this.props.goods.price}.00</span>
    						</p>
    						<p className='marketprice'>
    							￥<span>{this.props.goods.marketprice}.00</span>
    						</p>    	
    						<p className='id'>
    							商品编号：<span>{this.props.goods.itemcode}</span>
    						</p>   					
    					</div>
    				</div>
    				<div className='choose'>
    					<span className='title'>已选：</span>
    					<span className="color"></span>
    					<span className='size'></span>
    					<span className='num'></span>
    				</div>
    				<div className='property'>
    					<div className='color'>颜色：</div>
    					<div className='colors'>
    						<span className='color-choose choice'>黑色</span>
    						<span className='color-choose choice'>白色</span>
    						<span className='color-choose choice'>红色</span>
    						<span className='color-choose choice'>绿色</span>
    					</div>
    					<div className='size'>尺码：</div>
    					<div className='sizes'>
    						<span className='size-choose choice'>S</span>
    						<span className='size-choose choice'>M</span>
    						<span className='size-choose choice'>L</span>
    						<span className='size-choose choice'>XL</span>
    						<span className='size-choose choice'>XXL</span>
    					</div>
    				</div>
    				<div className='number'>
    					<div className='num-title'>数量：</div>
    					<div className='num-choose'>
    						<span className='sup'></span>
    						<span className='numbers'>1</span>
    						<span className='add'></span>
    					</div>
    				</div>
    				<div className='more'>图文介绍</div>


    				<iframe src={this.props.goods.iframe} id="iframepage" frameborder="0"></iframe>
				</div>
			</div>
		)
	}
}

function getData(dispatch){
	console.log(this)
	axios.get(`/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%22${this.match.params.goods_id}%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=20179061307`)
	.then((res)=>{
		console.log(res.data.data.products[0].middleimgurls);
		dispatch({
			type:"Show_goods",
			payload:{
				slider:res.data.data.products[0].middleimgurls,
				name:res.data.data.products[0].name,
				price:res.data.data.products[0].ytprice,
				marketprice:res.data.data.products[0].marketprice,
				itemcode:res.data.data.products[0].itemcode,
				iframe:res.data.data.productparamsurl
			}
		})
	})
}

const mapState2props = (state,props)=>{
	console.log(state.goods.itemcode)
	return{
		goods:{
			slider:state.goods.slider,
			name:state.goods.name,
			price:state.goods.price,
			marketprice:state.goods.marketprice,
			itemcode:state.goods.itemcode,
			iframe:state.goods.iframe
		}
	}
}

const mapDispatch2props = (dispatch,props)=>{
	return {
		getList:function(){
			getData.bind(this)(dispatch)
		}
	}
}

const Goods = connect(mapState2props,mapDispatch2props)(GoodsUI);

export default Goods;
