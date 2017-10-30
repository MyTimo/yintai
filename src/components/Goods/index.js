import React ,{ Component } from 'react';

import {connect} from 'react-redux';
import axios from 'axios';


class Goods extends Component{
	constructor(){
		super();
		this.state = {
			
		}
	}

	/*componentDidMount(){
		axios.get('/Services/Proxy.ashx?r=20171028908&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
		.then((res)=>{
			
			
			this.setState({
				
			})
		}).catch((error)=>{
			console.log("XXX")
		})
	}*/


	render() {
		

		return (
			<div>1</div>
		)
	}
}

export default Goods;
