import React ,{ Component } from 'react';

import {connect} from 'react-redux';
import axios from 'axios';
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';


class Boom extends Component{
	constructor(){
		super();
		this.state = {
			floor1:{},
			floor2:[],
			floor3:{}
		}
	}

	componentDidMount(){
		axios.get('/Services/Proxy.ashx?r=20171028908&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			this.state.floor1 = res.data.data.templatelist[2].items[0];
			this.state.floor2 = res.data.data.templatelist[3].items;
			this.state.floor3 = res.data.data.templatelist[5].items[0];
			console.log(this.state.floor2)
			
			this.setState({
				floor1:this.state.floor1,
				floor2:this.state.floor2,
				floor3:this.state.floor3
			})

		}).catch((error)=>{
			console.log("XXX")
		})
	}


	render() {
/*		var items = this.state.banners.map((item,index)=>{
			console.log(item.imgurl)
			return  <div class="ban5-1">
						<a>
							<div class="pic">
								<img src={item.imgurl} />
								<p>{item.imgname}</p>
							</div>
						</a>
					</div>
		})*/
		console.log(this.state.floor2)
		var items = this.state.floor2.map((item,index)=>{
			return  <li key={item.itemid}>
						<div className="img">
							<NavLink to={'/Goods/'+item.itemid}>
								<img src={item.imgurl} className="lazy" />
							</NavLink>
						</div>
						<div className="word">
							{item.extra.productdetail.name}
						</div>
						<div className="price">
							￥{item.extra.productdetail.price}.00
						</div>
					</li>
		})
		return (
			<div id="boom">
				<div className="boom-floor1">
					<a><img src={this.state.floor1.imgurl} /></a>
				</div>
				<div className="boom-floor2">
					<ul>
						{items}
					</ul>
				</div>
				<div className="boom-floor3">
					<a><img src={this.state.floor3.imgurl} /></a>
				</div>	
			</div>
		)
	}
}

export default Boom
