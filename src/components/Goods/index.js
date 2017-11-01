import React ,{ Component } from 'react';

import {connect} from 'react-redux';
import axios from 'axios';


class Goods extends Component{
	constructor(){
		super();
		this.state = {
			
		}
	}

	componentDidMount(){
		console.log(this)
		axios.get(`/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%22${this.props.match.params.goods_id}%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=20179061307`)
		.then((res)=>{
			console.log(res)
			this.setState({
				
			})
		}).catch((error)=>{
			console.log("XXX")
		})
	}


	render() {
		

		return (
			<div>1</div>
		)
	}
}

export default Goods;



