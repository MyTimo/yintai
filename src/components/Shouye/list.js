import React ,{ Component } from 'react';

import {connect} from 'react-redux';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'


class List extends Component{
	constructor(){
		super();
		this.state = {
			list:[],
			floor1:{}
		}
	}

	componentDidMount(){
		console.log(this)
		axios.get('/Services/Proxy.ashx?r=20171101911&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2')
		.then((res)=>{
			console.log(res)
			this.state.list = res.data.data.templatelist.slice(9);
			this.state.floor1 = res.data.data.templatelist[8].items[0]
			this.setState({
				list:this.state.list,
				floor1:this.state.floor1
			})
		}).catch((error)=>{
			console.log("XXX")
		})
	}


	render() {
		var item1 = this.state.list.map((item,index)=>{
			var item2 = item.items.map((item,index)=>{
				if(index%2==0){
					return <div className="left"  key={item.itemid}>
								<div className="pic">
									<NavLink to={'/goods/'+item.itemid}>
										<img src={item.imgurl} />
									</NavLink>
								</div>
								<div className='word'>{item.extra.productdetail.name}</div>
								<div className='price'>
									<span className="now">￥{item.extra.productdetail.price}.00</span>
									<span className="old">￥{item.extra.productdetail.marketprice}.00</span>
								</div>
						</div>
				}else{
					return <div className="right" key={item.itemid}>
								<div className="pic">
									<NavLink to={'/goods/'+item.itemid}>
										<img src={item.imgurl} />
									</NavLink>
								</div>
								<div className='word'>{item.extra.productdetail.name}</div>
								<div className='price'>
									<span className="now">￥{item.extra.productdetail.price}.00</span>
									<span className="old">￥{item.extra.productdetail.marketprice}.00</span>
								</div>
					</div>
				}
			})
			return <div className="floor">{item2}</div>
		})

		return (
			<div id="list">
				<div className="title">
					<img src={this.state.floor1.imgurl} />
				</div>
				{item1}
			</div>
		)
	}
}

export default List;



