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





class Banner extends Component{
	constructor(){
		super();
		this.state = {
			banners:[]
		}
	}

	componentDidMount(){
		axios.get('/Services/Proxy.ashx?r=20171028908&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			this.state.banners = res.data.data.templatelist[0].items;
			console.log(this.state.banners)
			this.setState({
				banners : this.state.banners
			})

		}).catch((error)=>{
			console.log("XXX")
		})
	}


	render() {
		var items = this.state.banners.map((item,index)=>{
			console.log(item.imgurl)
			return  <div className="ban5-1" key={item.itemid}>
						<a>
							<div className="pic">
								<img src={item.imgurl} />
								<p>{item.imgname}</p>
							</div>
						</a>
					</div>
		})
		return (
			<div id="banner">
				{items}
			</div>
		)
	}
}

export default Banner
