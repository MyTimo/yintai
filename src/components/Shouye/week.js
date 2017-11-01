import React ,{ Component } from 'react';

import {connect} from 'react-redux';
import axios from 'axios';


class Week extends Component{
	constructor(){
		super();
		this.state = {
			weeks_floor1:{},
			weeks_floor2:[],
			weeks_floor3:[],
			weeks_floor4:[]
		}
	}

	componentDidMount(){
		axios.get('/Services/Proxy.ashx?r=20171028908&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			this.state.weeks_floor1 = res.data.data.templatelist[5].items[0];
			this.state.weeks_floor2 = res.data.data.templatelist[6].items;
			this.state.weeks_floor3 = res.data.data.templatelist[7].items;
			this.state.weeks_floor4 = res.data.data.templatelist[8].items;
			
			this.setState({
				weeks_floor1:this.state.weeks_floor1,
				weeks_floor2:this.state.weeks_floor2,
				weeks_floor3:this.state.weeks_floor3,
				weeks_floor4:this.state.weeks_floor4
			})
		}).catch((error)=>{
			console.log("XXX")
		})
	}


	render() {
		var items_floor2 = this.state.weeks_floor2.map((item,index)=>{
			return <div key={item.itemid}>
						<a><img src={item.imgurl} /></a>
					</div>
		})
		var items_floor3 = this.state.weeks_floor3.map((item,index)=>{
			return <div key={item.itemid}>
						<a><img src={item.imgurl} /></a>
					</div>
		})
		var items_floor4 = this.state.weeks_floor4.map((item,index)=>{
			if(this.state.weeks_floor4!=[]){
				return <a key={item.itemid}><img src={item.imgurl} /></a>
			}
		})

		return (
			<div id="week">
				<div className="week-floor1">
					<a><img src={this.state.weeks_floor1.imgurl} /></a>
				</div>
				<div className="week-floor2">
					{items_floor2}
				</div>
				<div className="week-floor3">
					{items_floor3}
				</div>	
				<div className='week-floor4'>
					{items_floor4}
				</div>			
			</div>
		)
	}
}

export default Week;
